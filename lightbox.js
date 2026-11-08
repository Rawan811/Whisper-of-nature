const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const closeButton = document.createElement("button");
closeButton.className = "lightbox-close";
closeButton.innerHTML = "&times;";
closeButton.setAttribute("aria-label", "Close image");

const fullImage = document.createElement("img");
fullImage.className = "lightbox-image";

lightbox.appendChild(fullImage);
lightbox.appendChild(closeButton);

document.body.appendChild(lightbox);

images.forEach(function (image) {

    image.addEventListener("click", function () {

        fullImage.src = image.src;
        fullImage.alt = image.alt;

        lightbox.classList.add("show");

    });

});

closeButton.addEventListener("click", function () {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});