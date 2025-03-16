const express = require('express');

const port = 9000;

const app = express();



app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port http://localhost:${port}`);
})
