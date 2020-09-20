const os = require('os');
// api node os - nodejs.org/api/os.html
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
    return `Компьютер работает:\n${days} дней\n${hours} часов\n${minutes} минут\n${seconds} секунд !`
}

//const eol = os.EOL;
const architecture = os.arch();
const cpuModel = os.cpus()[0].model;
const cpuCores = cpuModel.length;
const totalMem = os.totalmem() /10e5; // mbite
const freeMem = os.freemem() /10e5; // mbite
let upTimeDetail = uptimeDetail(os.uptime());
console.log(os.uptime());

// console.log('Всего памяти     -', totalMem, ' Мбайт');
// console.log('Свободной памяти -', freeMem, ' Мбайт');
