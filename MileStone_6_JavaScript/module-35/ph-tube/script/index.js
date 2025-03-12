// active remove class

const activeRemoveClass = () => {
  const activeButton = document.getElementsByClassName("active");
  for (const btn of activeButton) {
    btn.classList.remove("active");
  }
};

// categories api fetch

function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}
loadCategories();

const loadCategoriesVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      activeRemoveClass();
      const clickedButton = document.getElementById(id);
      clickedButton.classList.add("active");
      displayVideos(data.category);
    });
};

// categories display function and create dynamically load

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");
  categories.map((categorie) => {
    const categorieDiv = document.createElement("div");
    categorieDiv.innerHTML = `
      <button id="${categorie.category_id}" onclick="loadCategoriesVideos(${categorie.category_id})" class="btn btn-small hover:bg-[#FF1F3D] hover:text-white"">${categorie.category}</button>
      `;
    categoryContainer.appendChild(categorieDiv);
  });
}

// video details

const loadVideoDetails = (videoId) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.video));

  document.getElementById("details_video").showModal();
};

const displayDetails = (data) => {
  const details = document.getElementById("details");
  details.innerHTML = `
    <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${data.thumbnail} "
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${data.title} </h2>
    <p>${data.description}</p>
    
  </div>
</div>
    `;
};

// videos api fetch

const videosCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    });
};

// videos categories display function and create dynamically load video

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");
  videosContainer.innerHTML = "";

  if (videos.length == 0) {
    videosContainer.innerHTML = `<div
        class="col-span-full flex flex-col justify-center items-center py-20"
      >
        <img class="w-[120px]" src="./assets/Icon.png" alt="" />
        <h1 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h1>
      </div>`;
    return;
  }

  videos.forEach((video) => {
    const videosDiv = document.createElement("div");

    videosDiv.innerHTML = `
    <div class="card bg-base-100">
        <figure class="relative">
          <img
            class="object-cover"
            src=" ${video.thumbnail} "
            alt="Shoes"
          />
          <span
            class="absolute bottom-2 right-2 text-white bg-black px-2 rounded-md text-sm"
            >3hrs 56 min ago</span
          >
        </figure>

        <div class="flex gap-3 py-5">
          <div class="profile px-0">
            <div class="avatar">
              <div class="w-10 h-10 rounded-full">
                <img
                  src="${video.authors[0].profile_picture} "
                />
              </div>
            </div>
          </div>
          <div class="intro space-y-1">
            <h2 class="text-md font-semibold">
              ${video.title}
            </h2>
            <p class="text-sm text-gray-400 flex gap-2 items-center">
              ${video.authors[0].profile_name}
              <img class="w-4 h-4"
                src="./assets/verified-icon.png"
                alt="verified-icon picture"
              />
            </p>
            <p class="text-sm text-gray-400">${video.others.views} views</p>
          </div>
        </div>
        <button id='details-container' onclick="loadVideoDetails('${video.video_id} ')" class="btn btn-block">Show Details</button>

      </div>
    `;
    videosContainer.append(videosDiv);
  });
};

videosCategories();
