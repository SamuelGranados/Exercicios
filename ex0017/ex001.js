function contar() {
    var inInicio = document.getElementById("inInicio")
    var inFim = document.getElementById("inFim")
    var inPasso = document.getElementById("inPasso")
    var outRes = document.getElementById("outRes") 

    if (inInicio.value.length == 0 || inFim.value.length == 0 || inPasso.value.length == 0) {
        alert("Preencha os dados correctamente!")
    } else {
        outRes.innerHTML = "Contando..."
        let i = Number(inInicio.value)
        let f = Number(inFim.value)
        var p = Number(inPasso.value)

        for(let c = i; c <= f; c += p) {
            outRes.innerHTML += ` ${c}\u{1F449}`
        }
        outRes.innerHTML += ` \u{1F3C1}`
    }
}