///<reference types="../@types/jquery"/>

$(".singer-name").on("click", function (e) {
  $(e.target).next().slideToggle(500).siblings("p").slideUp(500);
});





let countDownDate = new Date("july 26 , 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date();
  let diff = countDownDate - dateNow;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (diff <= 0) {
    clearInterval(counter);
  }
}, 1000);


$("#feedBack").on("input" , function() {
  let x = $("#feedBack").val();
  $("#charcter-counter").html(x.length); 
  if(x.length >= 100) {
    $("#charcter-counter").html("your available character finished");
  }
})





$(".side-menu").on("click", function () {
  if ($(".menu").css("left") == "0px") {
    $(".menu").animate({ left: "-180px" }, 500);
    $(".side-menu").animate({ left: "0px" }, 500);
  } else {
    $(".menu").animate({ left: "0px" }, 500);
    $(".side-menu").animate({ left: "182px" }, 500);
  }
});

$(".menu i").on("click", function () {
  $(".menu").animate({ left: "-180px" }, 500);
  $(".side-menu").animate({ left: "0px" }, 500);
});





