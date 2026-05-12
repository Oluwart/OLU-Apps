// ================= BASIC INPUTS =================

const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const aboutInput = document.getElementById("about");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const skillsInput = document.getElementById("skills");


// ================= LIVE PREVIEW =================

function updateText(input, previewId, fallback){

  document.getElementById(previewId).textContent =
    input.value || fallback;

}

nameInput.addEventListener("input", () => {
  updateText(nameInput, "preview-name", "Your Name");
});

titleInput.addEventListener("input", () => {
  updateText(titleInput, "preview-title", "Professional Title");
});

aboutInput.addEventListener("input", () => {
  updateText(
    aboutInput,
    "preview-about",
    "Your professional summary will appear here."
  );
});

emailInput.addEventListener("input", () => {
  updateText(emailInput, "preview-email", "Email");
});

phoneInput.addEventListener("input", () => {
  updateText(phoneInput, "preview-phone", "Phone");
});


// ================= SKILLS =================

skillsInput.addEventListener("input", () => {

  const skillsContainer =
    document.getElementById("preview-skills");

  skillsContainer.innerHTML = "";

  skillsInput.value
    .split(",")
    .forEach(skill => {

      if(skill.trim() !== ""){

        const span = document.createElement("span");

        span.textContent = skill.trim();

        skillsContainer.appendChild(span);

      }

    });

});


// ================= EDUCATION =================

const addEducationBtn =
  document.getElementById("addEducationBtn");

const educationInputs =
  document.getElementById("educationInputs");

const educationPreview =
  document.getElementById("educationPreview");

addEducationBtn.addEventListener("click", () => {

  const div = document.createElement("div");

  div.classList.add("education-group");

  div.innerHTML = `
  
    <input type="text" class="school" placeholder="School Name">

    <input type="text" class="course" placeholder="Course / Program">

    <input type="text" class="year" placeholder="Year">

  `;

  educationInputs.appendChild(div);

  attachEducationListeners();

});

function updateEducationPreview(){

  educationPreview.innerHTML = "";

  document.querySelectorAll(".education-group")
    .forEach(group => {

      const school =
        group.querySelector(".school").value;

      const course =
        group.querySelector(".course").value;

      const year =
        group.querySelector(".year").value;

      const div = document.createElement("div");

      div.classList.add("education-item");

      div.innerHTML = `
      
        <h3>${school || "University Name"}</h3>

        <p>${course || "Course / Program"}</p>

        <span>${year || "2020 - 2024"}</span>

      `;

      educationPreview.appendChild(div);

    });

}

function attachEducationListeners(){

  document
    .querySelectorAll(".education-group input")
    .forEach(input => {

      input.addEventListener(
        "input",
        updateEducationPreview
      );

      input.addEventListener(
        "input",
        saveData
      );

    });

}


// ================= EXPERIENCE =================

const addExperienceBtn =
  document.getElementById("addExperienceBtn");

const experienceInputs =
  document.getElementById("experienceInputs");

const experiencePreview =
  document.getElementById("experiencePreview");

addExperienceBtn.addEventListener("click", () => {

  const div = document.createElement("div");

  div.classList.add("experience-group");

  div.innerHTML = `
  
    <input type="text"
      class="company"
      placeholder="Company Name">

    <input type="text"
      class="position"
      placeholder="Job Title">

    <input type="text"
      class="experience-year"
      placeholder="Year">

    <textarea
      class="job-description"
      placeholder="Job Description"></textarea>

  `;

  experienceInputs.appendChild(div);

  attachExperienceListeners();

});

function updateExperiencePreview(){

  experiencePreview.innerHTML = "";

  document.querySelectorAll(".experience-group")
    .forEach(group => {

      const company =
        group.querySelector(".company").value;

      const position =
        group.querySelector(".position").value;

      const year =
        group.querySelector(".experience-year").value;

      const description =
        group.querySelector(".job-description").value;

      const div = document.createElement("div");

      div.classList.add("experience-item");

      div.innerHTML = `
      
        <h3>${company || "Company Name"}</h3>

        <h4>${position || "Job Title"}</h4>

        <span>${year || "2022 - Present"}</span>

        <p>
          ${description || "Your job description will appear here."}
        </p>

      `;

      experiencePreview.appendChild(div);

    });

}

