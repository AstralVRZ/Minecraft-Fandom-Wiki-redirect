// ==UserScript==
// @name         Minecraft-Fandom-Wiki-redirect
// @namespace    https://minecraft.fandom.com/
// @version      2.0
// @description  Little user script that redirects from minecraft.fandom.com (bad 👎) to minecraft.wiki (good 👍)
// @author       Astral (https://astralvrz.github.io/)
// @match        *://minecraft.fandom.com/*
// @icon         https://files.catbox.moe/y8i3zz.ico
// @grant        none
// ==/UserScript==

(function() {
    var newDomain = "minecraft.wiki";
    var newURL = location.protocol + "//"+ newDomain + location.pathname
    /*-- replace() puts the good page in the history instead of the
        bad page.
    */
location.replace (newURL);
})();