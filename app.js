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
