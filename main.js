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

    localStorage.setItem('total-clicks', GAMEPLAY_TOTAL_CLICKS);
    localStorage.setItem('money', GAMEPLAY_MONEY);

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
    GAMEPLAY_TOTAL_CLICKS = Number(localStorage.getItem('total-clicks'));
    GAMEPLAY_MONEY = Number(localStorage.getItem('money'));
    GAMEPLAY_MONEY_ADDITION = Number(localStorage.getItem('money-addition'));

    if (GAMEPLAY_TOTAL_CLICKS < 1) GAMEPLAY_TOTAL_CLICKS = 0;
    if (GAMEPLAY_MONEY_ADDITION < 1) GAMEPLAY_MONEY_ADDITION = 1;
    if (GAMEPLAY_MONEY < 1) GAMEPLAY_MONEY = 0;

    changeTexts();
}

clickButton.addEventListener("click", clickFunction);
initalize();