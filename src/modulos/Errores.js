(function(){
    const ERR = {
        clasesColorFondo: {
            validacion: /^(fd-.+)/,
            mensaje: "01 Error color de fondo: \n Las clases background-color comienzan con el prefijo fd-"
        },
        hexadecimal: {
            validacion: /^#([a-f]|[A-F]|[0-9]){3,}$/,
            mensaje: "02 Número hexadecimal del color: \n Los numeros hexadecimales de los colores comienzan con #valor (A-F 0-9)"
        },
        clasesColorTexto:{
            validacion: /^c-./,
            mensaje: "03 Clase color de texto: \n Las clases referentes a los colores del texto comienzan con el prefijo c-"
        },
        id: {
            validacion: /^#./,
            mensaje: "04 Problema con el ID: \n El id que ingresa a las funciones tiene que estar precedido por el caracter #"
        },

        positivos: {
            validacion: (val) => val > 0,
            mensaje: "05 Numero negativo: \n revise el valor entero ingresado ya que el parametro solicitado debe ser + mayor que 0"
        },

        hover: {
            mensaje: "06 Efecto hover erroneo: \n Los valores posibles para el efecto hover del componente select son {none|borde|fondo}"
        },

    }

    window.ERR = ERR
})()

export default ERR