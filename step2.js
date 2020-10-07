const fs = require('fs');
const axios = require('axios');
let arg = process.argv.slice(2)[0];



function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error("Error :", err);
            process.exit(1);
        }
        else {
            console.log(data)
        }
    });
}


async function webCat(url) {
    try {
        let resp = await axios.get(url)
        console.log(resp.data)
    }
    catch (err) {
        console.log("Error: ", err.message)
    }
}



let re = /(\.com)/

if (re.test(arg)) {
    webCat(arg)
}
else {
    cat(arg)
}