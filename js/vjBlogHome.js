$(document).ready( function() {
var vjTabs = new Swiper('.vjTabsGallery', {
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var vjvjPage = new Swiper('.vjvjPageGallery', {
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: vjTabs
    },
    keyboard: {
      enabled: true,
    },
  });
});