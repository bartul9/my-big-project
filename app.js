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

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

// Div with links, night day

// const divImg = document.querySelector(".hero");

// divImg.addEventListener("click", function () {
//   window.open(
//     "https://www.google.com/search?q=new+york+day&rlz=1C1CHBD_enHR925HR925&sxsrf=ALeKk03hg1EenW1FfEXLDf5bE-gx5hFWyg:1609712255736&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiY9sW55YDuAhWjtYsKHY3HClQQ_AUoAXoECBQQAw&biw=1366&bih=625"
//   );
// });
