function randomNo(){
    let x = Math.random();
    let y= Math.floor((x*2)+1);
    return y;
}

var button = document.getElementById("flip");
button.disabled=false;
var delayInMilliseconds = 80; 

var coin= document.getElementById("coin");
var coin_txt= document.getElementById("result");
var isHead= true;

button.addEventListener("click", function(){
    button.disabled=true;
    coin_txt.innerHTML = "flippin'...!";
    var random= randomNo();
    for(var i=0; i<20; i++){
        (function(index){
            setTimeout(function() {
                //your code to be executed after 1 second
                if(isHead){
                    coin.src="./SVG/coin2.svg";
                    console.log("tail");
                }
                else{
                    coin.src="./SVG/coin1.svg";
                    console.log("head");
                }
                isHead=!isHead
              }, delayInMilliseconds * index);
        })(i);
    }

    setTimeout(function() {
        coin.src = `./SVG/coin${random}.svg`;
        console.log(random);
        if(random == 1) {
            coin_txt.innerHTML = "it's HEAD!";
        }
        else {
            coin_txt.innerHTML = "it's TAIL!";
        }
        button.disabled=false;
    }, delayInMilliseconds * 20); // Total duration of loop timeouts

});