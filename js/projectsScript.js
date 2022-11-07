//function for loading cards for personal projects
function loadPersonalProjects(projects){
    //console.log(data.projects);

    projects.map((project, index) => {
      //for carousel bottom button slider
      let button = document.createElement("button");
      button.setAttribute("type","button");
      button.setAttribute("data-bs-target","#carouselExampleIndicators");
      button.setAttribute("data-bs-slide-to",`${index}`);
      button.setAttribute("aria-label",`Slide ${index}`);
      button.setAttribute("class",`${index === 0 ? "active" : ""}`);
      button.setAttribute("aria-current",`${index === 0 ? "true" : ""}`);
      document.getElementById("carousel-indicators").appendChild(button);
  
      //for multiple images
      let innerImgDiv = document.createElement("div");
      innerImgDiv.setAttribute("class",`carousel-item ${index === 0 ? "active" : ""}`);
      // innerImgDiv.innerHTML = `<img src=${item} class="activity-card-image pb-3 pb-md-0" alt="...">`;
      innerImgDiv.innerHTML = `<div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
      <div class="card carouselCards">
        ${project.image !== null ? `<img src="${project.image}" alt="project image" />` : ``}
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${project.duration}</h6>
            ${project.link !== null ? `<a href="${project.link}" target="_blank" class="card-link">${project.link}</a>` : ``}
            <ul>
                ${project.description.map((item) => `<li>${item}</li>`).join("\n")}
            </ul>
        </div>
      </div>
      </div>`;
      document.getElementById("carousel-inner").appendChild(innerImgDiv);
    });
}

async function loadContent(){

    //fetch skills from data.json file
    let response = await fetch("../data.json");

    let data = await response.json();
    //console.log(data.projects);

    let personalProjectsDiv = document.getElementById("personalProjects");
    personalProjectsDiv.innerHTML = `<div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators" id="carousel-indicators"></div>
    <div class="carousel-inner" id="carousel-inner"></div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>`;

    loadPersonalProjects(data.projects);
    //loadEducationDetails(data);
}

loadContent();