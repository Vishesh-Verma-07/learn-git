const button = document.querySelector("button");
const main = document.querySelector(".main");
const bar = document.querySelector(".bar");

button.addEventListener("click",()=>{
    const element = document.createElement('div')
    element.innerHTML = "Welcome Everyone!!"


    element.style.cssText = `
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dotted white;
        border-radius: 1px;
    `;


    main.appendChild(element);

})