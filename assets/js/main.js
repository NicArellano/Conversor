const input = document.getElementById("input")
const btn = document.getElementById("boton")
const result = document.getElementById("resultado")
const select = document.getElementById("select")
let data

const conversor = async () => {
    try{ 
       let respuesta = await fetch("https://mindicador.cl/api/")
       data = await respuesta.json()
       console.log(data)
    }
    catch(error) { 
        alert("ERROR", error)
    }
    finally { 
        console.log("Fin del programa")
    }
}

const calculo = () => { 
    console.log("select" , select.value)
    if (select.value === "USD") { 
       return input.value * data.dolar.valor
    }
    else if (select.value === "EU") {
      return  input.value * data.euro.valor
    } 
    else {
        return 0
    }
}

    

conversor()
btn.addEventListener("click" , () => {
    result.innerHTML = calculo()
})



