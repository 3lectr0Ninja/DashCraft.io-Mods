// ==UserScript==
// @name         DashCraft.io Skin Unlocker
// @author       3lectr0N!nj@
// @namespace    https://github.com/3lectr0Ninja
// @version      1
// @description  Unlock all Skins
// @match        https://dashcraft.io/*
// @icon         https://dashcraft.io/assets/icons/favicon-32x32.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    const originalFetch = window.fetch;

    window.fetch = async function (...args) {
        const response = await originalFetch.apply(this, args);
        if(response.url=="https://api.dashcraft.io/auth/account"){
            const clone = await response.clone()
            const data = await response.clone().json();
            let exp = 1000000
            data.xp=exp
            data.leagueNr=exp
            data.levelData.isMaxLevel=true
            data.levelData.level=exp/100
            data.levelData.totalXp=exp
            data.levelData.totalXpInLevel=exp
            data.levelData.xpInLevel=exp
            return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { "Content-Type": "application/json" }
        });
        }
        return response;
    };
})();
