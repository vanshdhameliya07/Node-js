// express library no use karva mate 
const express = require(`express`);

// server ne aa number na port per lavva mate 
const port = 9000;

// ek application object banavo 
const app = express();


app.use('/', require(`./route/indexroute`));

app.listen(port, err => {
    if (err) {
        console.log(err)
        return false;
    }
    console.log(`server start on port http://localhost:${port}`)
})

