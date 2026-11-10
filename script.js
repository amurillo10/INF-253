// Information for each library program

const programs = {
    "book-club": {
        title: "Community Book Club",
        description: "Join other community members to read and discuss interesting books.",
        audience: "Intended for adults.",
        bring: "What to bring: Your current book and ideas to share."
    },

    "story-time": {
        title: "Family Story Time",
        description: "Enjoy stories, songs, and fun activities with children and families.",
        audience: "Intended for children and families.",
        bring: "What to bring: Your imagination and a favorite story."
    },

    "genealogy": {
        title: "Genealogy Workshop",
        description: "Learn how to research your family history and discover your roots.",
        audience: "Intended for adults and seniors.",
        bring: "What to bring: Any family photos or information you have."
    },

    "printing": {
        title: "Introduction to 3D Printing",
        description: "Explore how 3D printing works and learn about creating simple designs.",
        audience: "Intended for teens and adults.",
        bring: "What to bring: No special materials are needed."
    },

    "history": {
        title: "Local History Talk",
        description: "Learn about the history of your community and important local events.",
        audience: "Open to all ages.",
        bring: "What to bring: Questions and an interest in local history."
    }
};


// PROGRAM DETAILS INTERACTION

const detailButtons = document.querySelectorAll(".details-button");

const programTitle = document.getElementById("program-title");
const programDescription = document.getElementById("program-description");
const programAudience = document.getElementById("program-audience");
const programBring = document.getElementById("program-bring");

detailButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedProgram = button.dataset.program;
        const program = programs[selectedProgram];

        programTitle.textContent = program.title;
        programDescription.textContent = program.description;
        programAudience.textContent = program.audience;
        programBring.textContent = program.bring;

    });

});


// REGISTRATION DROPDOWN INTERACTION

const registerButtons = document.querySelectorAll(".register-button");

const programSelect = document.getElementById("program-select");
const registrationMessage = document.getElementById("registration-message");

registerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedProgram = button.dataset.program;

        programSelect.value = selectedProgram;

        registrationMessage.textContent =
            "You selected " + programs[selectedProgram].title + ".";

    });

});


// EXERCISE 10: SHOW AND HIDE PROGRAM INFORMATION

const infoButton = document.getElementById("info-button");
const extraInfo = document.getElementById("extra-info");

infoButton.addEventListener("click", function() {

    if (extraInfo.hidden) {

        extraInfo.hidden = false;
        infoButton.textContent = "Hide Program Information";
        infoButton.setAttribute("aria-expanded", "true");

    } else {

        extraInfo.hidden = true;
        infoButton.textContent = "Show Program Information";
        infoButton.setAttribute("aria-expanded", "false");

    }

});
