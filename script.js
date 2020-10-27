function displayScores() {
  /**
   * Function called when SUBMIT CTA is clicked
   */

  let enteredListOfScores = document.getElementById("inputList").value;
  enteredListOfScores = enteredListOfScores.trim().split(" ");

  let highestSelectionScore = document.getElementById("selectionScore").value;

  console.log(enteredListOfScores);
  let i = 0;
  let numArr = [];
  let apphaArr = [];
  let patt = /[0-9]/g;

  //Below logic checks if entered input is alphabets & ignores them
  for (i = 0; i < enteredListOfScores.length; i++) {
    if (enteredListOfScores[i].match(patt)) {
      numArr.push(enteredListOfScores[i]);
    } else {
      apphaArr.push(enteredListOfScores[i]);
      document.getElementById("alphabetEntered").innerHTML =
        "<br>Entered list has alphabets, we have ignored them : " + apphaArr;
    }
  }

  //Below logic checks if no input is entered in both boxes or either of them
  if (enteredListOfScores == "" && highestSelectionScore == "") {
    document.getElementById("alphabetEntered").innerHTML = "";
    document.getElementById("displayScoreList").innerHTML =
      "<br>Your score list : NOT ENTERED";
    document.getElementById("displaySelectionScore").innerHTML =
      "Highest selection score you entered :  NOT ENTERED";
  } else if (enteredListOfScores == "" && highestSelectionScore != "") {
    document.getElementById("alphabetEntered").innerHTML = "";
    document.getElementById("displayScoreList").innerHTML =
      "<br>Your score list : NOT ENTERED";
    document.getElementById("displaySelectionScore").innerHTML =
      "Highest selection score you entered : " + highestSelectionScore;
  } else if (enteredListOfScores != "" && highestSelectionScore == "") {
    document.getElementById("alphabetEntered").innerHTML = "";
    document.getElementById("displayScoreList").innerHTML =
      "<br>List has " + numArr.length + " entries : " + numArr;
    document.getElementById("displaySelectionScore").innerHTML =
      "Highest selection score you entered :  NOT ENTERED";
  } else {
    document.getElementById("displayScoreList").innerHTML =
      "<br>List has " + numArr.length + " entries : " + numArr;
    document.getElementById("displaySelectionScore").innerHTML =
      "Highest selection score you entered : " + highestSelectionScore;
  }

  //Call to function to sort & prepare the final list
  selectPlayers(numArr, highestSelectionScore);
}

function selectPlayers(calcArr, selector) {
  /**
   * @param calcArr           Array of input to sort
   * @param selector          number to match when calculating final list
   */

  console.log(calcArr);
  //sorting into descending order
  calcArr = calcArr.sort(function (a, b) {
    return b - a;
  });

  console.log("calArr: " + calcArr);
  selector = parseInt(selector);
  let m = 0;
  let finalList = [];
  let flag = false;

  // logic to push the sorted & selected array of scores to a new array
  for (m = 0; m < calcArr.length; m++) {
    if (calcArr[m] >= selector) {
      finalList.push(calcArr[m]);
    } else {
      flag = true;
    }
  }

  //logic to display final selected array on the UI
  if (flag == true && finalList != "") {
    document.getElementById("result").innerHTML =
      "<br>Number of selected players is " +
      finalList.length +
      ", and their score is: " +
      finalList;
  } else if (finalList != "") {
    document.getElementById("result").innerHTML =
      "<br>Number of selected players is " +
      finalList.length +
      ", and their score is: " +
      finalList;
  } else {
    document.getElementById("result").innerHTML = "<br>No players selected ";
  }
  console.log("FinalList: " + finalList);
}