function attachExperienceListeners(){

  document
    .querySelectorAll(
      ".experience-group input, .experience-group textarea"
    )
    .forEach(input => {

      input.addEventListener(
        "input",
        updateExperiencePreview
      );

      input.addEventListener(
        "input",
        saveData
      );

    });

}


// ================= REFERENCES =================

const addReferenceBtn =
  document.getElementById("addReferenceBtn");

const referenceInputs =
  document.getElementById("referenceInputs");

const referencePreview =
  document.getElementById("referencePreview");

addReferenceBtn.addEventListener("click", () => {

  const div = document.createElement("div");

  div.classList.add("reference-group");

  div.innerHTML = `
  
    <input type="text"
      class="reference-name"
      placeholder="Reference Name">

    <input type="text"
      class="reference-position"
      placeholder="Position">

    <input type="text"
      class="reference-company"
      placeholder="Company">

    <input type="text"
      class="reference-contact"
      placeholder="Phone or Email">

  `;

  referenceInputs.appendChild(div);

  attachReferenceListeners();

});

function updateReferencePreview(){

  referencePreview.innerHTML = "";

  document.querySelectorAll(".reference-group")
    .forEach(group => {

      const name =
        group.querySelector(".reference-name").value;

      const position =
        group.querySelector(".reference-position").value;

      const company =
        group.querySelector(".reference-company").value;

      const contact =
        group.querySelector(".reference-contact").value;

      const div = document.createElement("div");

      div.classList.add("reference-item");

      div.innerHTML = `
      
        <h3>${name || "Reference Name"}</h3>

        <h4>${position || "Position"}</h4>

        <p>${company || "Company Name"}</p>

        <p>${contact || "Phone or Email"}</p>

      `;

      referencePreview.appendChild(div);

    });

}

function attachReferenceListeners(){

  document
    .querySelectorAll(".reference-group input")
    .forEach(input => {

      input.addEventListener(
        "input",
        updateReferencePreview
      );

      input.addEventListener(
        "input",
        saveData
      );

    });

}

// ================= PDF DOWNLOAD =================

const downloadBtn =
  document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {

  const cv =
    document.getElementById("cv-preview");

  // ENABLE PDF MODE
  document.body.classList.add("pdf-mode");

  // WAIT FOR RENDER
  await new Promise(resolve =>
    setTimeout(resolve, 800)
  );

  const options = {

    margin:0,

    filename:"My_CV.pdf",

    image:{
      type:"jpeg",
      quality:1
    },

    html2canvas:{
      scale:3,
      useCORS:true,
      scrollY:0
    },

    jsPDF:{
      unit:"mm",
      format:"a4",
      orientation:"portrait"
    }

  };

  try{

    await html2pdf()
      .set(options)
      .from(cv)
      .save();

  }catch(error){

    console.log(error);

    alert("PDF download failed");

  }

  // REMOVE PDF MODE
  document.body.classList.remove("pdf-mode");

});


// ================= PRINT =================

const printBtn =
  document.getElementById("printBtn");

printBtn.addEventListener("click", () => {

  window.print();

});


// ================= SAVE DATA =================

function saveData(){

  const data = {

    name: nameInput.value,
    title: titleInput.value,
    about: aboutInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    skills: skillsInput.value,

    education: [...document.querySelectorAll(".education-group")]
      .map(group => ({
        school:
          group.querySelector(".school").value,

        course:
          group.querySelector(".course").value,

        year:
          group.querySelector(".year").value
      })),

    experience: [...document.querySelectorAll(".experience-group")]
      .map(group => ({
        company:
          group.querySelector(".company").value,

        position:
          group.querySelector(".position").value,

        year:
          group.querySelector(".experience-year").value,

        description:
          group.querySelector(".job-description").value
      })),

    references: [...document.querySelectorAll(".reference-group")]
      .map(group => ({
        name:
          group.querySelector(".reference-name").value,

        position:
          group.querySelector(".reference-position").value,

        company:
          group.querySelector(".reference-company").value,

        contact:
          group.querySelector(".reference-contact").value
      }))

  };

  localStorage.setItem(
    "cvData",
    JSON.stringify(data)
  );

}


// ================= LOAD DATA =================

