function attachNavigationHandlers() {
    const toggleNavigation = () =>
        document.querySelector(".navigation").classList.toggle("navigation--open");

    document.querySelector(".navigation__btn").addEventListener("click", (e) => {
        e.stopPropagation(); //prevent bubble event to document as we have subscription bellow
        toggleNavigation();
    });

    document.addEventListener("click", toggleNavigation);
}

function attachHandlersToSlider(){

}

attachNavigationHandlers();
attachHandlersToSlider();

// //slider
// const activeSlide = document.querySelector(".item-slide_active");
// const sliderItem = document.querySelectorAll(".item-slide");
// const sliderContainer = document.querySelector(".slider__container");
// const sliderWrapper = document.querySelector(".slider");
// const btnIndicators = document.querySelectorAll(
//     ".command-centre__btn-indicators"
// );
// const sliderItemGradient = document.querySelectorAll(".item-slide__gradient");
// const btnPrev = document.querySelector(".command-centre__arrow-prev");
// const btnNext = document.querySelector(".command-centre__arrow-next");
//
// let lengthSliderContainer = document.querySelectorAll(".item-slide").length;
// let widthActiveSlide, widthNotActiveSlide, startWidthSliderContainer;
//
// //определяем ширину контейнера слайдов в px
// function getWidthElements(active, notActive) {
//     startWidthSliderContainer =
//         sliderItem.length * (20 + notActive) + (active - notActive);
//     sliderContainer.style.width = `${startWidthSliderContainer}px`;
// }
//
// getWidthElements(645, 400);
//
// // paginations logic
//
// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("command-centre__btn-indicators") && !e.target.classList.contains("command-centre__btn-indicators_active")) {
//         for (let i = 0; i < btnIndicators.length; i++) {
//             btnIndicators[i].classList.remove(
//                 "command-centre__btn-indicators_active"
//             );
//             sliderItem[i].classList.remove("item-slide_active");
//             sliderItemGradient[i].classList.remove("item-slide__gradient_active");
//         }
//
//         e.target.classList.add("command-centre__btn-indicators_active");
//
//         for (let j = 0; j < btnIndicators.length; j++) {
//             if (
//                 btnIndicators[j].classList.contains(
//                     "command-centre__btn-indicators_active"
//                 )
//             ) {
//                 if (j !== 0 && j !== btnIndicators.length - 1) {
//                     btnPrev.disabled = false;
//                     btnNext.disabled = false;
//                 }
//
//                 if (j == 0) {
//                     btnPrev.disabled = false;
//                     btnNext.disabled = true;
//                 }
//                 if (j == btnIndicators.length - 1) {
//                     btnPrev.disabled = true;
//                     btnNext.disabled = false;
//                 }
//
//                 sliderItem[j].classList.add("item-slide_active");
//                 sliderItemGradient[j].classList.add("item-slide__gradient_active");
//
//                 sliderContainer.style.transform = `translateX(-${
//                     j * (sliderItem[j].offsetWidth + 20)
//                 }px)`;
//                 break;
//             }
//         }
//     }
// });
//
// btnPrev.addEventListener("click", () => {
//     btnNext.disabled = false;
//     for (let i = 0; i < btnIndicators.length - 1; i++) {
//         if (
//             btnIndicators[i].classList.contains(
//                 "command-centre__btn-indicators_active"
//             )
//         ) {
//             if (i == btnIndicators.length - 2) {
//                 btnPrev.disabled = true;
//             }
//             btnIndicators[i].classList.remove(
//                 "command-centre__btn-indicators_active"
//             );
//             btnIndicators[i + 1].classList.add(
//                 "command-centre__btn-indicators_active"
//             );
//             sliderItem[i].classList.remove("item-slide_active");
//             sliderItemGradient[i].classList.remove("item-slide__gradient_active");
//             sliderItem[i + 1].classList.add("item-slide_active");
//             sliderItemGradient[i + 1].classList.add("item-slide__gradient_active");
//             sliderContainer.style.transform = `translateX(-${
//                 (i + 1) * (sliderItem[i + 1].offsetWidth + 20)
//             }px)`;
//             break;
//         }
//     }
// });
//
// btnNext.addEventListener("click", () => {
//     btnPrev.disabled = false;
//     for (let i = 1; i < btnIndicators.length; i++) {
//         if (
//             btnIndicators[i].classList.contains(
//                 "command-centre__btn-indicators_active"
//             )
//         ) {
//             if (i == 1) {
//                 btnNext.disabled = true;
//             }
//             btnIndicators[i].classList.remove(
//                 "command-centre__btn-indicators_active"
//             );
//             btnIndicators[i - 1].classList.add(
//                 "command-centre__btn-indicators_active"
//             );
//             sliderItem[i].classList.remove("item-slide_active");
//             sliderItemGradient[i].classList.remove("item-slide__gradient_active");
//             sliderItem[i - 1].classList.add("item-slide_active");
//             sliderItemGradient[i - 1].classList.add("item-slide__gradient_active");
//             sliderContainer.style.transform = `translateX(-${
//                 (i - 1) * (sliderItem[i - 1].offsetWidth + 20)
//             }px)`;
//             break;
//         }
//     }
// });
//
// window.addEventListener("resize", () => {
//     btnPrev.disabled = false;
//     btnNext.disabled = true;
//     menu.classList.remove("navigation__list_open");
//     for (let i = 0; i < sliderItem.length; i++) {
//         sliderItem[i].classList.remove("item-slide_active");
//
//         sliderItemGradient[i].classList.remove("item-slide__gradient_active");
//         btnIndicators[i].classList.remove("command-centre__btn-indicators_active");
//     }
//
//     sliderItem[0].classList.add("item-slide_active");
//
//     sliderItemGradient[0].classList.add("item-slide__gradient_active");
//     btnIndicators[0].classList.add("command-centre__btn-indicators_active");
//     sliderContainer.style.transform = `translateX(0)`;
// });
