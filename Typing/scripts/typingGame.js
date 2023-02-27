const Api_url = 'https://api.quotable.io/random';
let jdata;
let counter = 0;
let quote;
let time = 0;
let keys = 0;
let rate;
let error_count = 0
let current_key;
document.querySelector('#time-display').textContent = "WPM: "
document.querySelector('#errors-display').textContent = "Errors: "


async function getQuote(url){
    quote = "";
    let response = await fetch(url);
    if (response.ok){
        jdata = await response.json();

        console.log(jdata);

        quote = jdata.content;

        console.log(quote);
        
        document.querySelector('#quote').textContent = quote;

        
        
        displayKeyboard();
        document.querySelector('#text').value = "";
        current_key = 0;
        
        }

    }

function displayKeyboard(){

        
        
        switch(quote[counter]){
            case "a":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboarda.png')
                break;
            case "b":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardb.png')
                break;
            case "c":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardc.png')
                break;
            case "d":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboard.png')
                break;
            case "e":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboarde.png')
                break;
            case "f":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardf.png')
                break;
            case "g":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardg.png')
                break;
            case "h":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardh.png')
                break;
            case "i":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardi.png')
                break;
            case "j":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardj.png')
                break;
            case "k":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardk.png')
                break;
            case "l":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardl.png')
                break;
            case "m":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardm.png')
                break;
            case "n":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardn.png')
                break;
            case "o":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardo.png')
                break;
            case "p":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardp.png')
                break;
            case "q":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardq.png')
                break;
            case "r":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardr.png')
                break;
            case "s":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboards.png')
                break;
            case "t":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardt.png')
                break;
            case "u":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardu.png')
                break;
            case "v":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardv.png')
                break;
            case "w":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardw.png')
                break;
            case "x":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardx.png')
                break;
            case "y":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardy.png')
                break;
            case "z":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardz.png')
                break;
            case "A":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardca.png')
                break;
            case "B":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcb.png')
                break;
            case "C":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcc.png')
                break;
            case "D":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcd.png')
                break;
            case "E":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardce.png')
                break;
            case "F":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcf.png')
                break;
            case "G":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcg.png')
                break;
            case "H":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardch.png')
                break;
            case "I":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardci.png')
                break;
            case "J":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcj.png')
                break;
            case "K":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardck.png')
                break;
            case "L":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcl.png')
                break;
            case "M":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcm.png')
                break;
            case "N":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcn.png')
                break;
            case "O":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardco.png')
                break;
            case "P":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcp.png')
                break;
            case "Q":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcq.png')
                break;
            case "R":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcr.png')
                break;
            case "S":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcs.png')
                break;
            case "T":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardct.png')
                break;
            case "U":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcu.png')
                break;
            case "V":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcv.png')
                break;
            case "W":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcw.png')
                break;
            case "X":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcx.png')
                break;
            case "Y":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcy.png')
                break;
            case "Z":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardcz.png')
                break;
            case " ":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboardspace.png')
                break;
            case ".":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboard..png')
                break;
            case ",":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboard,.png')
                break;
            case "?":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboard?.png')
                break;
            case "'":
                document.querySelector('#keyboardImg').setAttribute('src', "keyboard-images/keyboard'.png")
                break;
            case "!":
                document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboard!.png')
                break;
            
            
            
            
                default: document.querySelector('#keyboardImg').setAttribute('src', 'keyboard-images/keyboard.png')
        }
        counter += 1;
        errors_display()
        
    }

function restart(){
    if (counter == quote.length){
        counter = -1;
        error_count -= 2;
    }
    else {
        counter = 0;
        error_count -= 1;
    }
    document.querySelector('#text').value = "";
    document.querySelector('#text').focus();
    getQuote(Api_url);
    }

    function WPM(){
        time += 1
        rate = (keys/6)/(time/60);
        document.querySelector('#time-display').textContent = "WPM: " + Math.trunc(rate);
        
    }

    function errors_display(){
        if (current_key != quote[counter-2]){
            error_count += 1; 
        }

        document.querySelector('#errors-display').textContent = "Errors: " + error_count;
    }


function main(){
   getQuote(Api_url);
   setInterval(WPM, 1000);

   document.querySelector('#text').addEventListener('input', () => {displayKeyboard()})

   console.log(quote);

   document.querySelector('#text').addEventListener('keydown', (newKey) => {
    if (newKey.key == 'Backspace'){
        counter -= 2;
        keys -= 1;
        error_count -= 1;
        

    }
    else {
        keys += 1;
        current_key = newKey.key;
    }

    if (counter == quote.length){
        
        

        restart()
    }

    

    document.querySelector('#restart').addEventListener('click', restart);
    

   })
   
   

}



main();