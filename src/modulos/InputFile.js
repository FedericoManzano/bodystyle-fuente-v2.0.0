
import $ from 'jquery'

(function(){

    var inicializar = () => {
       
        var elemento = $("<span class='archivo-seleccionado'>Seleccionar un archivo ...</span>")
        $(".f-label").append(elemento)
    }

    var archivoSeleccionado = () => {
        $(".input-file").change(function() {
            var texto = $(this).val()

            if(texto === ""){
                $(this).siblings(".f-label").children(".archivo-seleccionado").text("Seleccionar un archivo ...")
                $(this).siblings(".f-label").children(".archivo-seleccionado").css("color", "rgb(56, 56, 56)")
                $(this).siblings(".f-label").children(".archivo-seleccionado").css("border-bottom", "1px solid rgb(136, 136, 136)")
            }else {
                $(this).siblings(".f-label").children(".archivo-seleccionado").text(texto)
                $(this).siblings(".f-label").children(".archivo-seleccionado").css("color", "rgb(22, 112, 60)")
                $(this).siblings(".f-label").children(".archivo-seleccionado").css("border-bottom", "1px solid rgb(22, 112, 60)")
            }
            
        })
    }

    var InputFile = {
        iniciar: () => {
            inicializar()
            archivoSeleccionado()
        }

    }

    window.InputFile = InputFile

})()

export default InputFile