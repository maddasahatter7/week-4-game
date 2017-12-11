/*
* GLEN: You can remove this javascript part and paste it into the game.js file,
* then just link it in your html script tag as an attribute like this:   src='./Assets/Javascript/game.js'
*/


//SET DOCUMENT READY HERE!!!! then you can call setGame()


/*
* GLEN: Create the random numbers with this example in mind : var randomNumber1 = Math.floor((Math.random() * 62) + 1);
* This will give you a random number from 1 to 62! So set it to whatever number range you need.
*/


function setGame() {
    // first random number
    var randomNumber1 = Math.floor((Math.random() * 62) + 1);
    
        $("#random-number").text(randomNumber1);
        
    // make a counter set to 0
        var counter = 0;
    
    //GLEN:  HINT: use the random number example to create this value!
    // create an array with the 4 star numbers
    
        var stars = $("#stars").children();
    
        stars.forEach(function(star) {
          var random= Math.floor(Math.random()*12)+1;
          star.attr("star-value", random);
        });
}

    
  $(".star1").on("click", function() {
    var starAmount = ($(this).attr("star-value"));
    starAmount = parseInt(starAmount);

    counter += starAmount;


    if (counter === randomNumber1) {
      alert("You win!");
    }

    else if (counter > randomNumber1) {
      alert("You lose!!");
    }
    

  });