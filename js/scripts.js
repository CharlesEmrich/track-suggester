//Business at the Top:
// Variables to hold compatibility levels with given tracks:
var RubyRailsPref, PHPDrupalPref, JavaAndroidPref, CSSDesignPref, CdotNetPref;

function resetPrefs() {
  RubyRailsPref   = 0,
  PHPDrupalPref   = 0,
  JavaAndroidPref = 0,
  CSSDesignPref   = 0,
  CdotNetPref     = 0;
}

function processQ1(answer) {
  switch (answer) {
    case 1:
    //Languages that are good choices if user has programmed before:
      PHPDrupalPref   += 1,
      JavaAndroidPref += 1;
      break;
    case 2:
    //Languages that are good choices if user has not programmed before:
      RubyRailsPref += 1,
      CSSDesignPref += 1,
      CdotNetPref   += 1;
      break;
    default:
    console.log("Whoops, processQ1 defaulted.");

  }
}

function processQ2(answer) {
  switch (answer) {
    case 1:
      RubyRailsPref   += 1,
      JavaAndroidPref += 1,
      CSSDesignPref   += 2;
      break;
    case 2:
      CdotNetPref   += 2,
      PHPDrupalPref += 2;
      break;
    default:
      console.log("Whoops, processQ2 defaulted.");
  }
}

function processQ3(answer) {
  switch (answer) {
    case 1:
      RubyRailsPref   += 1,
      JavaAndroidPref += 1,
      CSSDesignPref   += 1;
      break;
    case 2:
      CdotNetPref   += 1,
      PHPDrupalPref += 1,
      CSSDesignPref += 1;
      break;
    default:
      console.log("Whoops, processQ3 defaulted.");
  }
}

function processQ4(answer) {
  switch (answer) {
    case 1:
      CSSDesignPref   += 3,
      RubyRailsPref   += 1;
      JavaAndroidPref += 1;
      break;
    case 2:
      CSSDesignPref += 1,
      RubyRailsPref += 1;
      break;
    case 3:
      JavaAndroidPref += 1,
      PHPDrupalPref   += 1,
      CSSDesignPref   -= 1,
      CdotNetPref     += 1;
      break;
    default:
      console.log("Whoops, processQ4 defaulted.");
  }
}

function processQ5(answer) {
  switch (answer) {
    case 1:
      PHPDrupalPref += 2,
      CdotNetPref   += 2;
      break;
    case 2:
      RubyRailsPref += 1,
      CSSDesignPref += 1;
      break;
    case 3:

      break;
    case 4:
      RubyRailsPref   += 1,
      JavaAndroidPref += 1;
      break;
    default:
      console.log("Whoops, processQ5 defaulted.");
  }
}

function processSubQ1 (answer) {
  switch (answer) {
    case 1:
      RubyRailsPref = 0;
      break;
    case 2:
      PHPDrupalPref = 0;
      break;
    case 3:
      JavaAndroidPref = 0;
      break;
    case 4:
      CSSDesignPref = 0;
      break;
    case 4:
      CdotNetPref = 0;
      break;
    default:
    console.log("processSubQ1 defaulted. This is probably not an error.");

  }
}

function resolveAnswers () {
  var maxPreference = [RubyRailsPref, PHPDrupalPref, JavaAndroidPref, CSSDesignPref, CdotNetPref].sort()[4];
  var result = [];

  if (RubyRailsPref === maxPreference) {
    result.push("ruby");
  }

  if (PHPDrupalPref === maxPreference) {
    result.push("php");
  }

  if (JavaAndroidPref === maxPreference) {
    result.push("java");
  }

  if (CSSDesignPref === maxPreference) {
    result.push("css");
  }

  if (CdotNetPref === maxPreference) {
    result.push("c");
  }

  return result;
}
//Party in the Basement:
$(function() {
  resetPrefs();

  $("form").submit(function(event) {
    processQ1(parseInt($("#question1").val()));
    processQ2(parseInt($("#question2").val()));
    processQ3(parseInt($("#question3").val()));
    processQ4(parseInt($("#question4").val()));
    processQ5(parseInt($("#question5").val()));
    processSubQ1(parseInt($("#sub-question1").val()))

    console.log([
      "RubyRailsPref is " + RubyRailsPref,
      "PHPDrupalPref is " + PHPDrupalPref,
      "JavaAndroidPref is " + JavaAndroidPref,
      "CSSDesignPref is " + CSSDesignPref,
      "CdotNetPref is " + CdotNetPref
    ]);

    //If I keep hiding the form, add a button that hides your selection and brings the form back!
    $("#pref-form").addClass("hidden");
    $("#retake").removeClass("hidden");
    var bestTracks = resolveAnswers();
    for (var i = 0; i < bestTracks.length; i++) {
      $("#" + bestTracks[i] + "-panel").removeClass("hidden");
      $("#" + bestTracks[i] + "-panel").slideDown();
    }
    event.preventDefault();
  });

  $("#retake").click(function() {
    resetPrefs();
    $("#pref-form").removeClass("hidden");
    $("#pref-form").slideDown();
    $("#retake").addClass("hidden");
    $("div.panel").addClass("hidden");
    $("#context-q-1").addClass("hidden");
    $("#disbelief").addClass("hidden");
  });

  //Handles hiding and showing of subQ1:
  $("#question1").change(function() {
    if (parseInt($("#question1").val()) === 1) {
      $("#context-q-1").removeClass("hidden");
    }
  });

  $("#question5").change(function() {
    if (parseInt($("#question5").val()) === 3) {
      $("#disbelief").removeClass("hidden");
    } else {
      $("#disbelief").addClass("hidden");
    }
  });
});
