// Set vars for getting element
var btn = document.getElementById('btn');
var results = document.getElementById('results');

//This is the function that shakes the button
//it repeats every 2.5 seconds and resets itself
function shakeL () {
  btn.style.transform="rotate(-2deg)";
  var looper3 =setTimeout(shakeR,100);
}
function shakeR () {
  btn.style.transform="rotate(2deg)";
  var looper4 =setTimeout(reset,100);
}
function reset () {
btn.style.transform="rotate(0deg)";
}
function btnShake () {
      var looper2 =setTimeout(shakeL,0);
}
var looper1 =setInterval(btnShake,2500);
//changes the button to say "done!" until it resets to Generate again
$('#btn').click(function(){
  btn.innerHTML='Done!';
  setTimeout(btnText,3000);
//  when this button is clicked the container for the results comes down
  $('.container2').slideDown(300);
  probability();
});
// This changes the font after you click and it says done
function btnText() {
  setTimeout(btn.innerHTML='Generate Again',100);
}
//This is the function which does all the simulation
function probability () {
  // Num of groups is a random number of simulations
  var numOfGroups = Math.floor(Math.random() * (2 - 1) + 1);
  //console.log('num of groups = ' +numOfGroups);

//makes the array of the number of people in each simulation
  var groupArray = new Array(numOfGroups);
  //console.log('length of the array of groups = '+groupArray.length);

//Goes through the array`and gives each simulation a number of people
  for (i = 0; i < groupArray.length; i++) {
    groupArray[i] = Math.floor(Math.random() * (6- 1) + 1);
}

//We start comparing people for birthdays
birthdayCheck(groupArray);
}
function birthdayCheck(num) {
  //console.log(num);
  //Shows the total number of people we used in our simulation
  var total = 0;
  var dupeTotal = 0;
  //loops per each group of people
  for (var i = 0; i < num.length; i++) {
    console.log('iteration i number=' + i);
    // sets the birthday for each person in the array
    var personArray = new Array(num[i]);

    //loops per each person that sets the birthday
    for (var j = 0; j < num[i]; j++) {
      console.log('iteration j number=' + j);
      //Generates the random number 1-365 for eahc persons birthday
      personArray[j] = Math.floor(Math.random() * (10 - 1) + 1);
      console.log(personArray);
      // for (var k = 0; k <personArray.length; k++){
      //   console.log("k:"+personArray[k]);
      //   console.log("j:"+personArray[j]);
      //   if (personArray[j] == personArray[k]) {
      //     console.log("match");
      //     }
      //   }
      }

    //total number of birthday matches per simulation
    var countDupe = 0;
    //go through each k and compare k with every other k greater than it
    for (var k = 0; k < personArray.length; k++) {
      for (var l = k +1; l <personArray.length; l++) {
        // if there is a match
        if (personArray[k] == personArray[l]) {
          //add two people as sharing bdays
          countDupe +=2;
          console.log("person array k is at"+personArray[k]);
          console.log('count is'+countDupe);
          dupeTotal += countDupe;
      }

      }
    }
    //adds to the total after each iteration
    total += num[i];
    //generate probability
    var probOfMatch = dupeTotal / total;
    console.log(probOfMatch); 
  }
  //This prints the results (num of ppl and num of simulations)
  results.innerHTML = "You generated " + total + " total people in "+ num.length +" number of random simulations";
}
