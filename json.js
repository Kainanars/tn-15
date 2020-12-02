const https = require('https')
const JSON_URL = 'https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json';

const onResponse = response => {
    response.setEncoding('utf8');
    let rawData = ''
    response.on('data', chunk => { rawData += chunk })
    response.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    })
}
https.get(JSON_URL, onResponse)


