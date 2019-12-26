var valores=[];
var input = document.getElementsByTagName('input')[0];

function valueCurrent(valor) {
    input.value+=valor;
}

function nextValue() {
    input.value="";
}

function clearAll() {
    valores=[];
    input.value="";
}

function operationSelect(operation) {
    if (input.value === "") {
        alert("Proporcione una cifra para calcular");
    } else {
        valores.push(input.value);
        if (valores.length === 1) {
            valores.push(operation);
            input.value="";
        } else {
            alert("esta calculadora solo hace operaciones con dos cifras");
        }
    }
}

function calculate() {
    if (valores.length === 2) {
        valores.push(input.value);
    }
    input.value = eval(valores.join(''));
    valores=[];
}

function addPoint() {
    if (!input.value.includes('.')) {
        input.value += ".";
    }
}

function addSign(signo) {
    var signo=Array.from(input.value);

    if (input.value.length > 0) {
        if (!input.value.includes("-")) {
            signo.unshift('-');
        } else {
           signo.shift();
        }
        input.value=signo.join("");
    }
}

input.addEventListener('keydown', (e) => {
    e.preventDefault();
});

Array.from(document.getElementsByTagName('button')).forEach((el,index,arr) => {
    el.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        switch(el.getAttribute('class')) {
            case 'number':
                valueCurrent(e.target.innerHTML);
                break;
            case 'clear':
                clearAll();
                break;
            case 'sign':
                addSign();
                break;
            case 'operator':
                switch(e.target.innerHTML) {
                    case "x":
                        operationSelect('*');
                        break;
                    default:
                        operationSelect(e.target.innerHTML);
                }
                break;
            case 'calculate':
                calculate();
                break;
            case 'point':
                addPoint();
                break;
            default:
                alert('unknown element');
        }
    });
});
