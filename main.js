const GAME_VERSION = "0.1";
const GAME_STATE = "alpha";
const GAME_STATE_VERSION_STRING = GAME_STATE.length > 0 ? `-${GAME_STATE}` : "";

var versionText = document.getElementById('version');
versionText.innerText = `v. ${GAME_VERSION}${GAME_STATE_VERSION_STRING}`;

console.log(fetch('./assets/credits.txt'));
