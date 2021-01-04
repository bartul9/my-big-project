"use strict";

//Goolge maps

//Initialize and add the map
function initMap() {
  // The location of New York 40.7128° N, ° W
  const newYork = { lat: 40.7128, lng: -74.006 };
  // The map, centered at New York
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: newYork,
  });
  // The marker, positioned at New York
  const marker = new google.maps.Marker({
    position: newYork,
    map: map,
  });
}

//Navbar

// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
// });

//  Paragraf disapear on hover

// const paragrafNone = document.querySelector("#desappear");

// paragrafNone.addEventListener("mouseover", function (event) {
//   event.target.style.color = "rgba(2, 99, 138, 0.774)";
// });

// paragrafNone.addEventListener("mouseout", function (event) {
//   event.target.style.color = "rgba(2, 99, 138, 0.0)";
// });

// setTimeout(function () {
//   event.target.style.color = "";
// }, 2000);
// },
// false
