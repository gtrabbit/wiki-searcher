$(document).ready(function() {

$(".thebutton").click(function(){
    $(".main").css("background-color", "black");
  $(".main").addClass("animated fadeIn");
  $(".topLeft").css("color", "#17459D");
var input= document.getElementById("theform").value
var apiCall = ("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + input);
  console.log("cats");
  $.getJSON(apiCall, function(json){
  console.log(json[1].length)
    if (json[1].length==0){
       var newElem = document.createElement("div");
      newElem.className = "resultboxeven"
      newElem.insertAdjacentHTML("afterbegin", "<h3> No Result </h3><hr><p>Sorry, we don't have any idea what you're talking about. Try entering something a little less insane. Alternatively, if you are insane, this button might interest you:</p><a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank'><button class='btn'>Medicine</button></a>")
       $(".resultsRow").append(newElem);
   $(".resultboxeven").slideDown(1300).delay(1800).addClass("animated slideInRight") 
 
        $(".resultboxeven").css("display", "block")
    } //in case of no results
 
    
  for (i=0; i<json[1].length; i++){
   (function(i){
        setTimeout(function(){
        
  var newElem = document.createElement("div");
      newElem.className = "resultboxeven"
     
      var divTitle = document.createTextNode(json[1][i])
      var divText = document.createTextNode(json[2][i])
      newElem.insertAdjacentHTML("afterbegin", "<a href=" + json[3][i]+ "><h3>"+json[1][i]+"</h3></a><hr><p>"+ json[2][i] + "</p>")
       $(".resultsRow").append(newElem);
   $(newElem).addClass("animated slideInRight") 
 
        $(".resultboxeven").css("display", "block")
         $("#searchResults").fadeIn(400);
        }, 160 * i);
   }(i));
        } // closes for-loop
      
     $(".searcher").slideUp();
  $("#Again").removeClass("hidden");
  $("#Again").slideDown();
  
  
  }); //ends the search, displays results
  

  
  
  
    $("#Again").click(function(){
      $(this).fadeOut();
        $(".searcher").slideDown();
      $("#searchResults").fadeOut(800, function(){
         document.getElementById("searchResults").innerHTML = "";  
             })
     
 

     
      
      
  
                     })
  
  
});

});