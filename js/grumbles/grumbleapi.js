$(document).ready(function(){
  $(".search").on("click", apiCall)
})


function apiCall(){
  var keyword = $("#search-keyword").val();
  $.ajax({
    url: "http://localhost:3000/grumbles/" + keyword,
    dataType: 'json',
    method: 'GET',
  }).done ( function(response){
    console.log(response);
    outputResults(response);
  });
}

function outputResults(response){
  $(".index").empty();
  $('.stuff').append("<p>"+response.title+"</p>")
  $('.stuff').append("<img src = '"+response.photoUrl+"'>")
  $('.stuff').append("<p>"+response.content+"</p>")
}
