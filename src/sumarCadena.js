function sumarCadena(cadena) {
  // Cadena vacía retorna 0
  if (cadena === "") {
    return 0;
  }
  
  // Dividir por coma o guion y sumar todos los números
  const numeros = cadena.split(/[,-]/);
  return numeros.reduce((suma, num) => suma + parseInt(num.trim(), 10), 0);
}

export default sumarCadena;





