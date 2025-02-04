var number = 0,
  increment = 1,
  speed = 1000, // one second
  tId;

function inc() {
  clearInterval(tId); // stop anything already running
  tId = setInterval(function() {
    document.getElementById("number").innerHTML = number += increment;
  }, speed);
}

function changeSpeed() {
  speed = +this.getAttribute("data-speed"); // get attribute and convert to number
  inc();
}
window.addEventListener("load", function() { // when page has loaded
  document.querySelectorAll(".start").forEach(function(but) {
    but.addEventListener("click", function() {
      increment = +this.getAttribute("data-inc"); // get from button and convert to number 
      inc()
    });
  });

  document.getElementById("stop").addEventListener("click", function() { // when clicking
    clearInterval(tId);
  });

  document.querySelectorAll(".speed").forEach(function(but) {
    but.addEventListener("click", changeSpeed);
  });

});
  document.querySelectorAll(".speed").forEach(function(but) {
    but.addEventListener("click", changeSpeed);
  });

});
