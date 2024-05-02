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
	location.replace(location.href.replace("fandom.com","wiki"));
})();
