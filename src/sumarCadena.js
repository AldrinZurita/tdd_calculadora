function sumarCadena(cadena) {
  // Cadena vacía retorna 0
  if (cadena === "") {
    return 0;
  }
  
  // Dividir por coma y sumar
  const numeros = cadena.split(",");
  let suma = 0;
  
  for (let num of numeros) {
    suma += parseInt(num.trim(), 10);
  }
  
  return suma;
}

export default sumarCadena;





