$(document).ready(function(){

$("#submitBtn2").click(function(){
  var newDonation=($("#pledge-box2").val());
  var previousDonation=$("#donatedMoney").text();
  previousDonation = previousDonation.replace(',', '');
  previousDonation = previousDonation.replace('$', '');
  var totalAmount = parseInt(previousDonation,10) + parseInt(newDonation,10)

  var percentageDonation = (totalAmount/1000).toString()

  $(".progress-bar").css("width",percentageDonation+"%")


  totalAmount=totalAmount.toString();
  $("#donatedMoney").text("$"+totalAmount.slice(0,2)+","+totalAmount.slice(2))

  var noOfBackers =($("#backersCount").text()).replace(',', '');
  noOfBackers++;
  noOfBackers=noOfBackers.toString();
  $("#backersCount").text(noOfBackers.slice(0,1)+","+noOfBackers.slice(1))

  var quantity = parseInt($("#bambooQuantity").text()) - 1;


  document.querySelectorAll("#bambooQuantity").forEach(function(heading){
    $(heading).text(quantity);
  })

});



$("#submitBtn3").click(function(){
  var newDonation=($("#pledge-box3").val());
  var previousDonation=$("#donatedMoney").text();
  previousDonation = previousDonation.replace(',', '');
  previousDonation = previousDonation.replace('$', '');
  var totalAmount = parseInt(previousDonation,10) + parseInt(newDonation,10)

  var percentageDonation = (totalAmount/1000).toString()

  $(".progress-bar").css("width",percentageDonation+"%")


  totalAmount=totalAmount.toString();
  $("#donatedMoney").text("$"+totalAmount.slice(0,2)+","+totalAmount.slice(2))



  var noOfBackers =($("#backersCount").text()).replace(',', '');
  noOfBackers++;
  noOfBackers=noOfBackers.toString();
  $("#backersCount").text(noOfBackers.slice(0,1)+","+noOfBackers.slice(1))

  var quantity = parseInt($("#blackQuantity").text()) - 1;


  document.querySelectorAll("#blackQuantity").forEach(function(heading){
    $(heading).text(quantity);
  })


});

$("#submitBtn0").click(function(){
  var noOfBackers =($("#backersCount").text()).replace(',', '');
  noOfBackers++;
  noOfBackers=noOfBackers.toString();
  $("#backersCount").text(noOfBackers.slice(0,1)+","+noOfBackers.slice(1))

})

$(".input-group").click(function(){
  if ($(".bookmark-btn").text()==="Bookmark"){
    $(".bookmark-btn").text("Bookmarked")
  }else if($(".bookmark-btn").text()==="Bookmarked"){
    $(".bookmark-btn").text("Bookmark")
  }
  $(".bookmark-icon").toggleClass("active-icon")

});
});
