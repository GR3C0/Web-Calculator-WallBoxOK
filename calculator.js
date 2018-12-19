
function Calculadora()
{
    potencia = parseFloat(document.getElementById("potencia").value);
    coste = parseFloat(document.getElementById("coste").value);

    result = potencia + coste;
    provincia = document.getElementById("provincias").value; // Nos da el Numero de cada provincia
    console.log(provincia);
    
    document.getElementById("resultado").innerHTML = "Resultado: " + result;

}