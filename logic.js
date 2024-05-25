var clons = [
    {
        id: "select-at",
        valores: [.03, .06, .09, .14, .19, .24, .34, .44, .54, .69, .84, .99, 1.14, 1.29, 1.44],
        valor: 0,
        clonSelecionado: 1.44,
        resultado: 0
    },
    {
        id: "select-ct",
        valores: [.15, .30, .45, .70, .95, 1.2, 1.7, 2.2, 2.7, 3.45, 4.2, 4.95, 5.7, 6.45, 7.2],
        valor: 0,
        clonSelecionado: 7.2,
        resultado: 0
    },
    {
        id: "select-bl",
        valores: [.02, .04, .06, .09, .12, .15, .21, .27, .33, .42, .51, .60, .68, .78, .87],
        valor: 0,
        clonSelecionado: .87,
        resultado: 0
    },
    {
        id: "select-ev",
        valores: [.12, .24, .36, .56, .76, .96, 1.36, 1.76, 2.16, 2.76, 3.36, 3.96, 4.56, 5.16, 5.76],
        valor: 0,
        clonSelecionado: 5.76,
        resultado: 0
    },
    {
        id: "select-hp",
        valores: [.02, .04, .06, .09, .12, .15, .19, .23, .27, .31, .35, .39, .44, .49, .54],
        valor: 0,
        clonSelecionado: .54,
        resultado: 0
    }
]

function init() {
    preencherSelects();

    let inputAt = document.getElementById("input-at");
    inputAt.addEventListener("input", (ev) => calcularClon("input-at"));
}

function preencherSelects() {
    clons.forEach(clon => {
        let select = document.getElementById(clon.id);
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
    let elemento = document.getElementById("input-" + id);
    let clon = clons.find(x => x.id == id);

    // console.log({ evento: evento.target.value, id, ehClon });
}

init();