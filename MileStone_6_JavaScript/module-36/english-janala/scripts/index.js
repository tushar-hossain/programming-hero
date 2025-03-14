// hidden navbar and spinner here

// document.getElementById("navbar").style.display = "none";
document.getElementById("spin").style.display = "none";

// active button clicked before remove

const activeRemoveClass = () => {
  const activeButton = document.getElementsByClassName("active");
  for (const btn of activeButton) {
    btn.classList.remove("active");
  }
};

const btnGetStart = document.getElementById("btn-getStart");
btnGetStart.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const password = document.getElementById("password");

  if (name.value === "" && password.value === "") {
    alert("Please Tell use your Name first");
  }

  if (name.value !== "") {
    if (password.value === "123456") {
      console.log("password found");
      document.getElementById("navbar").style.display = "block";
      name.value = "";
      password.value = "";
    } else {
      alert("Wrong Password Contact admin to get your Login Code");
    }
  } else {
    alert("Please enter your Name first");
  }
});

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
     <div class="space-y-4 border-[#cfccccc2] hover:bg-[#d9f99d11] p-8 border text-center rounded-lg">
        <h1 class="text-2xl font-bold">${lesson.word}</h1>
        <p class="text-xs font-medium">Meaning /Pronounciation</p>
        <h1 class="text-2xl font-bold">${lesson.meaning}</h1>
        <div class="flex justify-between mt-10">
        <i class="fa-solid fa-circle-info p-3 bg-[#1A91FF1A] rounded-lg btn"></i>
        <i class="fa-solid fa-volume-high p-3 bg-[#1A91FF1A] rounded-lg btn"></i>
    </div>
    </div> 
    `;
    displayLesson.appendChild(div);
    document.getElementById("spin").style.display = "none";
  });
};

vocabulariesLessonButton();
