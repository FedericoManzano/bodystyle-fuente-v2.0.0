import $ from 'jquery'

(function() {

    var corrido = 0;
    var cargarMenu = () => {
        $(".sidebar-barra .sidebar-menu").append(
            "<span></span><span></span><span></span>");
    }

    var correrMenu = () => {
        $(".sidebar-barra .sidebar-menu").click(function(){
            if(corrido === 0) {
                $(".sidebar-barra").css({
                    width: "calc(100% - 240px)",
                    left: 240
                });
                corrido = 1
            }else {
                $(".sidebar-barra").css({
                    width: "100%",
                    left: 0
                });
                corrido = 0
            }
        })
    }


    var SidebarBarra = {
        iniciar: () => {
            cargarMenu()
            correrMenu()
        }
    }
    window.SidebarBarra = SidebarBarra;
})()

export default SidebarBarra;