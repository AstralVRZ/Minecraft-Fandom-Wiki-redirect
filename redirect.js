// ==UserScript==
// @name         Minecraft-Fandom-Wiki-redirect
// @namespace    https://minecraft.fandom.com/
// @version      1
// @description  Little user script that redirects from minecraft.fandom.com (bad 👎) to minecraft.wiki (good 👍)
// @author       Astral
// @match        *://minecraft.fandom.com/*
// @icon         https://files.catbox.moe/y8i3zz.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function() {
        window.location.href = "https://minecraft.wiki/";
    };
})();