var playerwins= 0;
var computerwins= 0;
var ties= 0;
var name;
var background;
const ROCK= 0;
const PAPER= 1;
const SCISSORS= 2;
const ROCK_IMAGE= "images/rock.png";
const PAPER_IMAGE= "images/paper.png";
const SCISSORS_IMAGE= "images/scissors.png";
const SESSION_PLAYER_WINS= "player_wins";
const SESSION_COMPUTER_WINS= "computer_wins";
const SESSION_TIES= "ties";

function RandomInt(low, high){
    return Math.floor(Math.random()*(high-low+1)) + low;
}
function DisplayResults(playerwins,computerwins,ties){
    var totalRounds= playerwins + computerwins + ties;
    var playerPercent;
    var computerPercent;
    var tiesPercent;

    if (totalRounds != 0){
        playerPercent= 100 * playerwins / totalRounds;
        computerPercent= 100 * computerwins / totalRounds;
        tiesPercent= 100 * ties / totalRounds;
    } else {
        playerPercent= 0;
        computerPercent= 0;
        tiesPercent= 0;
    }
    document.getElementById("divPlayerWins").innerHTML= playerwins;
    document.getElementById("divComputerWins").innerHTML= computerwins;
    document.getElementById("divTies").innerHTML= ties;

    document.getElementById("divPlayerPercent").innerHTML= playerPercent.toFixed(2) + "%";
    document.getElementById("divComputerPercent").innerHTML= computerPercent.toFixed(2) + "%";
    document.getElementById("divTiesPercent").innerHTML= tiesPercent.toFixed(2) + "%";
}
function PageLoad(){
    if (localStorage.getItem(SESSION_PLAYER_WINS)!= null){
        playerwins= parseFloat(localStorage.getItem(SESSION_PLAYER_WINS));
    } else {
        playerwins= 0;
    }
    if (localStorage.getItem(SESSION_COMPUTER_WINS)!= null){
        computerwins= parseFloat(localStorage.getItem(SESSION_COMPUTER_WINS));
    } else {
        computerwins= 0;
    }
    if (localStorage.getItem(SESSION_TIES)!= null){
        ties= parseFloat(localStorage.getItem(SESSION_TIES));
    } else {
        ties= 0;
    }
    DisplayResults(playerwins,computerwins, ties);
}
function Close() {
    localStorage.setItem(SESSION_PLAYER_WINS, playerwins);
    localStorage.setItem(SESSION_COMPUTER_WINS, computerwins);
    localStorage.setItem(SESSION_TIES, ties);
    window.close();
}
function ClearSession() {
    localStorage.clear();
    alert("Session is cleared");
}
function SelectAd(){
    var adNum= Math.floor(4*Math.random());
    document.getElementById("adImg").src= "ads/ad" + adNum + ".gif";
}
function PlayGame() {
    var playerChoice;
    var playerImage;
    var computerChoice;
    var computerImage;

    var selectedChoice= document.getElementById("playerChoices").selectedIndex;

    if (selectedChoice==ROCK){
        playerChoice= ROCK;
        playerImage= ROCK_IMAGE;
    } else if(selectedChoice==PAPER){
        playerChoice= PAPER;
        playerImage= PAPER_IMAGE;
    } else if(selectedChoice==SCISSORS){
        playerChoice= SCISSORS;
        playerImage= SCISSORS_IMAGE;
    }

    computerChoice= RandomInt(ROCK,SCISSORS);

    if (computerChoice< PAPER){
        computerImage= ROCK_IMAGE;
    } else if (computerChoice< SCISSORS){
        computerImage= PAPER_IMAGE;
    } else if (computerChoice> PAPER){
        computerImage= SCISSORS_IMAGE;
    }

    var summary;

    if (playerChoice== ROCK && computerChoice== SCISSORS){
        summary= "You win";
        playerwins++;
    } else if (playerChoice== PAPER && computerChoice== ROCK){
        summary= "You win";
        playerwins++;
    } else if (playerChoice== SCISSORS && computerChoice== PAPER){
        summary= "You win";
        playerwins++;
    } else if (playerChoice== ROCK && computerChoice== PAPER){
        summary= "You lose";
        computerwins++;
    } else if (playerChoice== PAPER && computerChoice== SCISSORS){
        summary= "You lose";
        computerwins++;
    } else if (playerChoice== SCISSORS && computerChoice== ROCK){
        summary= "You lose";
        computerwins++;
    } else{
        summary= "TIE";
        ties++;
    }

    DisplayResults(playerwins,computerwins,ties);
    document.getElementById("picPlayer").src= playerImage;
    document.getElementById("picComputer").src= computerImage;
    document.getElementById("divSummary").innerHTML= summary;

}
function MakeChanges(){
    var background=document.getElementById("background").selectedIndex;
    var varible;

    if(background==0 && document.getElementById("English").checked){
        variable="EngYellow.html";
    }
    else if (background==1 && document.getElementById("English").checked){
        variable="EngOrange.html";
    }
    else if (background==2 && document.getElementById("English").checked){
        variable="EngPink.html";
    }
    else if (background==0 && document.getElementById("German").checked){
        variable="GerYellow.html";
    }
    else if (background==1 && document.getElementById("German").checked){
        variable="GerOrange.html";
    }
    else if (background==2 && document.getElementById("German").checked){
        variable="GerPink.html";
    }
    return variable;
}