

const express = require('express');
const os = require('os');
const app = express();
const port = 4000;

app.get('/InfoMemoria', (req, res) => {
    res.send(`Total memory: ${memoriatotal}`);
  const memoriatotal = os.totalmem();
  console.log(memoriatotal);

});

app.get('/InfoGeneral', (req, res) => {
  res.send(`Platform: ${plataforma}`);
  const plataforma = os.platform();
  console.log(plataforma); // win32
 
});

app.get('/Arquitectura', (req, res) => {
  res.send(`CPU Architecture: ${cpuArchitecture}`);
  const cpuArchitecture = os.arch();
  console.log(cpuArchitecture); // x64

});

app.get('/nombreSistema', (req, res) => {
  res.send(`OS Type: ${nombreOs}`);
  const nombreOs = os.type();
  console.log(nombreOs); // Windows_NT

});

app.get('/TiempoSistema', (req, res) => {
  res.send(`Uptime: ${uptimeOS} seconds`);
  const uptimeOS = os.uptime();
  console.log(uptimeOS); // 95156

});

app.get('/Procesador', (req, res) => {
  res.send(cpusCoreLogic);
  const cpusCoreLogic = os.cpus();
  console.log(cpusCoreLogic);
  res.send(cpusCoreLogic);
});

app.listen(port, () => {
  console.log(`Escuchado ${port}`);
});