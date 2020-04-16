import $ from 'jquery'

(function() {

    var visible = false;
    var cargarMenu = () => {
        $(".menu-colapso .menu-boton").append("<span></span><span></span><span></span>");
        $(".menu-colapso-contenedor").hide()
        $(".menu-colapso-contenedor").css("opacity", 1)
    }

    var correrMenu = () => {
        $(".menu-colapso .menu-boton").click(function(){
            if(!visible){
                $(".menu-colapso-contenedor").slideDown(300)
                visible = true  
            }else {
                $(".menu-colapso-contenedor").slideUp(300)
                visible = false  
            }
        })
    }


    var MenuColapso = {
        iniciar: () => {
            cargarMenu()
            correrMenu()
        }
    }
    window.MenuColapso = MenuColapso;
})()

export default MenuColapso;