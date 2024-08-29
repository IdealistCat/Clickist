// non-gameplay things
const GAME_VERSION = "0.2";
const GAME_STATE = "alpha";
const GAME_STATE_VERSION_STRING = GAME_STATE.length > 0 ? `-${GAME_STATE}` : "";

var versionText = document.getElementById('version');
versionText.innerText = `v${GAME_VERSION}${GAME_STATE_VERSION_STRING}`;

// gameplay things
let GAMEPLAY_TOTAL_CLICKS = 0;
let GAMEPLAY_MONEY = 0;
let GAMEPLAY_MONEY_ADDITION = 1;

var tcText = document.getElementById('total-clicks');
var moneyText = document.getElementById('money');
var moneyPer = document.getElementById('money-click');

var clickButton = document.getElementById('clickButton');

function clickFunction() {
    GAMEPLAY_TOTAL_CLICKS += 1;
    GAMEPLAY_MONEY += GAMEPLAY_MONEY_ADDITION;
    changeTexts();
}
function changeTexts() {
    moneyText.innerHTML = `Money: $${GAMEPLAY_MONEY.toString()}`;
    moneyPer.innerHTML = `Money per Click: ${GAMEPLAY_MONEY_ADDITION}`;
    tcText.innerHTML = `Total Clicks: ${GAMEPLAY_TOTAL_CLICKS.toString()}`;
}

function changeMoneyAddition(add = 0) {
    GAMEPLAY_MONEY_ADDITION += add;
    changeTexts();
}

function initalize() {
    changeMoneyAddition();
}

clickButton.addEventListener("click", clickFunction);
initalize();