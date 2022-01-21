// Код для слайдера взят из интернета

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
  showSlides((slideIndex += 1));
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Функция перелистывания */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

////////////////////////// section2 slider

/* Устанавливаем индекс слайда по умолчанию */
let sliderIndex = 1;
showNewsSlider(sliderIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlides() {
  showNewsSlider((sliderIndex += 1));
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function prevSlide() {
  showNewsSlider((sliderIndex -= 1));
}

/* Устанавливаем текущий слайд */
function currSlide(n) {
  showNewsSlider((sliderIndex = n));
}

function showNewsSlider(n) {
  let i;
  let slides = document.getElementsByClassName("section2-txt");
  let dots = document.getElementsByClassName("section2-dots__item");

  if (n > slides.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = slides.length;
  }

  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sliderIndex - 1].style.display = "block";
  dots[sliderIndex - 1].className += " active";
}
