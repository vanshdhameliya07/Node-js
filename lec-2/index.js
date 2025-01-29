const ht = require(`http`);

const port = 8000;

const fs = require(`fs`);

const {error} = require("console");


const server = ht.createServer((req, res) => {
    let filename = "";
    switch (req.url) {
        case `/`:
            filename = `./home.html`;
            break;
        case `/contact`:
            filename = `./contact.html`;
            break;
        case `/about`:
            filename = `./about.html`;
            break;
        case `/page`:
            filename = `./page.html`;
            break;
        default:
            filename = `./404.html`;

    }
    fs.readFile(filename, (err, pagename) => {
        if (err) {
            console.log(`file not found`);
            return false;
        }
        res.end(pagename);
    })

})
server.listen(port, (err) => {
    if (!err) {
        console.log(`server is start on port :- ${port}`)
    }
})