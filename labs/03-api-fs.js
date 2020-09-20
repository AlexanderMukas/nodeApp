// const { stat, writeFile} = require('fs');
const testDir = '/home/mukas/coding/sql'
const fs = require('fs');

// console.log(fs);
// fs.stat(testDir, (err, stats) => {
//     if(err){
//         console.error(err);
//         return
//     };
//     console.log(stats.blocks);
// });

fs.readdir(testDir, (err, files) => {
    if(err){
        console.error(err);
        return
    };
    console.log(`${testDir}:`);
    files.forEach( file => {
        console.log(`\t\t\t ${file}`);
    })

})