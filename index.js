const bodyjedna = document.getElementById('body1');
const bodydva = document.getElementById('body2');
const bodyjednaplus = document.getElementById('body1plus');
const bodydvaplus = document.getElementById('body2plus');
const kolo = document.getElementById('kolo');
const statshracjedna = document.getElementById('statshrac1');
const statshracdva = document.getElementById('statshrac2');
const hjednahracjedna = document.getElementById('h1hrac1');
const hjednahracdva = document.getElementById('h1hrac2');
const imgjednajedna = document.getElementById('img11');
const imgjednadva = document.getElementById('img12');
const imgdvajedna = document.getElementById('img21');
const imgdvadva = document.getElementById('img22');
const batn = document.getElementById('batn');
const dvahraci = document.getElementById('dvahraci');
const AI = document.getElementById('AI');
const winid = document.getElementById('win');

let hraci = 1;

let body1 = 0;
let body2 = 0;
let body1plus = 0;
let body2plus = 0;
let kolocislo = 0;
let kolocislorealna = 0;

let hrac1p = 1;
let hrac2p = 0;

AI.addEventListener('click', function() {
    body1 = 0;
    body2 = 0;
    body1plus = 0;
    body2plus = 0;
    kolocislo = 0;
    hraci = 0;
    hrac1p = 1;
    hrac2p = 0;
    kolocislorealna = 0;
    statshracjedna.innerHTML = ("Hráč");
    statshracdva.innerHTML = ('AIčko');
    hjednahracjedna.innerHTML = ('Hráč');
    hjednahracdva.innerHTML = ('AIčko');
    batn.innerHTML = ('Hází hráč');
    imgjednajedna.src = `img/kostka1.png`;
    imgjednadva.src = `img/kostka1.png`;
    imgdvajedna.src = `img/kostka1.png`;
    imgdvadva.src = `img/kostka1.png`;
    kolo.innerHTML = (kolocislo);
    bodyjedna.innerHTML = (body1);
    bodyjednaplus.innerHTML = (body1plus);
    bodydva.innerHTML = (body2);
    bodydvaplus.innerHTML = (body2plus);
});

dvahraci.addEventListener('click', function() {
    body1 = 0;
    body2 = 0;
    body1plus = 0;
    body2plus = 0;
    kolocislo = 0;
    hraci = 1;
    hrac1p = 1;
    hrac2p = 0;
    kolocislorealna = 0;
    statshracjedna.innerHTML = ("Hráč 1");
    statshracdva.innerHTML = ('Hráč 2');
    hjednahracjedna.innerHTML = ('Hráč 1');
    hjednahracdva.innerHTML = ('Hráč 2');
    batn.innerHTML = ('Hází hráč 1');
    imgjednajedna.src = `img/kostka1.png`;
    imgjednadva.src = `img/kostka1.png`;
    imgdvajedna.src = `img/kostka1.png`;
    imgdvadva.src = `img/kostka1.png`;
    kolo.innerHTML = (kolocislo);
    bodyjedna.innerHTML = (body1);
    bodyjednaplus.innerHTML = (body1plus);
    bodydva.innerHTML = (body2);
    bodydvaplus.innerHTML = (body2plus);
});

batn.addEventListener('click', function() {
    if (hraci == 1) {
        if (hrac1p == 1) {
            hrac1();
            hrac1p = 0;
            hrac2p = 1;
            kolocislo += 1;
            batn.innerHTML = ('Hází hráč 2');
        } else if (hrac2p == 1) {
            hrac2();
            hrac1p = 1;
            hrac2p = 0;
            kolocislorealna += 1;
            batn.innerHTML = ('Hází hráč 1');
        }
        kolo.innerHTML = (kolocislo);
        bodyjedna.innerHTML = (body1);
        bodyjednaplus.innerHTML = (body1plus);
        bodydva.innerHTML = (body2);
        bodydvaplus.innerHTML = (body2plus);
        win();
    } else {
        if (hraci == 0) {
            if (hrac1p == 1) {
                hrac1();
                hrac1p = 0;
                hrac2p = 1;
                kolocislo += 1;
                batn.innerHTML = ('Hází AIčko');
                aicko();
            }
        }
        setInterval(function() {
            kolo.innerHTML = (kolocislo);
            bodyjedna.innerHTML = (body1);
            bodyjednaplus.innerHTML = (body1plus);
            bodydva.innerHTML = (body2);
            bodydvaplus.innerHTML = (body2plus);
            win();
        }, 500);
    }
})

