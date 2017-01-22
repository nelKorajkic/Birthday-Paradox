var btn = document.getElementById('btn');

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
