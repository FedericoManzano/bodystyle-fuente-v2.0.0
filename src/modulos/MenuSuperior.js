import $ from 'jquery'


(function(){


    var estado=0;
    var c = "";
    
    var inicializarColapso = ({color} = {color:"fd-azul-c"}) => {
        $(".colapso").hide()
        $(".colapso").css("opacity", 1)
        c = color 
        aparecerElemento()
    }

    var aparecerElemento = () => {
        var borde = $("<div class='borde-seleccionado'></div>")
        var men = $(".selector-colapso:first")
        borde.css("background-color", c)
        men.append(borde)
        $((men).data("target")).show()
    }

    var selectorSeleccionado = () => {
        $(".selector-colapso").click(function() {
            $(".borde-seleccionado").remove()
            var borde = $("<div class='borde-seleccionado'></div>")
            $(".colapso").hide()
            borde.css({
                left: "-100%",
                backgroundColor: c
            }).appendTo($(this)).animate({
                left: 0
            },300)

            $($(this).data("target")).slideDown(500)
        })
    }


    var cargarComplemento = ()=> {
        $("body").append("<div class='complemento'></div>")
        $(".lateral-boton").append("<span></span><span></span><span></span>")
        $(".complemento").hide()
    }

    var aparecerMenu = () => {
        $(".lateral-boton").click(function(){
            if(estado === 0 || estado === undefined){
                var menuLateral = $($(this).data("target"));
                menuLateral.animate({
                    left: 0,
                }, 500) 
                $(".complemento").show()
                estado = 1
            }else {
                $(".menu-lateral").animate({
                    left: -240,
                }, 500)
                $(".complemento").hide()
                estado = 0
            }
            
        })
    }

    var desaparecerMenu = () => {
        $(".complemento").click(function(){
            $(".menu-lateral").animate({
                left: -240,
            }, 500) 
            $(this).hide()
            estado = 0
        })
    }

    var MenuSuperior = {
        iniciar: function(config){
            cargarComplemento()
            aparecerMenu()
            desaparecerMenu()
            selectorSeleccionado()
            inicializarColapso(config)
        }
    }

    window.MenuSuperior = MenuSuperior;
})()

export default MenuSuperior;