function sumarCadena(cadena) {
  // Cadena vacía retorna 0
  if (cadena === "") {
    return 0;
  }

  let delimitadores = [",", "-"];
  let contenido = cadena;

  // Procesar delimitadores personalizados en formato //[delim]\n
  if (cadena.startsWith("//")) {
    const partes = cadena.split("\n");
    const definicion = partes[0].substring(2);
    contenido = partes[1] || "";
    delimitadores = [];

    // Parsear delimitadores: //[delim1][delim2]...
    let index = 0;
    while (index < definicion.length) {
      if (definicion[index] === "[") {
        const finDelim = definicion.indexOf("]", index);
        if (finDelim !== -1) {
          const delim = definicion.substring(index + 1, finDelim);
          delimitadores.push(delim);
          index = finDelim + 1;
        } else {
          index++;
        }
      } else {
        index++;
      }
    }
  }

  // Crear patrón regex escapando caracteres especiales
  const patronDelimitadores = delimitadores
    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  
  const regex = new RegExp(patronDelimitadores);
  const numeros = contenido.split(regex);

  // Sumar todos los números válidos (<=1000)
  return numeros.reduce((suma, num) => {
    const numero = parseInt(num.trim(), 10);
    if (!isNaN(numero) && numero <= 1000) {
      return suma + numero;
    }
    return suma;
  }, 0);
}

export default sumarCadena;





