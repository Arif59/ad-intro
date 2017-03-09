$( document ).ready(function() {
	$('.player').trigger("pause");
	$(".first").typed({
	  strings: ["Every day comes with 86,400 seconds ^1000", "^500 Tick tock",""],
	  typeSpeed: 0,
	  backSpeed: -10,
	  startDelay: 1500
	});
// 	setTimeout(function() {
//     $('.player').trigger("play");

//   }, 1500);
//   setTimeout(function() {
//   	$('.player').trigger("pause");
//   }, 3000);
//   setTimeout(function() {
//   	$('.player').trigger("play");
//   }, 5800);
//   setTimeout(function() {
//   	$('.player').trigger("pause");
//   }, 6500);
});



