// non-gameplay things
let START_TIME = Date.now();

const GAME_VERSION = "0.1";
const GAME_STATE = "alpha";
const GAME_STATE_VERSION_STRING = GAME_STATE.length > 0 ? `-${GAME_STATE}` : "";

var versionText = document.getElementById('version');
versionText.innerText = `v. ${GAME_VERSION}${GAME_STATE_VERSION_STRING}`;

console.log(fetch('/Clickist/assets/credits.txt'));

// gameplay 
const GAMEPLAY_TOTAL_CLICKS = 0;
const GAMEPLAY_MONEY = 0;

const AUTOSAVE_TIME = 5;

let DATE_THING = new Date();

function loadSaveData(data = String) {
    localStorage.getItem(data);
}
function saveData(data = String, content = String) {
    localStorage.setItem(data, content);
}

function loadAllData() {
    GAMEPLAY_TOTAL_CLICKS = loadSaveData('total-clicks');
    GAMEPLAY_MONEY = loadSaveData('money');
}
function saveAllData() {
    saveData('total-clicks', GAMEPLAY_TOTAL_CLICKS);
    saveData('money', GAMEPLAY_MONEY);
    console.log('Saved: ' + START_TIME - Date.now());
}

setInterval(saveAllData, AUTOSAVE_TIME * 1000);