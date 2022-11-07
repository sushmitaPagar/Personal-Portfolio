//function for loading educational details
function loadEducationDetails(data){
    //console.log(data.education);
    let educationDetailsDiv = document.getElementById("educationDetails");

    data.education.forEach((item) => {
        //insert a card for each project using columns
        let childDiv = document.createElement("div");
        childDiv.setAttribute("class", "col-12 col-sm-6 col-md-6 col-lg-4 mb-3");
        educationDetailsDiv.appendChild(childDiv);

        childDiv.innerHTML = `<div class="cards card">
        <div class="card-body">
          <h4 class="card-title">${item.title}</h4>
          <h6 class="card-subtitle mb-2">${item.institute}</h6>
          <div class="d-flex justify-content-between">
            <h6 class="card-subtitle mb-2 text-muted">${item.duration}</h6>
            ${item.score !== null ? `<h6 class="card-subtitle mb-2 text-muted">${item.score}</h6>` : ``}
          </div>
            ${item.courses.length !== 0 ? `<h6 class="card-text"><strong>Courses:</strong></h6>` : ``}
            <ul>
                ${item.courses.map((course) => `<li>${course}</li>`).join("\n")}
            </ul>
            ${item.projects.length !== 0 ? `<h6 class="card-text"><strong>Projects:</strong></h6>` : ``}
            <ul>
                ${item.projects.map((project) => `<li>${project}</li>`).join("\n")}
            </ul>
        </div>
      </div>`;
    })
}

//function for loading skill pills
function loadSkillPills(data) {
    //get div element for loading the skills
    let skillsDiv = document.getElementById("skillPills");

    data.skills.forEach((item) => {
        let skillPill = document.createElement("div");
        skillPill.setAttribute("class", "pills");
        skillPill.innerText = item.name;
        skillsDiv.appendChild(skillPill);
    })
}

//Initial function for loading the dynamic content
async function loadContent(){

    //fetch skills from data.json file
    let response = await fetch("data.json");

    let data = await response.json();
    //console.log(data.skills);
    
    loadSkillPills(data);
    
}

loadContent();