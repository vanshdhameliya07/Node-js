const express = require('express');

const app = express();

const port = 9000;

const cors = require('cors');
app.use(cors())

app.get('/users', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "message successfully fetch",
        users: [
            { id: 1, name: "jay", phone: 9898654524 },
            { id: 2, name: "sachin", phone: 6355455078 },
            { id: 3, name: "vijay", phone: 9033575005 },
        ]


    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
        return false
    }
    console.log(`server start on port http://localhost:${port}`)
})