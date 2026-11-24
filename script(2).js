// Information about each library program
const programs = {
    "book-club": {
        title: "Community Book Club",
        description: "Join other readers to discuss books, share opinions, and discover new stories.",
        audience: "Adults",
        bring: "Your current book and ideas."
    },
    "story-time": {
        title: "Family Story Time",
        description: "Enjoy stories and activities designed for children and their families.",
        audience: "Children and families",
        bring: "Your imagination and a favorite story."
    },
    "genealogy": {
        title: "Genealogy Workshop",
        description: "Learn how to research your family history and discover more about your background.",
        audience: "Adults and seniors",
        bring: "Family photos or information about your family."
    },
    "printing": {
        title: "Introduction to 3D Printing",
        description: "Explore how 3D printing works and learn about this technology.",
        audience: "Teens and adults",
        bring: "No special materials are needed."
    },
    "history": {
        title: "Local History Talk",
        description: "Learn about the history of the local community and ask questions.",
        audience: "All ages",
        bring: "Your questions and interest in local history."
    }
};

// Page elements
const programTitle = document.getElementById("program-title");
const programDescription = document.getElementById("program-description");
const programAudience = document.getElementById("program-audience");
const programBring = document.getElementById("program-bring");
const programSelect = document.getElementById("program-select");
const registrationMessage = document.getElementById("registration-message");

// View Details buttons
const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedProgram = button.dataset.program;
        const program = programs[selectedProgram];

        programTitle.textContent = program.title;
        programDescription.textContent = program.description;
        programAudience.textContent = program.audience;
        programBring.textContent = program.bring;
    });
});

// Register buttons
const registerButtons = document.querySelectorAll(".register-button");

registerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedProgram = button.dataset.program;

        programSelect.value = selectedProgram;
        registrationMessage.textContent = "You selected " + programs[selectedProgram].title + ". Please complete the form below.";

        document.getElementById("registration").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Registration form
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const selectedProgram = programSelect.value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const program = programs[selectedProgram];

    registrationMessage.textContent =
        "Thank you, " + name + "! Your registration request for " +
        program.title + " has been received. You selected " +
        attendance + " attendance.";

    registrationForm.reset();
});

// Additional Information button
const infoButton = document.getElementById("info-button");
const extraInfo = document.getElementById("extra-info");

infoButton.addEventListener("click", function() {
    const isHidden = extraInfo.hidden;

    extraInfo.hidden = !isHidden;
    infoButton.setAttribute("aria-expanded", String(isHidden));

    if (isHidden) {
        infoButton.textContent = "Hide Additional Information";
    } else {
        infoButton.textContent = "Show Additional Information";
    }
});
