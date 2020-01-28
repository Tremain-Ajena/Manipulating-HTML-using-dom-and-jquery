$(document).ready(function () {
    var button1 = $('<button>');
    var btnText1 = 'Click!';
    button1.append(btnText1)
    $('body').append(button1);

    button1.click(function () {
        alert('Skull Joke!')
    });

    var button2 = $('#Submit-btn');
    var info = $('#textField');

    button2.click(function (event) {
        alert(info.val());
    });

    var changeSpace = $('#Step3');
    changeSpace.mouseover(function (event) {
        $(this).css('background-color', 'darkorange');
    });
    changeSpace.mouseleave(function (event) {
        $(this).css('background-color', 'white');
    });

    var para = $('<p>');
    var paraText = "It's a beautiful day in the neighborhood, a beautiful day to be neighbors. Please won't you be my neighbor.";
    para.append(paraText);
    $('body').append(para);

    myColor = ['pink', 'orange', 'darkgrey', 'darksalmon', 'darkslategrey', 'orangered', 'palegreen', 'lightcoral', 'blue', 'violet', 'burgundy'];
    para.click(function () {
        $(this).css('color', myColor[Math.floor(Math.random() * myColor.length)]);
    });

    var moreSpace = $('<div>');
    var button3 = $('<button>');
    var btnText3 = 'Press Me!';
    button3.append(btnText3)
    moreSpace.append(button3)
    $('body').append(moreSpace);

    button3.click(function () {
        var sect = $('<span>');
        var sectText = 'Tremain-Ajena Jones';
        sect.append(sectText);
        $('body').append(sect);
    });


    var emSpace = $('<div>');
    var button4 = $('<button>');
    var btnText4 = 'Friends!';
    button4.append(btnText4)
    emSpace.append(button4)
    $('body').append(emSpace);
    let p = 0;

    button4.click(function () {
        var unList = $('<ul>');
        var listItems = $('<li>');
        var listText = [
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

        listItems.append(listText[p]);
        unList.append(listItems);
        $('body').append(unList);
        p++;
    });
});