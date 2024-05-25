var clons = [
    {
        id: "at",
        valores: [.03, .06, .09, .14, .19, .24, .34, .44, .54, .69, .84, .99, 1.14, 1.29, 1.44]
    },
    {
        id: "ct",
        valores: [.15, .30, .45, .70, .95, 1.2, 1.7, 2.2, 2.7, 3.45, 4.2, 4.95, 5.7, 6.45, 7.2]
    },
    {
        id: "bl",
        valores: [.02, .04, .06, .09, .12, .15, .21, .27, .33, .42, .51, .60, .68, .78, .87]
    },
    {
        id: "ev",
        valores: [.12, .24, .36, .56, .76, .96, 1.36, 1.76, 2.16, 2.76, 3.36, 3.96, 4.56, 5.16, 5.76]
    },
    {
        id: "hp",
        valores: [.02, .04, .06, .09, .12, .15, .19, .23, .27, .31, .35, .39, .44, .49, .54]
    }
]

function init() {
    preencherSelects();
}

function preencherSelects() {
    clons.forEach(clon => {
        calcularClon(clon.id);

        let select = document.getElementById("select-" + clon.id);
        select.addEventListener("input", (ev) => calcularClon(clon.id));

        let inputAt = document.getElementById("input-" + clon.id);
        inputAt.addEventListener("input", (ev) => calcularClon(clon.id));

        for (let i = 15; i >= 1; i--) {
            let opt = document.createElement('option');
            opt.value = clon.valores[i - 1];
            opt.innerHTML = i;
            select.appendChild(opt);
        }
    });
}

function calcularClon(id) {
    let valor = document.getElementById("input-" + id)?.value;
    let clon = document.getElementById("select-" + id)?.value;

    let resultado = document.getElementById("result-" + id);
    resultado.innerHTML = valor * clon;

    if (id == "bl") {
        if (clon.length == 0) {
            clon = clons.find(x => x.id == id).valores[14];
        }

        resultado.innerHTML = clon * 100;
    }
}

init();