const { app, BrowserWindow, ipcMain } = require('electron')



const createWindow = () => {
const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences:{
    preload: __dirname + '/preload.js', //Nosso arquivo para o preload.js
  }
})

win.loadFile('pages/index.html')

}

ipcMain.handle('cadastrar-meu-usuario-palavra', function(evento, nome, email){
  console.log("Nome:", nome)
  console.log("Email:", email)

  console.log("SE É LOKO! CADASTRAR O USUARIO COM SUCESSO!")
})

app.whenReady().then(() => {
  createWindow()
})