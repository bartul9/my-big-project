"use strict";

//Goolge maps

//Initialize and add the map

var map = L.map("mapid").setView([40.7128, -74.006], 8);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([40.7128, -74.006]).addTo(map);

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
