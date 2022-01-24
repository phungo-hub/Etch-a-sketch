const container = document.getElementById('container');
const slider = document.getElementById('sizeRange');
const eraser = document.getElementById('eraser')
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
const screenVal = document.querySelector("#demo")
const black = document.getElementById("black");
let value = document.getElementById('sizeRange').value;



function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        container.appendChild(cell).className = "grid-item";
    };
};

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


slider.addEventListener('input', function() { 
    let val = document.getElementById('sizeRange').value;
    output.textContent = val;
    removeAllChildNodes(container);
    container.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i =0; i <val*val; i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        container.appendChild(cell).className = "grid-item";
    }
})

eraser.addEventListener('click', () => {
    let val = document.getElementById('sizeRange').value;
    let cell = container.children;
    for (let i =0; i < val * val; i++) {
        cell[i].style.backgroundColor = 'whitesmoke';
    }
});

pastelColor = document.getElementById("random-color");
function getPastelColor() {
    let R = Math.floor((Math.random() * 127) + 127);
    let G = Math.floor((Math.random() * 127) + 127);
    let B = Math.floor((Math.random() * 127) + 127);
    
    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`; 
}

pastelColor.addEventListener("click", () => {
    let val = document.getElementById('sizeRange').value;
    let cell = container.children;
    for (let i =0; i < val * val; i++) {
        cell[i].addEventListener("mouseover", () => {
            cell[i].style.backgroundColor = getPastelColor();
        })
    }
})

black.addEventListener("click", () => {
    let val = document.getElementById('sizeRange').value;
    let cell = container.children;
    for (let i= 0; i< val * val; i++) {
        cell[i].addEventListener("mouseover", () => {
            cell[i].style.backgroundColor = "black";
            })
        }
    })


const chooseColor = document.querySelector('#color');
chooseColor.addEventListener("input", () => {
    let val = document.getElementById('sizeRange').value;
    let newColor = document.getElementById('color').value;
    let cell = container.children;
    for (let i = 0; i < val* val; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = newColor;
        })
    }
})

makeGrid(value,value);