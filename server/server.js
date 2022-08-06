const express = require('express');
const app = express();
const PORT = process.env.PORT || 5004;

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));
// Do we need this express.urlencoded line?


let equationArray = [];

app.post('/newequation', (req, res) => {
    const newEquation = req.body;
    console.log('part of post', req.body);
    if(newEquation.operator === '+'){
        newEquation.answer = Number(newEquation.num0) + Number(newEquation.num1);
        console.log('addition problem!', newEquation);
    }
    else if(newEquation.operator === '-'){
        newEquation.answer = Number(newEquation.num0) - Number(newEquation.num1);
        console.log('subtraction problem!', newEquation);
    }
    else if(newEquation.operator === '*'){
        newEquation.answer = Number(newEquation.num0) * Number(newEquation.num1);
        console.log('multiplication problem!', newEquation);
    }
    else if(newEquation.operator === '/'){
        newEquation.answer = Number(newEquation.num0) / Number(newEquation.num1);
        console.log('division problem!', newEquation);
    }
    equationArray.push(newEquation);
    console.log('updated array!', equationArray);
    res.sendStatus(201);
})

// function calculateAnswer(){
//     console.log('newEquation on the server:', req.body);
// }


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});