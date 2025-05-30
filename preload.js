console.log('CARREGOU O MEU ARQUIVO DE PRELOAD ');

const { contextBridge, ipcRenderer } = require('electron');

function cadastrarUsuario(nome, email){
    ipcRenderer.invoke('cadastrar-meu-usuario-palavra', nome, email)
}


contextBridge.exposeInMainWorld('api',{
cadastrarUsuario
})



