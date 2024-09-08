function na1() { guessNumber(0); }
function na2() { guessNumber(1); }
function na3() { guessNumber(2); }
function na4() { guessNumber(3); }
function na5() { guessNumber(4); }
function na6() { guessNumber(5); }
function na7() { guessNumber(6); }
function na8() { guessNumber(7); }
function na9() { guessNumber(8); }
function na10() { guessNumber(9); }

function guessNumber(number) {
    var a=number;
    console.log(a);
    var b=document.getElementById("chan")
    switch(a){
        case 0:
            b.innerHTML="Need improve";
            break;
            case 1:
                b.innerHTML="Very weak";
                break;
                case 2:
                    b.innerHTML="Weak";
                    break;
                    case 3:
                        b.innerHTML="Below average";
                        break;
                        case 4:
                            b.innerHTML="Average";
                            break;
                            case 5:
                                b.innerHTML="Above average";
                                break;
                                case 6:
                                    b.innerHTML="Good";
                                    break;
                                    case 7:
                                        b.innerHTML="Very good";
                                        break;
                                        case 8:
                                            b.innerHTML="Excellent";
                                            break;
                                            case 9:
                                                b.innerHTML="Outstanding";
                                                break;                                                                                                                                                                                        
    }
}
function sum(){
    alert("Thanks for giving your feedback about frontend.Your informatio is have been store safely");
    resetGame();

}
function resetGame(){
    var b=document.getElementById("chan")
    b.innerHTML="Outstanding";
}