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
 
   let startPost = 200;

   $(window).scroll(function() {
     if ($(window).scrollTop() >= startPost) {
       if (!isSticky) {
         $('.sticky').addClass('fixed');
         $('body').css('padding-top', '200px');
         isSticky = true;
       }
     } else {
       if (isSticky) {
         $('.sticky').removeClass('fixed');
         $('body').css('padding-top', originalPaddingTop);
         isSticky = false;
       }
     }
   });


});

// JavaScript-код для ініціалізації мапи
function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 48.2921, lng: 25.9352 }, // Координати центру мапи
    zoom: 13  // Зум мапи
  });

}

document.getElementById('map').addEventListener('click', function() {
  let map = document.getElementById('map');
  if (map.style.height === '400px') {
    map.style.height = '600px'; // Змінюємо розмір мапи при кліці
  } else {
    map.style.height = '400px'; // Повертаємо початковий розмір при повторному кліці
  }
});


