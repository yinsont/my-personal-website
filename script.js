const h2 = document.createElement('h2')
h2.textContent = "This content added by JavaScrpt"

document.querySelector('body').appendChild(h2);
//mouse over event, if goes over section, change it's bg-color

// addEventListener("mouseover", (event) => {});

// onmouseover = (event) => {};

let section = document.getElementById('section')

section.addEventListener(
    'mouseover',
    (event) => {
        section.background = 'black';
    }
)