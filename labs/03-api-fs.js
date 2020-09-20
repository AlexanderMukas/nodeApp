// const { stat, writeFile} = require('fs');
const testDir = '/home/mukas/coding/sql';
const filePath = '/home/mukas/coding/sql/auth_book_insert.txt';
const fs = require('fs');

// console.log(fs);
// fs.stat(testDir, (err, stats) => {
//     if(err){
//         console.error(err);
//         return
//     };
//     console.log(stats.blocks);
// });

// содержимое директории
fs.readdir(testDir, (err, files) => {
    if(err){
        console.error(err);
        return;
    };
    console.log(`${testDir}:`);
    files.forEach( file => {
        console.log(`\t\t\t ${file}`);
    });
});

// статус файла
fs.stat(filePath, (err, stats) => {
    if(err){
        console.error(err);
        return;
    };
    console.log(`dir: ${filePath} \nfile: ${stats.isFile()}\n${stats.size} bytes`);
});
// check pls - habr.com/ru/company/ruvds/blog/424969