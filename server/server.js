const express = require('express');
const app = express();
const PORT = process.env.PORT || 5004;

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));
// Do we need this express.urlencoded line?


let equationArray = [];

app.post('/newequation', (req, res) => {
    const newEquation = req.body;
    console.log(req.body);
    // equationArray.push(newEquation);
    res.sendStatus(201);
})



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});