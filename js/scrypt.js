const sectionRating = document.querySelector(".section__rating");
const sectionThanks = document.querySelector(".section__thanks");
const submitBtn = document.querySelector(".rating__submit-btn");
const numberBtn = document.querySelector(".rating__btn-div");
const btnExit = document.querySelector(".exit-btn");
const thanksSubHeading = document.querySelector(".thanks__sub-heading");
const ratingBtn = document.querySelectorAll(".rating__btn");

const init = function () {
  sectionRating.classList.remove("hidden");
  sectionThanks.classList.add("hidden");

  ratingBtn.forEach((el) => el.classList.remove("btn-active"));
  let pickedNumber = 0;
};
init();

numberBtn.addEventListener("click", function (e) {
  btn = e.target.closest(".rating__btn");

  pickedNumber = btn.textContent;
  ratingBtn.forEach((el) => {
    el === btn
      ? btn.classList.toggle("btn-active")
      : el.classList.remove("btn-active");
  });
});

submitBtn.addEventListener("click", function () {
  thanksSubHeading.textContent = `You selected ${pickedNumber} out of 5`;
  sectionRating.classList.toggle("hidden");
  sectionThanks.classList.toggle("hidden");
});

btnExit.addEventListener("click", init);
