"use strict"
// Функція для переходу на сторінку та розділ
function goToPageWithSection(sectionId) {
   if (sectionId) {
     // Перехід на сторінку з параметром розділу в URL
     window.location.href = "abortions.html#" + sectionId;
   }
 }
$(document).ready(function(){

   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: true,
      slidesToShow:1,
      slidesToScroll:1,
      speed:1000,
      easing:'ease',
      autoplay:false,
      autoplaySpeed:1500,
      pauseOnFocus:true,
      pauseOnHover:true,
      draggable:false,
      swipe:true,
      touchThreshold:10,
      waitForAnimate:false,
      centerMode:true,
   });

    // Додамо обробник подій для слайдів
    $('.clickable-slide').on('click', function() {
      const sectionId = $(this).data('section');
      if (sectionId) {
         // Виклик функції для переходу на сторінку з розділом
         goToPageWithSection(sectionId);
      }
      
   });

});