import $ from "jquery"


class Select {
    iniciar(contexto){

        var val = /^#./

        if(!val.test(contexto)) {
            console.error(`El contexto ( ${contexto} ) enviado no posee el formato adecuado \n revise el formato. Todos los ID comienzan con el caracter #`)
            return
        }

        var opciones = $(contexto + " select option")
        var visible = false
        $(contexto).append("<span class='seleccionado'></span>")
        $(contexto + " .seleccionado").text($(opciones[0]).text())
        $(contexto).append("<div class='lista'><ul></ul></div>")
        $(opciones).each(function(){
            $(contexto + " .lista ul").append("<li><option class='e-borde-izq-verde-4'>" + $(this).text() + "</option></li>")
        })

        $(contexto + " .lista ul li").click(function(){
            var ind =  ($(this).index() + 1).toString()
            $(contexto + " select option").attr("selected", false)
            $(contexto + " select option[value=" + ind +"]").attr("selected", true)
            $(contexto + " .seleccionado").text($(this).children("option").text())
        })

        $(contexto).click(function(){
            if(visible === false){
                $(contexto + " .lista").slideDown(300)
                $(this).css("border" , "1px solid rgba(135, 217, 255)")
                visible = true
            }
            else{
                $(contexto + " .lista").slideUp(300)
                $(this).css("border" , "1px solid rgb(207, 207, 207)")
                visible = false
            }
        })
    }
}

export default Select