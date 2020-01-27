document.addEventListener("DOMContentLoaded", function (){
    let button = document.createElement('button');
    let btnText = document.createTextNode('Bop It!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        let alert = document.createElement('alert');
        let alText = document.createTextNode("Hi, my name's Jeff");
        alert.appendChild(alText);
        document.append(alert);
    })
})