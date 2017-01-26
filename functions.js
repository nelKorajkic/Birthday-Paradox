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
    // This changes the font after you click and it says done
    btn.innerHTML = 'Done!';
    setTimeout(btnText, 3000);
    //  when this button is clicked the container for the results comes down
    $('.container2').slideDown(300);
    probability();
});

//resets the text to say Generate Again
function btnText() {
    setTimeout(btn.innerHTML = 'Generate Again', 100);
}

//This is the function which does all the simulation
function probability() {
  //sets the number of ppl in each group (this is how you can check the probability)
    var n = Math.floor(Math.random() * (100 - 1) + 1);
    // Num of groups is a random number of simulations (max -min + min)
    var numOfGroups = Math.floor(Math.random() * (3000 - 1000) + 1000);
    //makes the array of the number of people in each simulation
    var groupArray = new Array(numOfGroups);
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
        // sets the birthday for each person in the array
        var personArray = new Array(num[i]);

        //loops per each person that sets the birthday
        for (var j = 0; j < num[i]; j++) {
            //Generates the random number 1-365 for each persons birthday
            personArray[j] = Math.floor(Math.random() * (365 - 1) + 1);
        }
        countDupe = 0;
        //go through each k and compare k with every other k greater than it
        for (var k = 0; k < personArray.length; k++) {
            //adds the group that matches to the total
            for (var l = k + 1; l < personArray.length; l++) {
                // if there is a match
                if (personArray[k] == personArray[l]) {
                    //add two people as sharing bdays
                    countDupe = 1;
                } else {
                    // if there are no matches don't change countDupe
                    countDupe += 0;
                }
            }
            //adds to the total after each iteration
            total = n * num.length;
        }
        //sets the final number of matches
        dupeTotal += countDupe;


    }
    console.log("duplicate total: " + dupeTotal);
    console.log("total sims: " + totalSims);
    //generate probability
    var probOfMatch = ((dupeTotal / totalSims) * 100);
    var probOfMatch2Decimals = probOfMatch.toFixed(2);
    console.log("prob: " + probOfMatch2Decimals);
    //This prints the results (num of ppl and num of simulations)
    results.innerHTML = "You had " + n + " number of people in each group you generated " + total + " total people in " + num.length + " number of random simulations";
    prob.innerHTML = "The probability in this simulation that atleast 2 people had the same birthday was " + probOfMatch2Decimals + "%";
}
