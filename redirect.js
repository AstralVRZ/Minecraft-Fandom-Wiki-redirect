// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
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