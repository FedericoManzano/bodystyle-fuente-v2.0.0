import $ from 'jquery'


class EfectoScroll {

    iniciar(contexto){
        $(window).scroll(function(){
            if($(this).scrollTop() >= $(contexto).offset().top - 450) {
                $(contexto + " .c-efecto .izquierda").css("left", 0)
                $(contexto + " .c-efecto .izquierda").css("top", $(contexto + 
                    " .c-efecto .arriba").outerHeight() + 30)
                $(contexto + " .c-efecto .izquierda").css("opacity", "1")

                $(contexto + " .c-efecto .derecha").css("right", 0)
                $(contexto + " .c-efecto .derecha").css("top", $(contexto + 
                    " .c-efecto .arriba").outerHeight() + 30)
                $(contexto + " .c-efecto .derecha").css("opacity", "1")


                $(contexto + " .c-efecto .abajo").css("bottom", 0)
                $(contexto + " .c-efecto .abajo").css("opacity", "1")


                $(contexto + " .c-efecto .arriba").css("top", 0)
                $(contexto + " .c-efecto .arriba").css("opacity", "1")
            }
        })
    }
}



export default EfectoScroll