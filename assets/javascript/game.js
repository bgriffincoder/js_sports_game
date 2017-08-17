(function() {

  //reset
  let resetButton = document.querySelector("#reset");
  let resetNumCounter = document.querySelector("#num-resets");

  //teamOneStats
  let teamOneShootButton = document.querySelector("#teamone-shoot"); //selects ID
  let teamOneNumShots = document.querySelector("#teamone-numshots"); //selects ID
  let teamOneNumHits = document.querySelector("#teamone-numhits");; //selects ID
  //teamTwoStats
  let teamTwoShootButton = document.querySelector("#teamtwo-shoot"); //selects ID
  let teamTwoNumShots = document.querySelector("#teamtwo-numshots"); //selects ID
  let teamTwoNumHits = document.querySelector("#teamtwo-numhits");; //selects ID

  //resetButton event listener
  /*Increase the reset stats counter by 1 and zero out all shots taken
  and goal shot counters./*/
  resetButton.addEventListener("click", function() {
    resetNumCounter.innerHTML = parseInt(resetNumCounter.innerHTML) + 1;
      teamOneNumShots.innerHTML = 0;
      teamOneNumHits.innerHTML = 0;
      teamTwoNumShots.innerHTML = 0;
      teamTwoNumHits.innerHTML = 0;
  }) //END OF resetButton event listener

  //teamOneShootButton event listener
  /*Calculate a random number between 1 and 10. If number is between
  6 and 10 then the shot was successful and increase goal shots counter by 1.
  If the random number is between 1 and 5 then the shot failed and do not increase
  goal shots counter by 1. Each time button is pressed should increase shots
  taken counter by 1.
  */
  teamOneShootButton.addEventListener("click",function() {
    let hitOrMissRandom = Math.floor(Math.random() * 10) + 1;
    let shotCounter;

    teamOneNumShots.innerHTML = parseInt(teamOneNumShots.innerHTML) + 1;

    if (hitOrMissRandom >= 6 ) {
      teamOneNumHits.innerHTML = parseInt(teamOneNumHits.innerHTML) + 1;
    }
  }) //END OF teamOneShootButton event listener

  //teamTwoShootButton event listener
  /*Calculate a random number between 1 and 10. If number is between
  6 and 10 then the shot was successful and increase goal shots counter by 1.
  If the random number is between 1 and 5 then the shot failed and do not increase
  goal shots counter by 1. Each time button is pressed should increase shots
  taken counter by 1.
  */
  teamTwoShootButton.addEventListener("click",function() {
    let hitOrMissRandom = Math.floor(Math.random() * 10) + 1;
    let shotCounter;

    teamTwoNumShots.innerHTML = parseInt(teamTwoNumShots.innerHTML) + 1;

    if (hitOrMissRandom >= 6 ) {
      teamTwoNumHits.innerHTML = parseInt(teamTwoNumHits.innerHTML) + 1;
    }
  }) //END OF teamOneShootButton event listener


}) ()
