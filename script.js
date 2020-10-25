function displayScores(){
  let enteredListOfScores = document.getElementById("inputList").value;
  enteredListOfScores = enteredListOfScores.trim().split(' ');

  let highestSelectionScore = document.getElementById("selectionScore").value;  
   

  console.log(enteredListOfScores);
  let i = 0;
  let numArr = [];
  let apphaArr = [];
  let patt = /[0-9]/g;
  let ssAlf = false;
  for(i = 0; i<enteredListOfScores.length ; i++){
    if(enteredListOfScores[i].match(patt)){      
      numArr.push(enteredListOfScores[i]);
    }else{
      apphaArr.push(enteredListOfScores[i]);
      document.getElementById("alphabetEntered").innerHTML = "<br>Entered list has alphabets, we have ignored them : "+apphaArr ;
    }    
  }

    // if(highestSelectionScore.match(patt)){      
    //   highestSelectionScore = parseInt(highestSelectionScore);
    // }else{
    //   ssAlf = true;
    //   document.getElementById("alphabetSelectionScore").innerHTML = "<br>Entered Selection Score is an alphabet, we have ignored it"
    // }    
  




  if(enteredListOfScores == "" && highestSelectionScore == ""){
    document.getElementById("alphabetEntered").innerHTML = ""
    document.getElementById("displayScoreList").innerHTML = "<br>Your score list : NOT ENTERED" ;
    document.getElementById("displaySelectionScore").innerHTML = "Highest selection score you entered :  NOT ENTERED";
  }
  else if(enteredListOfScores == "" && highestSelectionScore != ""){
    document.getElementById("alphabetEntered").innerHTML = ""
    document.getElementById("displayScoreList").innerHTML = "<br>Your score list : NOT ENTERED" ;
    document.getElementById("displaySelectionScore").innerHTML = "Highest selection score you entered : " + highestSelectionScore;
  }
  else if(enteredListOfScores != "" && highestSelectionScore == ""){
    document.getElementById("alphabetEntered").innerHTML = ""
    document.getElementById("displayScoreList").innerHTML = "<br>List has " +numArr.length + " entries : "+ numArr ;
    document.getElementById("displaySelectionScore").innerHTML = "Highest selection score you entered :  NOT ENTERED";
  }
  else{
    document.getElementById("displayScoreList").innerHTML = "<br>List has " +numArr.length + " entries : "+ numArr ;
  document.getElementById("displaySelectionScore").innerHTML = "Highest selection score you entered : " + highestSelectionScore;
  }

  //Call to function where entered numbers are sorted & final list is calculated
  selectPlayers(numArr,highestSelectionScore);
}





function selectPlayers(calcArr,selector) {
  
  console.log(calcArr);
  //sorting into descending order
  calcArr = calcArr.sort(function(a, b){return b-a});  

  console.log("calArr: " + calcArr);
  selector = parseInt(selector);
  console.log("selector: " + selector);

  let m = 0;
  let finalList = [];
  let flag = false;
  for(m=0; m<calcArr.length; m++){    
    if(calcArr[m] >= selector){
      finalList.push(calcArr[m]);        
    }else{
      flag = true;
    }    
  }

  if(flag == true && finalList != ""){
    document.getElementById("result").innerHTML  = "<br>Number of selected players is " + finalList.length+", and their score is: " + finalList;      
  }else if(finalList != ""){
    document.getElementById("result").innerHTML  = "<br>Number of selected players is " + finalList.length+", and their score is: " + finalList;      
  }else{
    document.getElementById("result").innerHTML  = "<br>No players selected ";  
  }
  console.log("FinalList: " +finalList);
 
}