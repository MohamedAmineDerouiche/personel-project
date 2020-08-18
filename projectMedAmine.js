
$("document").ready(function(){
$('.welcome').hide();

  $("#loginUser").click(function(){
    $(".container").hide();
    $('.welcome').show().css('font-size', '56px');

    
  })
   })
var date = new Date;


$('#loginUser').click (function(){
	$('#enj').css('color', '#40E0D0').css('font-size', '75px');
})

$(`<span>${date}</span>`).appendTo("#saladimage");

//location.replace("https://www.w3schools.com")