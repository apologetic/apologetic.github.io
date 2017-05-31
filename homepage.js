console.log("You found the Easter Egg! Fun fact: Easter is NOT pagan!");
var listOfSecrets;
var works;

$(document).ready(function(){

  $("#transcendental").hover(function() {
      $(this).fadeOut("fast");

  });

  if (typeof(Storage) !== "undefined") {
    works = true;
    listOfSecrets = [localStorage.clickcount1, localStorage.clickcount2,
    localStorage.clickcount3, localStorage.clickcount4, localStorage.clickcount5,
    localStorage.clickcount6];
    $("#secret1").one('click', function(){

      if (localStorage.clickcount1 === "0") {
        localStorage.clickcount1 = Number(localStorage.clickcount1) + 1;
        console.log("YOU GOT IT!");
      } else {
        localStorage.clickcount1 = 1;
      }
      console.log(localStorage.clickcount1);

    });

    $("#secret2").one('click', function(){
      if (localStorage.clickcountw) {
        localStorage.clickcount2 = Number(localStorage.clickcount2) + 1;
        console.log("YOU GOT IT!");
      } else {
        localStorage.clickcount2 = 1;
      }
      console.log(localStorage.clickcount2);

    });

    $("#secret3").one('click', function(){
      if (localStorage.clickcount3) {
        localStorage.clickcount3 = Number(localStorage.clickcount3) + 1;
        console.log("YOU GOT IT!");
      } else {
        localStorage.clickcount3 = 1;
      }
      console.log(localStorage.clickcount3);

    });

    $("#secret4").one('click', function(){
      if (localStorage.clickcount4) {
        localStorage.clickcount4 = Number(localStorage.clickcount4) + 1;
        console.log("YOU GOT IT!");
      } else {
        localStorage.clickcount4 = 1;
      }
      console.log(localStorage.clickcount4);

    });

    $("#secret5").one('click', function(){
      if (localStorage.clickcount5) {
        localStorage.clickcount5 = Number(localStorage.clickcount5) + 1;
        console.log("YOU GOT IT!");
      } else {
        localStorage.clickcount5 = 1;
      }
      console.log(localStorage.clickcount5);

    });

    $("#secret6").one('click', function(){
      if (localStorage.clickcount6) {
        localStorage.clickcount6 = Number(localStorage.clickcount6) + 1;
        console.log("YOU GOT IT!");
      } else {
        localStorage.clickcount6 = 1;
      }
      console.log(localStorage.clickcount6);

    });

    $("#checkProgress").click(function(){

      console.log("secret6 clickcount:" + localStorage.clickcount6);
      console.log("secret5 clickcount:" + localStorage.clickcount5);
      console.log("secret4 clickcount:" + localStorage.clickcount4);
      console.log("secret3 clickcount:" + localStorage.clickcount3);
      console.log("secret2 clickcount:" + localStorage.clickcount2);
      console.log("secret1 clickcount:" + localStorage.clickcount1);

    });

    $("#reset").click(function(){

      localStorage.clickcount6 = "0";
      localStorage.clickcount5 = "0";
      localStorage.clickcount4 = "0";
      localStorage.clickcount3 = "0";
      localStorage.clickcount2 = "0";
      localStorage.clickcount1 = "0";

    });

    $("#win").click(function(){

      localStorage.clickcount6 = "1";
      localStorage.clickcount5 = "1";
      localStorage.clickcount4 = "1";
      localStorage.clickcount3 = "1";
      localStorage.clickcount2 = "1";
      localStorage.clickcount1 = "1";

    });

  } else {

  }

  for(var i = 0; i < listOfSecrets.length; i++){

    if (listOfSecrets[i]=="0"){

      works = false;

    }

  }

  if(works){

    $(".jumbotron .jumbotron .row .quote p:first-child").css("background-color", "purple");
    $(".jumbotron .jumbotron .row .quote p:first-child").mouseenter(function() {
        $(this).css("background-color","mediumorchid")
    });
    $(".jumbotron .jumbotron .row .quote p:first-child").mouseleave(function() {
        $(this).css("background-color","purple")
    });

    $(".container .row").css("background-color", "purple");
    $(".container .row .col-sm-3").mouseenter(function() {
        $(this).css("background-color","mediumorchid")
    });
    $(".container .row .col-sm-3").mouseleave(function() {
        $(this).css("background-color","purple")
    });


  }

});
