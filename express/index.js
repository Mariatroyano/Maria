
const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/InfoMemoria', (req, res) => {
    const memoriatotal = os.totalmem();
    res.send(`Total memory: ${memoriatotal}`);
    console.log(memoriatotal);
});
///.............................
app.get('/InfoGeneral', (req, res) => {
    const plataforma = os.platform();
    res.send(`Platform: ${plataforma}`);
    console.log(plataforma); // win32
});

app.get('/Arquitectura', (req, res) => {
    const cpuArchitecture = os.arch();
    res.send(`CPU Architecture: ${cpuArchitecture}`);
    console.log(cpuArchitecture); // x64
});

app.get('/nombreSistema', (req, res) => {
    const nombreOs = os.type();
    res.send(`OS Type: ${nombreOs}`);
    console.log(nombreOs); // Windows_NT
});

app.get('/TiempoSistema', (req, res) => {
    const uptimeOS = os.uptime();
    res.send(`Uptime: ${uptimeOS} seconds`);
    console.log(uptimeOS); // 95156
});

app.get('/Procesador', (req, res) => {
    const cpusCoreLogic = os.cpus();
    res.json(cpusCoreLogic);
    console.log(cpusCoreLogic);
});

app.listen(port, () => {
    console.log(`Puerto Escuchado ${port}`);
});