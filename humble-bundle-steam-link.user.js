// ==UserScript==
// @name         Humble bundle steam link
// @namespace    http://tampermonkey.net/
// @downloadURL  https://github.com/IgniparousTempest/greasemonkey-scripts/humble-bundle-steam-link.user.js
// @updateURL    https://github.com/IgniparousTempest/greasemonkey-scripts/humble-bundle-steam-link.user.js
// @version      1
// @description  Add steam links to humble bundle games
// @author       Courtney Pitcher
// @match        https://www.humblebundle.com/games/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=humblebundle.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const games = document.querySelectorAll(".item-details");

    for (const game of games) {
        const title = game.querySelector(".item-title").innerText;

        const searchURL = 'https://store.steampowered.com/search/?term=' + title;
        game.parentElement.insertAdjacentHTML('beforeend', `
            <a target="_blank" href="${searchURL}" style="width: auto; display: block;text-align: center;">
                <img src="https://store.steampowered.com/favicon.ico" style="height: 2rem;" onmouseover="this.style.filter='brightness(150%)';" onmouseout="this.style.filter='brightness(100%)';"/>
            </a>
        `);
    }
})();
