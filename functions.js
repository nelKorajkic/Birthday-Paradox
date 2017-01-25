// Set vars for getting element
var btn = document.getElementById('btn');
var results = document.getElementById('results');
var prob = document.getElementById('probability');
//This is the function that shakes the button
//it repeats every 2.5 seconds and resets itself
function shakeL() {
    btn.style.transform = "rotate(-2deg)";
    var looper3 = setTimeout(shakeR, 100);
}

function shakeR() {
    btn.style.transform = "rotate(2deg)";
    var looper4 = setTimeout(reset, 100);
}

function reset() {
    btn.style.transform = "rotate(0deg)";
}

function btnShake() {
    var looper2 = setTimeout(shakeL, 0);
}
var looper1 = setInterval(btnShake, 2500);
//changes the button to say "done!" until it resets to Generate again
$('#btn').click(function() {
    btn.innerHTML = 'Done!';
    setTimeout(btnText, 3000);
    //  when this button is clicked the container for the results comes down
    $('.container2').slideDown(300);
    probability();
});
// This changes the font after you click and it says done
function btnText() {
    setTimeout(btn.innerHTML = 'Generate Again', 100);
}

//This is the function which does all the simulation
function probability() {
    var n = Math.floor(Math.random() * (100 - 1) + 1);
    // Num of groups is a random number of simulations (max -min + min)
    var numOfGroups = Math.floor(Math.random() * (3000 - 1000) + 1000);
    //console.log('num of groups = ' +numOfGroups);

    //makes the array of the number of people in each simulation
    var groupArray = new Array(numOfGroups);
    //console.log('length of the array of groups = '+groupArray.length);
    console.log(n);
    //Goes through the array`and gives each simulation a number of people
    for (i = 0; i < groupArray.length; i++) {
        groupArray[i] = n;
    }
    //We start comparing people for birthdays
    birthdayCheck(groupArray, n);
}

function birthdayCheck(num, n) {
    console.log(n);
    //console.log(num);
    //Shows the total number of people we used in our simulation
    var total = 0;
    var dupeTotal = 0;
    //console.log(dupeTotal);
    var totalSims = num.length;
    var countDupe = 0;
    //loops per each group of people
    for (var i = 0; i < num.length; i++) {
        //console.log('iteration i number=' + i);
        // sets the birthday for each person in the array
        var personArray = new Array(num[i]);

        //loops per each person that sets the birthday
        for (var j = 0; j < num[i]; j++) {
            //console.log('iteration j number=' + j);
            //Generates the random number 1-365 for each persons birthday
            personArray[j] = Math.floor(Math.random() * (365 - 1) + 1);
            //console.log(personArray);
        }
        countDupe = 0;
        //go through each k and compare k with every other k greater than it
        for (var k = 0; k < personArray.length; k++) {
            //adds the group that matches to the total
            //console.log(dupeTotal);
            for (var l = k + 1; l < personArray.length; l++) {
                // if there is a match
                if (personArray[k] == personArray[l]) {
                    //console.log("match found!");
                    //add two people as sharing bdays
                    countDupe = 1;
                    //console.log('count is' + countDupe);
                    //  console.log("person array k is at"+personArray[k]);
                    // console.log('count is'+countDupe);
                } else {
                    countDupe += 0;
                }
                //console.log(personArray);;
            }
            // console.log(dupeTotal);
            // console.log(personArray);
            //adds to the total after each iteration
            total = n * num.length;
        }
        dupeTotal += countDupe;
        //generate probability

    }
    console.log("duplicate total: " + dupeTotal);
    console.log("total sims: " + totalSims);
    var probOfMatch = ((dupeTotal / totalSims) * 100);
    var probOfMatch2Decimals = probOfMatch.toFixed(2);
    //probOfMatch.toString().match(/.*\..{0,2}|.*/)[0];
    console.log("prob: " + probOfMatch2Decimals);
    //This prints the results (num of ppl and num of simulations)
    results.innerHTML = "You had " + n + " number of people in each group you generated " + total + " total people in " + num.length + " number of random simulations";
    prob.innerHTML = "The probability in this simulation that atleast 2 people had the same birthday was " + probOfMatch2Decimals + "%";
  }
