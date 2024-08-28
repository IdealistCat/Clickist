const GAME_VERSION = "0.1";
const GAME_STATE = "alpha"

var versionText = document.getElementById('version');
versionText.innerText = `v. ${GAME_VERSION} ${GAME_STATE.length > 0 ? `-${GAME_STATE}` : ""}`;

console.log(fetch('./assets/credits.txt'));
