document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Step1!');
    button.appendChild(btnText);
    document.body.appendChild(button);
    let star = document.getElementById('step2');
    let moon = document.getElementById('fieldEntry');
    let mikey = document.getElementById('Step3');
    let leo = document.getElementById('paara');

    myColor = ['pink', 'orange', 'darkgrey', 'darksalmon', 'darkslategrey', 'orangered', 'palegreen', 'lightcoral', 'blue', 'violet', 'burgundy'];

    button.addEventListener('click', function () {
        confirm("Hi, my name's Jeff");
    });

    star.addEventListener('click', function () {
        alert(moon.value);
    });

    mikey.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = "purple";
        // spinCity();
    });

    mikey.addEventListener('mouseleave', function (e) {
        e.target.style.backgroundColor = "white";
    });

    leo.addEventListener('click', function (e) {
        e.target.style.color = myColor[Math.floor(Math.random() * myColor.length)];
    });

    let genesis = document.createElement('div');
    let eggMan = document.createElement('button');
    let eggText = document.createTextNode('Step5');
    let sega1 = document.createElement('div');
    let zone1 = document.createElement('span');
    let rings = document.createTextNode('Tremain-Ajena Jones');
    zone1.appendChild(rings);
    sega1.appendChild(zone1);
    eggMan.appendChild(eggText);
    genesis.appendChild(eggMan);
    document.body.appendChild(genesis);

    eggMan.addEventListener('click', function () {
        document.body.appendChild(sega1);
    });

    let thurgood = document.getElementById('saucy');
    let space = document.getElementById('Step6');
    let newSpace = document.createElement('div');
    newSpace.appendChild(thurgood);
    document.body.appendChild(newSpace);

    let myWoes = [
        'Franklin',
        'George Shrinks',
        'The Hacker',
        'Bam Bam',
        'Harvey Birdman',
        'Dr. Venture',
        'Deedee',
        'Rooney',
        'Moe',
        'Rollie Polie Ollie',
        'Pepper Anne',
        'Kid Muscle',
        'Roger Smith',
        'Shaggy',
        'Ed',
        'Edd',
        'Eddy',
    ];
    
    let x=0
    thurgood.addEventListener('click', function () {
        let soundOff = document.createElement('li'); //SET A VARIABLE TO EQUAL THE CREATION OF LIST ITEMS
        let people = document.getElementById('listed'); //SET A VARIABLE EQUAL TO MY UNORDERED LIST TAG IN MY HTML
        let everyone = document.createTextNode(myWoes[x]); //SET A VARIABLE TO EQUAL THE CREATION OF A TEXTNODE THAT WOULD DISPLAY THE EACH NAME IN THE ARRAY OF PEOPLE
        soundOff.appendChild(everyone); //APPENDED THE LIST ITEMS TO THE TEXTNODE
        people.appendChild(soundOff); //APPENDED THE UNORDERED LIST TO THE LIST ITEMS
        space.appendChild(people); //APPENDED THE DIV FROM MY HTML TO THE UNORDERED LIST
        document.body.appendChild(space);
        x++;
    });

});