function hrac1() {
    one = Math.ceil(Math.random() * 6);
    imgjednajedna.src = `img/kostka${one}.png`;
    two = Math.ceil(Math.random() * 6);
    imgjednadva.src = `img/kostka${two}.png`;
    body1 += one;
    body1 += two;
    if (one == two) {
        body1 += one * 3;
        body1plus = "+" + (one * 3 + one + two);
    } else { body1plus = "+" + (one + two) };
}

function hrac2() {
    one = Math.ceil(Math.random() * 6);
    imgdvajedna.src = `img/kostka${one}.png`;
    two = Math.ceil(Math.random() * 6);
    imgdvadva.src = `img/kostka${two}.png`;
    body1 += one;
    body1 += two;
    if (one == two) {
        body1 += one * 3;
        body1plus = "+" + (one * 3 + one + two);
    } else { body1plus = "+" + (one + two) };
}

function aicko() {
    setTimeout(function() {
        hrac2();
        hrac1p = 1;
        hrac2p = 0;
        kolocislorealna += 1;
        batn.innerHTML = ('Hází hráč');
    }, 500);
}

function win() {
    if (kolocislorealna == 10) {
        if (hraci == 1) {
            if (body1 > body2) {
                winid.innerHTML = ('Poslední hru vyhrál hráč 1!');
            } else if (body2 > body1) {
                winid.innerHTML = ('Poslední hru vyhrál hráč 2!');
            }
        } else if (hraci == 0) {
            if (body1 > body2) {
                winid.innerHTML = ('Poslední hru vyhrál hráč!');
            } else if (body2 > body1) {
                winid.innerHTML = ('Poslední hru vyhrálo AIčko!');
            }
        }
        reset();
    }
}

function reset() {
    if (hraci == 1) {
        body1 = 0;
        body2 = 0;
        body1plus = 0;
        body2plus = 0;
        kolocislo = 0;
        hraci = 1;
        hrac1p = 1;
        hrac2p = 0;
        kolocislorealna = 0;
        statshracjedna.innerHTML = ("Hráč");
        statshracdva.innerHTML = ('AIčko');
        hjednahracjedna.innerHTML = ('Hráč');
        hjednahracdva.innerHTML = ('AIčko');
        batn.innerHTML = ('Hází hráč');
        imgjednajedna.src = `img/kostka1.png`;
        imgjednadva.src = `img/kostka1.png`;
        imgdvajedna.src = `img/kostka1.png`;
        imgdvadva.src = `img/kostka1.png`;
        kolo.innerHTML = (kolocislo);
        bodyjedna.innerHTML = (body1);
        bodydva.innerHTML = (body2);
        bodyjednaplus.innerHTML = (body1plus);
        bodydvaplus.innerHTML = (body2plus);
    } else {
        body1 = 0;
        body2 = 0;
        body1plus = 0;
        body2plus = 0;
        kolocislo = 0;
        hraci = 0;
        hrac1p = 1;
        hrac2p = 0;
        kolocislorealna = 0;
        statshracjedna.innerHTML = ("Hráč");
        statshracdva.innerHTML = ('AIčko');
        hjednahracjedna.innerHTML = ('Hráč');
        hjednahracdva.innerHTML = ('AIčko');
        batn.innerHTML = ('Hází hráč');
        imgjednajedna.src = `img/kostka1.png`;
        imgjednadva.src = `img/kostka1.png`;
        imgdvajedna.src = `img/kostka1.png`;
        imgdvadva.src = `img/kostka1.png`;
        kolo.innerHTML = (kolocislo);
        bodyjedna.innerHTML = (body1);
        bodydva.innerHTML = (body2);
        bodyjednaplus.innerHTML = (body1plus);
        bodydvaplus.innerHTML = (body2plus);
    }
}