
import $ from 'jquery'


(function(){
    var cargar = () => {
        $(".sidebar-despleganle .barra-superior .i-menu")
            .append("<span></span><span></span><span></span>")
    }

    var desplegado = 0;


    var desplegar = () => {
        $(".sidebar-despleganle .barra-superior .i-menu").click(function(){
            if(desplegado === 0){
                $(".listado-desplegable").slideDown(300)
                desplegado = 1
            }else {
                $(".listado-desplegable").slideUp(300)
                desplegado = 0;
            }
        })
    }

    var SidebarDesplegable = {
        iniciar: function(){
            cargar()
            desplegar()
        }
    }

    window.SidebarDesplegable = SidebarDesplegable;
})()

export default SidebarDesplegable