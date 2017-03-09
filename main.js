$( document ).ready(function() {
	$('.player').trigger("pause");
	$(".first").typed({
	  strings: ["Every day comes with 86,400 seconds ^1000", "^500 Tick tock ^1500", ""],
	  typeSpeed: 0,
	  backSpeed: -10,
	  startDelay: 5000
	});
// 	setTimeout(function() {
//     	$('.typed-cursor').fadeOut(500);

//   }, 8000);
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



