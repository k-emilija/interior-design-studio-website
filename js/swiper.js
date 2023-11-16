"use strict";

/**************************/
/* TESTIMONIALS SECTION */
/**************************/

const swiper1 = new Swiper(".swiper1", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 968px
    368: {
      slidesPerView: 1,
    },
    // when window width is >= 945px
    945: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1201px
    1201: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

/**************************/
/* PROJECTS SECTION */
/**************************/

const swiper2 = new Swiper(".swiper2", {
  // Default parameters
  slidesPerView: 1,

  keyboard: {
    enabled: true,
  },

  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 968px
    368: {
      slidesPerView: 1,
    },
    // when window width is >= 705px
    705: {
      slidesPerView: 2,
    },
    // when window width is >= 1201px
    1201: {
      slidesPerView: 3,
    },
  },
});

/**************************/
/* MODAL SWIPER */
/**************************/

const modalSwiper1 = new Swiper(".modal-swiper", {
  // Default parameters

  keyboard: {
    enabled: true,
  },

  // Optional parameters
  loop: true,

  // Zoom
  zoom: {
    maxRatio: 2,
    minRatio: 1,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".modal-btn-next",
    prevEl: ".modal-btn-prev",
  },

  // Pagination
  pagination: {
    el: ".modal-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1600px
    1600: {
      slidesPerView: 1,
    },
  },
});
