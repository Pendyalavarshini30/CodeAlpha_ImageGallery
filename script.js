const images = document.querySelectorAll(".image img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target !== lightboxImg){

        lightbox.style.display = "none";

    }

});