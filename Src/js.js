let index = 1;
showSlides(index);

// BOTAO DE IDA
function addSlides(n) {
  showSlides((index += n));
}

// BOTAO DE VINDA
function currentSlide(n) {
  showSlides((index = n));
}

// ONDE TUDO ACONTECE
function showSlides(n) {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].classList.remove("active");
  }

  slides[index - 1].style.display = "flex";
  dots[index - 1].classList.add("active");
}