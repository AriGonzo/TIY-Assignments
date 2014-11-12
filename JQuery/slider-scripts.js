$(".right").click(function() {
  $(".active").addClass('hidden').next().removeClass('hidden');
  $(".active").removeClass('active').next().addClass('active');
  $(".current").removeClass('current').next().addClass('current');
  $(".left").removeClass("hidden");
  if ($("#slider > li:last").hasClass("active")) {
    $(".right").addClass('hidden');
  }
});

$(".left").click(function() {
  $(".active").addClass('hidden').prev().removeClass('hidden');
  $(".active").removeClass('active').prev().addClass('active');
  $(".current").removeClass('current').prev().addClass('current');
  $(".right").removeClass("hidden");
  if ($("#slider > li:first").hasClass("active")) {
    $(".left").addClass('hidden');
  }
});

$("#button1").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide1").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button1").addClass('current');
  $(".left").addClass('hidden');
  $(".right").removeClass("hidden");
});

$("#button2").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide2").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button2").addClass('current');
  $(".left, .right").removeClass("hidden");
});

$("#button3").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide3").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button3").addClass('current');
  $(".left, .right").removeClass("hidden");
});

$("#button4").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide4").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button4").addClass('current');
  $(".left, .right").removeClass("hidden");
});

$("#button5").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide5").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button5").addClass('current');
  $(".left, .right").removeClass("hidden");
});

$("#button6").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide6").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button6").addClass('current');
  $(".left, .right").removeClass("hidden");
});

$("#button7").click(function(){
  $(".active").addClass('hidden').removeClass('active');
  $("#slide7").removeClass('hidden').addClass('active');
  $(".current").removeClass('current');
  $("#button7").addClass('current');
  $(".left").removeClass("hidden");
  $(".right").addClass('hidden');
});