function loadData(){

  const savedData =
    JSON.parse(localStorage.getItem("cvData"));

  if(!savedData) return;

  nameInput.value = savedData.name || "";
  titleInput.value = savedData.title || "";
  aboutInput.value = savedData.about || "";
  emailInput.value = savedData.email || "";
  phoneInput.value = savedData.phone || "";
  skillsInput.value = savedData.skills || "";

  nameInput.dispatchEvent(new Event("input"));
  titleInput.dispatchEvent(new Event("input"));
  aboutInput.dispatchEvent(new Event("input"));
  emailInput.dispatchEvent(new Event("input"));
  phoneInput.dispatchEvent(new Event("input"));
  skillsInput.dispatchEvent(new Event("input"));

}


// ================= CLEAR BUTTON =================

const clearBtn =
  document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {

  localStorage.removeItem("cvData");

  location.reload();

});


// ================= INIT =================

attachEducationListeners();
attachExperienceListeners();
attachReferenceListeners();

updateEducationPreview();
updateExperiencePreview();
updateReferencePreview();

loadData();

document
  .querySelectorAll("input, textarea")
  .forEach(input => {

    input.addEventListener(
      "input",
      saveData
    );

  });


// ================= TEMPLATE SWITCHER =================

const templateCards =
  document.querySelectorAll(".template-card");

const cvPreview =
  document.getElementById("cv-preview");

templateCards.forEach(card => {

  card.addEventListener("click", () => {

    const template =
      card.dataset.template;

    // REMOVE OLD TEMPLATE
    cvPreview.classList.remove(
      "modern-template",
      "classic-template",
      "minimal-template",
      "sidebar-template"
    );

    // ADD NEW TEMPLATE
    cvPreview.classList.add(
      `${template}-template`
    );

    // ACTIVE CARD
    templateCards.forEach(c =>
      c.classList.remove("active")
    );

    card.classList.add("active");

    // SAVE
    localStorage.setItem(
      "selectedTemplate",
      template
    );

  });

});


// LOAD SAVED TEMPLATE

const savedTemplate =
  localStorage.getItem("selectedTemplate");

if(savedTemplate){

  cvPreview.classList.remove(
    "modern-template",
    "classic-template",
    "minimal-template",
    "sidebar-template"
  );

  cvPreview.classList.add(
    `${savedTemplate}-template`
  );

  templateCards.forEach(card => {

    card.classList.remove("active");

    if(card.dataset.template === savedTemplate){

      card.classList.add("active");

    }

  });

}


// ================= WORD EXPORT =================

const wordBtn =
  document.getElementById("wordBtn");

wordBtn.addEventListener("click", () => {

  const cv =
    document.getElementById("cv-preview");

  // CREATE WORD CONTENT
  const html = `
  
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns='http://www.w3.org/TR/REC-html40'>

    <head>
      <meta charset='utf-8'>
      <title>CV</title>
    </head>

    <body>
      ${cv.innerHTML}
    </body>

    </html>
  
  `;

  // CONVERT TO BLOB
  const blob = new Blob(
    ['\ufeff', html],
    {
      type:'application/msword'
    }
  );

  // DOWNLOAD
  saveAs(blob, "My_CV.doc");

});

// ================= AI SUMMARY GENERATOR =================

const generateSummaryBtn =
  document.getElementById("generateSummaryBtn");

generateSummaryBtn.addEventListener("click", () => {

  const title =
    titleInput.value.toLowerCase();

  let summary = "";

  // WEB DEVELOPER
  if(title.includes("web")){

    summary =
      "Passionate Web Developer with experience building responsive and user-friendly websites and web applications. Skilled in HTML, CSS, JavaScript, and modern frontend technologies.";

  }

  // GRAPHIC DESIGNER
  else if(title.includes("graphic")){

    summary =
      "Creative Graphic Designer with strong experience in branding, social media design, and visual communication. Skilled in creating modern and engaging designs.";

  }

  // TEACHER
  else if(title.includes("teacher")){

    summary =
      "Dedicated Teacher with experience creating engaging learning environments and helping students achieve academic success through effective teaching methods.";

  }

  // ACCOUNTANT
  else if(title.includes("account")){

    summary =
      "Detail-oriented Accountant with strong knowledge in financial reporting, budgeting, bookkeeping, and financial analysis.";

  }

  // DEFAULT
  else{

    summary =
      "Motivated professional with strong communication, teamwork, and problem-solving skills. Passionate about delivering quality work and achieving organizational goals.";

  }

  // SET SUMMARY
  aboutInput.value = summary;

  // UPDATE PREVIEW
  aboutInput.dispatchEvent(
    new Event("input")
  );

  // SAVE
  saveData();

});