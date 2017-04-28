//Business at the Top:
// Variables to hold compatibility levels with given tracks:
var RubyRailsPref = 0,
    PHPDrupalPref = 0,
    JavaAndroidPref = 0,
    CSSDesignPref = 0,
    CdotNetPref = 0;

function processQ1(answer) {
  switch (answer) {
    case 1:

      break;
    case 2:

      break;
    default:
    console.log("Whoops, processQ1 defaulted.");

  }
}

function processQ2(answer) {
  switch (answer) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:
      console.log("Whoops, processQ2 defaulted.");
  }
}

function processQ3(answer) {
  switch (answer) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:
      console.log("Whoops, processQ3 defaulted.");
  }
}

function processQ4(answer) {
  switch (answer) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:
      console.log("Whoops, processQ4 defaulted.");
  }
}

function processQ5(answer) {
  switch (answer) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:
      console.log("Whoops, processQ5 defaulted.");
  }
}

function processSubQ1 (answer) {
  switch (answer) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:
    console.log("Whoops, processSubQ1 defaulted.");

  }
}

function resolveAnswers () {

}
//Party in the Basement:
$(function() {
  $("form").submit(function(event) {
    // console.log([
    //   $("#question1").val(),
    //   $("#question2").val(),
    //   $("#question3").val(),
    //   $("#question4").val(),
    //   $("#question5").val()
    // ]);
    processQ1($("#question1").val());
    processQ2($("#question2").val());
    processQ3($("#question3").val());
    processQ4($("#question4").val());
    processQ5($("#question5").val());

    resolveAnswers();
    event.preventDefault();
  });

  //Handles hiding and showing of subQ1:
  $("#question1").change(function() {
    if (true) {
      //Check if they said yes, if so show subQ1
    }
  })
});
