var table = document.getElementsByTagName("tr");
var titulo = document.getElementsByTagName("h1");
var tableCell = document.getElementsByTagName("td");
var tableHeader = document.getElementsByTagName("th");
var tableRow = document.getElementsByTagName("tr");
var tableMain = document.getElementsByTagName("table");



function dibujar() {
    i = 0;

    titulo[0].style.color = "green";

    var recorrido = setInterval(() => {
        if (i < table.length) {
            table[i].style.opacity = "100%";

            i++;

        } else {
            tableHeader[0].style.border = "1px solid gray";
            tableHeader[1].style.border = "1px solid gray";
            for (i = 0; i < tableCell.length; i++) {
                tableCell[i].style.border = "1px solid gray";
            }

            clearInterval(recorrido);
        }

    }, 50);

}

function modoDiurno() {
    document.body.style.backgroundColor = "lightslategrey";

    for (let i = 1; i < table.length; i++) {
        table[i].style.color = "black";

        if (i % 2 == 0) {
            table[i].style.backgroundColor = "palevioletred";
        } else {
            table[i].style.backgroundColor = "pink";
        }
    }
}

function modoNocturno() {
    document.body.style.backgroundColor = "darkslategrey";

    for (let i = 1; i < table.length; i++) {
        table[i].style.color = "white";

        if (i % 2 == 0) {
            table[i].style.backgroundColor = "grey";
        } else {
            table[i].style.backgroundColor = "black";
        }
    }
}