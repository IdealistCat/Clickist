// imports
import { readTextFile } from "./scripts/files.js";
import { getRandomInt } from "./scripts/math.js";

// non-gameplay things
const GAME_VERSION = "0.2";
const GAME_STATE = "alpha";
const GAME_STATE_VERSION_STRING = GAME_STATE.length > 0 ? `-${GAME_STATE}` : "";

const AUDIO_EXT = 'ogg';

var versionText = document.getElementById('version');
versionText.innerText = `v${GAME_VERSION}${GAME_STATE_VERSION_STRING}`;

// gameplay things
// values
let GAMEPLAY_TOTAL_CLICKS = 0;
let GAMEPLAY_MONEY = 0;
let GAMEPLAY_MONEY_AUTOMATIC = 10;
let GAMEPLAY_MONEY_ADDITION = 1;

// timer
const TIME_INTERVAL = 1;
let INTERVAL = setInterval(secondPass, TIME_INTERVAL * 1000);

// Text
var tcText = document.getElementById('total-clicks');
var moneyText = document.getElementById('money');
var moneyPerC = document.getElementById('money-click');
var moneyPerS = document.getElementById('money-second');

var clickButton = document.getElementById('clickButton');

function clickFunction() {
    GAMEPLAY_TOTAL_CLICKS += 1;
    GAMEPLAY_MONEY = GAMEPLAY_MONEY + GAMEPLAY_MONEY_ADDITION;
    
    changeTexts();
}
function changeTexts() {
    moneyText.innerHTML = `Money: $${Number(GAMEPLAY_MONEY).toString()}`;
    tcText.innerHTML = `Total Clicks: ${Number(GAMEPLAY_TOTAL_CLICKS).toString()}`;   
    moneyPerC.innerHTML = `Money per Click: ${Number(GAMEPLAY_MONEY_ADDITION).toString()}`;   
    moneyPerS.innerHTML = `Money per Second: ${Number(GAMEPLAY_MONEY_AUTOMATIC).toString()}`;
    // moneyPerS.innerHTML = `${readTextFile('./assets/data/credits.txt')}`;
}
function secondPass() {
    GAMEPLAY_MONEY = GAMEPLAY_MONEY + GAMEPLAY_MONEY_AUTOMATIC;
    
    changeTexts();
    // clearInterval(INTERVAL);
}

clickButton.addEventListener("click", clickFunction);
changeTexts();