var link = document.querySelector(".main-feedback-btn");
var body = document.querySelector("body");
var popup = document.querySelector(".feedback");
var form = popup.querySelector("form");
var close = popup.querySelector(".close-form-btn");
var feedback_name = popup.querySelector("[name=feedback-name]");
var feedback_email = popup.querySelector("[name=feedback-email]");
var feedback_text = popup.querySelector("[name=feedback-text]");
var storage_name = localStorage.getItem("feedback_name");
var storage_email = localStorage.getItem("feedback_email");
link.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.add("overlay");
  popup.classList.add("feedback-show");
  if (storage_name) {
    feedback_name.value = storage_name;
    feedback_email.focus();
  }
  if (storage_email) {
    feedback_email.value = storage_email;
    feedback_text.focus();
  } else {
    feedback_name.focus();
  }
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.remove("overlay");
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
});
form.addEventListener("submit", function(event) {
  if (!feedback_name.value || !feedback_email.value || !feedback_text.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Заполните все поля, пожалуйста");
    popup.classList.add("feedback-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      body.classList.remove("overlay");
      popup.classList.remove("feedback-show");
      popup.classList.remove("feedback-error");
    }
  }
});
function initMap() {
  var body_js = document.querySelector("body");
  if (body_js.classList.contains("no-js")) {
    body_js.classList.remove("no-js");
  }
  var myLatLng = {
    lat: 59.938547,
    lng: 30.323491
  };
  var map = new google.maps.Map(document.getElementById("map-google"), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 17
  });
  var image = "img/marker.png";
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "Gllacy",
    icon: image
  });
}
