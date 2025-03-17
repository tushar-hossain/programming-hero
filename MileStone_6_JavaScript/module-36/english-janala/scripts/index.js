// hidden navbar, vocabulary, question section and spinner here

document.getElementById("navbar").style.display = "none";
document.getElementById("vocabulary-section").style.display = "none";
document.getElementById("questions-section").style.display = "none";

document.getElementById("spin").style.display = "none";

// if clicked button then scroll this section smoothly view
function scrollView(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// active button clicked before remove
const activeRemoveClass = () => {
  const activeButton = document.getElementsByClassName("active");
  for (const btn of activeButton) {
    btn.classList.remove("active");
  }
};

// submit form functionality
const btnGetStart = document.getElementById("btn-getStart");
btnGetStart.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const password = document.getElementById("password");

  if (name.value === "" && password.value === "") {
    alert("Please Tell use your Name first");
  } else {
    if (name.value !== "") {
      if (password.value === "123456") {
        Swal.fire({
          title: `${name.value} Login Successful!`,
          icon: "success",
          draggable: true,
        });

        document.getElementById("navbar").style.display = "block";
        document.getElementById("vocabulary-section").style.display = "block";
        document.getElementById("questions-section").style.display = "block";
        document.getElementById("banner").style.display = "none";

        name.value = "";
        password.value = "";
      } else {
        alert("Wrong Password Contact admin to get your Login Code");
      }
    } else {
      alert("Please enter your Name first");
    }
  }
});

const logout = () => {
  document.getElementById("banner").style.display = "block";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("vocabulary-section").style.display = "none";
  document.getElementById("questions-section").style.display = "none";
};

// Dynamic api call function
const dynamicApiCall = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

// Vocabularies lesson button load api
const vocabulariesLessonButton = async () => {
  const data = await dynamicApiCall(
    "https://openapi.programming-hero.com/api/levels/all"
  );
  displayVocabulariesLessonBtn(data);
};

// Vocabularies lesson button display
const displayVocabulariesLessonBtn = async (data) => {
  const btnLesson = document.getElementById("btn-lesson");

  data.forEach((lesson) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button
          id=${lesson.level_no}
          onclick="lessonCategory(${lesson.level_no})"
          class="btn bg-white text-[#422AD5] border-[#422AD5] hover:bg-[#422AD5] hover:text-white font-bold"
        >
          <i class="fa-solid fa-book-open w-5"></i>
          <a>Lesson -${lesson.level_no}</a>
        </button>
    `;
    btnLesson.appendChild(div);
    document.getElementById("spinner").style.display = "none";
  });
};

// Vocabularies lesson button clicked load api all data
const lessonCategory = async (id) => {
  document.getElementById("spin").style.display = "block";
  const data = await dynamicApiCall(
    `https://openapi.programming-hero.com/api/level/${id}`
  );

  activeRemoveClass();
  const clickedButton = document.getElementById(id);
  clickedButton.classList.add("active");

  displayLessonCategory(data);
};

// Vocabularies lesson button clicked views all data
const displayLessonCategory = (data) => {
  document.getElementById("lesson-select").style.display = "none";
  const displayLesson = document.getElementById("display-lesson");
  displayLesson.innerHTML = "";

  if (data.length < 1) {
    displayLesson.innerHTML = `
      <div class="space-y-4 text-center col-span-full flex flex-col justify-center items-center">
      <img class="mx-auto" src="./assets/alert-error.png" alt="" />
      <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h1 class="text-2xl font-bold">নেক্সট Lesson এ যান</h1>
    </div>
      `;
    document.getElementById("spin").style.display = "none";
  }

  data.forEach((lesson) => {
    const div = document.createElement("div");
    div.innerHTML = `
    
     <div class="space-y-4 bg-white p-6 text-center rounded-lg">
     <div class="space-y-4 border-[#cfccccc2] hover:bg-[#d9f99d11] p-6 border text-center rounded-lg">
        <h1 class="text-2xl font-bold">${lesson.word}</h1>
        <p class="text-xs font-medium">Meaning /Pronunciation</p>
        <h1 class="font-bold">${
          lesson.meaning ? lesson.meaning : "অর্থ নেই"
        } / ${lesson.pronunciation}</h1>
        <div class="flex justify-between mt-10">
        <i onclick=vocabulariesDetailsButton(${
          lesson.id
        }) class="fa-solid fa-circle-info p-3 bg-[#1A91FF1A] rounded-lg btn"></i>

        <i onclick=vocabulariesSpeakButton('${
          lesson.word
        }') class="fa-solid fa-volume-high p-3 bg-[#1A91FF1A] rounded-lg btn"></i>
    </div>
    </div> 


    <dialog id="modal" class="modal">
        <div id="btn-modal" class="modal-box">


            
          </div>
      </dialog>
    `;
    displayLesson.appendChild(div);
    document.getElementById("spin").style.display = "none";
  });
};

// Vocabularies details button clicked views all data
const vocabulariesDetailsButton = async (id) => {
  const data = await dynamicApiCall(
    `https://openapi.programming-hero.com/api/word/${id}`
  );
  displayDetailsButton(data);
};

// Vocabularies details button clicked the modal is open and view pronunciation and Synonyms

const displayDetailsButton = (data) => {
  document.getElementById("modal").showModal();

  const btnModal = document.getElementById("btn-modal");
  btnModal.innerHTML = `
  <div class="space-y-4 bg-white p-6 rounded-lg">
  <div class="space-y-4 border-[#cfccccc2] hover:bg-[#d9f99d11] p-8 border text-left rounded-lg">
    <h1 class="text-2xl font-bold">
      ${data.word} (<i class="fa-solid fa-microphone-lines"></i> : ${
    data.pronunciation
  })
    </h1>
    <h1 class="text-2xl font-bold">Meaning</h1>
    <p class="font-semibold">${
      data.meaning ? data.meaning : "অর্থ পাওয়া যাইনি"
    }</p>
    <h1 class="text-xl font-bold">Example</h1>
    <p class="font-medium">${data.sentence}</p>
    <h1 class="text-xl font-bold">সমার্থক শব্দ গুলো</h1>

    <div class="flex flex-wrap mt-2">
    
    ${
      data.synonyms.length < 1
        ? ""
        : data.synonyms
            .map((word) => `<button class="btn mr-2">${word}</button>`)
            .join(" ")
    }

    </div>
  </div>
</div>

<div class="text-left">
                <form method="dialog">
                  <button class="btn bg-[#422AD5] text-white">Complete Learning</button>
                </form>
              </div>
  `;
};

// vocabularies Speak Button click onclick event
const vocabulariesSpeakButton = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN";
  window.speechSynthesis.speak(utterance);
};

vocabulariesLessonButton();
