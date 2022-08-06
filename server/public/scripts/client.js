$(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#addBtn').on('click', addValues);
    $('#subtractBtn').on('click', subtractValues);
    $('#multiplyBtn').on('click', multiplyValues);
    $('#divideBtn').on('click', divideValues);
    $('#calculateBtn').on('click', sendProblemToServer);
    $('#clearBtn').on('click', clearInputs);
    // on page load display history of problems
    getProblems();
}

// setting up the object equation to send to the server
const newEquation = {};


// functions to set the operator
function addValues(){
    newEquation.operator = '+',
    console.log('addition operator', newEquation);
}
function subtractValues(){
    newEquation.operator = '-'
    console.log('subtraction operator', newEquation);
}
function multiplyValues(){
    newEquation.operator = '*'
    console.log('multiplication operator', newEquation);
}
function divideValues(){
    newEquation.operator = '/'
    console.log('division operator', newEquation);
}

// function to add values to newEquation and send to server
function sendProblemToServer(){{
    newEquation.num0 = $('#first-input').val(),
    newEquation.num1 = $('#second-input').val()};
    console.log('in sendProblem, newEquation:', newEquation);
    $.ajax({
        type: 'POST',
        url: '/newequation',
        data: newEquation
    }).then(function (response){
        console.log('newEquation sent to the server:', newEquation);
        $('#answer').empty();
        $('#answer').append(`
        <h2>${response.answer}</h2>
        `);
        getProblems();
    }).catch(function (error){
        console.log('error');
        alert('Something went wrong with POST. Please try again.');
    })
}


// function to clear inputs with clearBtn
function clearInputs(){
    $('#first-input').val('')
    $('#second-input').val('')
}

// function to display answer on the DOM
// function getAnswer(){
//     $.ajax({
//         type: 'GET',
//     })
// }

// function to display problems on the DOM
function getProblems(){
    $.ajax({
        type: 'GET',
        url: '/problems'
    }).then(function (response) {
        console.log('get request', response);
        $('#calculatorHistory').empty();
        for (let problem of response){
            // let problem = response[i];
            $('#calculatorHistory').append(`
            <ul>
            <li>${problem.num0} ${problem.operator} ${problem.num1} = ${problem.answer}</li>
            </ul>`)
        }
    }).catch(function (error){
        alert('Can not fetch problems. Please try again.');
    })
}


console.log('current object:', newEquation);