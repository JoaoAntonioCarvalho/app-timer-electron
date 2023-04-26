const {ipcRenderer} = require('electron');
const {shell} = require('electron');
const process = require('process');

let versaoElectron = document.querySelector('#versao-electron');
window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
};

let linkFechar = document.querySelector('#link-fechar');
linkFechar.addEventListener('click', () => {
    ipcRenderer.send('fechar-janela-sobre');
});

let linkInstagram = document.querySelector('#link-instagram');
linkInstagram.addEventListener('click', () => {
    shell.openExternal("https://www.instagram.com/_joao.a.carvalho_/"); //abrir o link no navegador padrao
});