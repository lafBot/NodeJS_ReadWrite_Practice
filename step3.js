const fs = require('fs');
const process = require('process');
const axios = require('axios');
let arg = process.argv;


function cat(path, output) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error("Error :", err);
            process.exit(1);
        }
        else {
            handleOutput(data, output);
        }
    });
}

async function webCat(url, output) {
    try {
        let resp = await axios.get(url);
        handleOutput(resp.data, output);
    }
    catch (err) {
        console.log("Error: ", err.message);
        process.exit(1);
    }
}

function handleOutput(data, output) {
    if (output) {
        fs.writeFile(output, data, 'utf8', function(err) {
            if (err) {
                console.error("Error: ", err);
                process.exit(1);
            }
        })
    } else {
        console.log(data)
    }
}

let output;
let path;


if (arg.slice(2)[0] == "--out") {
    output = arg.slice(3)[0]
    path = arg.slice(4)[0]
} else {
    path = arg.slice(2)[0]
}

let re = /(\.com)/

if (re.test(path)) {
    webCat(path, output)
}
else {
    cat(path, output)
}