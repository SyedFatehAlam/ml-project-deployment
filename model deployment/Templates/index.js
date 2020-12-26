// Making dropdown border as green when the value of attribute is changed

function checkSelection(element) {
  if (element.value != "") {
    element.style.borderColor = "green"; //change color to green
  }
}

$("#inputhandler").click(function () {
  if ($("#inputhandler").attr("aria-expanded") == "false") {
    document.getElementById("inputhandler").innerText =
      "Click to minimize inputs";

    $("#inputhandler").removeClass("btn-success");

    $("#inputhandler").addClass("btn-secondary");
  }

  if ($("#inputhandler").attr("aria-expanded") == "true") {
    document.getElementById("inputhandler").innerText = "Click to view inputs";

    $("#inputhandler").removeClass("btn-secondary");

    $("#inputhandler").addClass("btn-success");
  }
});

$(document).ready(function () {
  // Handle Predicted Result

  $("#result").ready(function () {
    // Handling the predited result to be green in case of ** Survived **

    if ($("#result").text() == "Survived") {
      document.getElementById("result").innerHTML =
        '<h1 id="result"><strong> Survived </strong></h1> ';

      $("#result").css("color", "green");

      document.getElementById("result").style.display = "block";
    } // Handling the predited result to be red in case of ** Not Survived **

    if ($("#result").text() == "Not Survived") {
      document.getElementById("result").innerHTML =
        '<h1 id="result"><strong> Not Survived </strong></h1>';

      $("#result").css("color", "#f22849");

      document.getElementById("result").style.display = "block";
    }
  });
}); 

// Handling of Result modal to be displayed 
/*
window.onload = function () { 

        if (document.getElementById("result").innerText) { 
    
            $("#resultmodal").modal("show"); 
    
        } 
    
    }; */