// non-gameplay things
let START_TIME = Date.now();

const GAME_VERSION = "0.1";
const GAME_STATE = "alpha";
const GAME_STATE_VERSION_STRING = GAME_STATE.length > 0 ? `-${GAME_STATE}` : "";

var versionText = document.getElementById('version');
versionText.innerText = `v.${GAME_VERSION}${GAME_STATE_VERSION_STRING}`;

console.log(fetch('/Clickist/assets/credits.txt'));

// gameplay things
let GAMEPLAY_TOTAL_CLICKS = 0;
let GAMEPLAY_MONEY = 0;
let GAMEPLAY_MONEY_ADDITION = 1;

let AUTOSAVE_SECOND = 1;

let DATE_THING = new Date();
let INTERVAL = setInterval(saveAllData(), AUTOSAVE_TIME * 1000);

var tcText = document.getElementById('total-clicks');
var moneyText = document.getElementById('money');

var clickButton = document.getElementById('clickButton');

function loadSaveData(data = 'money', htmlElement = moneyText) {
    localStorage.getItem(data);
    try { htmlElement.innerHTML = localStorage.getItem(data).toString(); } catch(error) { console.error(error); }
}
function saveData(data = String, content = String, htmlElement = moneyText) {
    localStorage.setItem(data, content);
    try { htmlElement.innerHTML = localStorage.getItem(data).toString(); } catch(error) { console.error(error); }
}

function loadAllData() {
    GAMEPLAY_TOTAL_CLICKS = loadSaveData('total-clicks', tcText);
    GAMEPLAY_MONEY = loadSaveData('money-addition', null);
    GAMEPLAY_MONEY = loadSaveData('money', moneyText); // Doesn't require values but are they just in case
}
function saveAllData() {
    saveData('total-clicks', GAMEPLAY_TOTAL_CLICKS);
    saveData('money-addition', GAMEPLAY_MONEY_ADDITION);
    saveData('money', GAMEPLAY_MONEY);

    console.log('Saved: ' + START_TIME - Date.now());
    clearInterval(INTERVAL);
}
function eraseAllData() {
    saveData('total-clicks', 0);
    saveData('money-addition', 1);
    saveData('money', 0);

    loadAllData();
}

loadAllData();

clickButton.onclick(function() {
    
    GAMEPLAY_TOTAL_CLICKS++;
    GAMEPLAY_MONEY += GAMEPLAY_MONEY_ADDITION;

    saveAllData();
})