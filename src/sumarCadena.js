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
    
    // Parsear un único delimitador: //[delim]
    const match = definicion.match(/\[(.+?)\]/);
    if (match) {
      delimitadores = [match[1]];
    }
  }

  // Crear patrón regex escapando caracteres especiales
  const patronDelimitadores = delimitadores
    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  
  const regex = new RegExp(patronDelimitadores);
  const numeros = contenido.split(regex);

  // Sumar todos los números válidos, ignorando números > 1000
  return numeros.reduce((suma, num) => {
    const numero = parseInt(num.trim(), 10);
    if (!isNaN(numero) && numero <= 1000) {
      return suma + numero;
    }
    return suma;
  }, 0);
}

export default sumarCadena;





