const fs = require('fs');
let args = process.argv;

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log("Error :", err);
            process.kill(1);
        }
        console.log(data);
    })
}

cat(args.slice(2)[0]);