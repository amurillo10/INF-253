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
