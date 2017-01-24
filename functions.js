var btn = document.getElementById('btn');
var results = document.getElementById('results');
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

function btnText() {
  setTimeout(btn.innerHTML='Generate Again',100);

}
function probability () {
  var numOfGroups = Math.floor(Math.random() * (3 - 1) + 1);
  //console.log('num of groups = ' +numOfGroups);

  var groupArray = new Array(numOfGroups);
  //console.log('length of the array of groups = '+groupArray.length);

  for (i = 0; i < groupArray.length; i++) {
    groupArray[i] = Math.floor(Math.random() * (10 - 1) + 1);
}
birthdayCheck(groupArray);
}
function birthdayCheck(num) {
  //console.log(num);
  var total = 0;
  //loops per each group
  for (var i = 0; i < num.length; i++) {
    console.log('iteration i number=' + i);
    var personArray = new Array(num[i]);
    //loops per each person

    for (var j = 0; j < num[i]; j++) {
      console.log('iteration j number=' + j);
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

    total += num[i];
  }


  results.innerHTML = "You generated " + total + " total people  split in "+ num.length +" groups";
}
$('#btn').click(function(){
  btn.innerHTML='Done!';
  setTimeout(btnText,3000);
//  $('.container2').show(1000);
  $('.container2').slideDown(300);
  probability();
});
