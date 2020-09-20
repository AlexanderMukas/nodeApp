const os = require('os');
// api node os - nodejs.org/api/os.html
// some to use : w3schoools.com/nodejs/ref_os.asp

function uptimeDetail(timeSec){
    let days = hours = minutes = seconds = 0;
    // Math.trunc() - отброс дробной части
    days = Math.trunc(timeSec/86400);
    timeSec %= 86400;
 
    hours = Math.trunc(timeSec/3600);
    timeSec %= 3600;
  
    minutes = Math.trunc(timeSec/60);
    timeSec %= 60;
    
    seconds = timeSec;
    return `Компьютер работает: ${(days === 0 ? '': days + 'дней')} ${hours} часов ${minutes} минут ${seconds} секунд !`;
}

//const eol = os.EOL;
const architecture = os.arch();
const cpuModel = os.cpus()[0].model;
const cpuCores = cpuModel.length;
const totalMem = os.totalmem() /10e5; // mbite
const freeMem = os.freemem() /10e5; // mbite

const userName = os.userInfo()['username'];
const userDir = os.userInfo()["homedir"];

let upTimeDetail = uptimeDetail(os.uptime());
// console.log(os.uptime());



// console.log('Всего памяти     -', totalMem, ' Мбайт');
// console.log('Свободной памяти -', freeMem, ' Мбайт');
// console.log(upTimeDetail);
// console.log(os.userInfo());
console.log(os.platform(), ' + ', os.release() + ' + ' + os.type);
console.log(os.networkInterfaces());

