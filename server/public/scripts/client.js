$(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#addBtn').on('click', addValues);
    $('#subtractBtn').on('click', subtractValues);
    $('#multiplyBtn').on('click', multiplyValues);
    $('#divideBtn').on('click', divideValues);
    $('#calculateBtn').on('click', sendProblem);
    $('#clearBtn').on('click', clearInputs);
}

// creating the equation to send to the server
const newEquation = {
    // { num0: undefined,
    // num2: $('#second-input').val(),
    // answer:  
    // }
};



// functions to set the operator
function addValues(){
    // let firstInput = $('#first-input').val();
    // console.log('firstInput', firstInput);
    newEquation.operator = '+',
    // newEquation.num0 = $('#first-input').val(); // works!
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
function sendProblem(){{
    newEquation.num0 = $('#first-input').val(),
    newEquation.num1 = $('#second-input').val()};
    console.log('in sendProblem, newEquation:', newEquation);
}


// function to clear inputs with clearBtn
function clearInputs(){
    $('#first-input').val('')
    $('#second-input').val('')
}



console.log('current object:', newEquation);