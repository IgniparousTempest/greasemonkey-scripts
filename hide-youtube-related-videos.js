// ==UserScript==
// @name         Hide related/suggested videos youtube
// @namespace    https://www.youtube.com/
// @version      1.0
// @description  Removes the Youtube related videos secion when watching a video. Google should not control your mind.
// @author       Courtney Pitcher
// @downloadURL  https://github.com/IgniparousTempest/greasemonkey-scripts/hide-youtube-related-videos.js
// @updateURL    https://github.com/IgniparousTempest/greasemonkey-scripts/hide-youtube-related-videos.js
// @match        *://*.youtube.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Remove sidebar, which includes related videos
    const related = document.getElementById("secondary");
    related.style.display = 'none';

    // Stop autoplay
    const autoplay = document.getElementById('toggleButton');
    if (autoplay.querySelector("#ink").hasAttribute("checked")) {
        autoplay.click();
    }
})();
