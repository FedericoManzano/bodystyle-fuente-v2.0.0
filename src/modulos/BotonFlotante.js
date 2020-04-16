import $ from 'jquery'


(function(){
    var presionado = 0;
    var iniciar =  ({colorMenu, alineacion, altura} = 
        {colorMenu: "fd-rojo", alineacion: "vertical", altura: 200}) => 
    {
        switch(alineacion) {
            case "horizontal": 
                $(".btn-flotante").css({
                    transform: "rotate(-90deg)",
                    right: 120,
                    top: altura
                })
                $(".boton-menu").css("transform",  "rotate(90deg)")
                $(".boton-opciones").css("transform",  "rotate(90deg)")
            break;
            case "horizontalExpandido": 
                $(".btn-flotante").css({
                    transform: "rotate(-90deg)",
                    right: 120,
                    top: altura
                })
                $(".boton-menu").css("transform",  "rotate(90deg)")
                $(".boton-opciones").css("transform",  "rotate(180deg)")
                $(".submenu").css("transform",  "rotate(-90deg)")
            break;
            case "verticalExpandido": 
                $(".btn-flotante").css({
                    right: 30,
                    top: altura
                })
                $(".boton-opciones").css("transform",  "rotate(90deg)")
                $(".submenu").css("transform",  "rotate(-90deg)")
            break;
            case "vertical": 
            $(".btn-flotante").css({
                    right: 30,
                    top: altura
            })
                
            break;
        }


        $(".btn-flotante .submenu").hide()
    } 
    var eventoClic = () => {
        $(".btn-flotante .boton-menu").click(function(){
            if(presionado === 0){
                $(".btn-flotante .submenu").slideDown(300);
                presionado = 1;
            } else {
                $(".btn-flotante .submenu").slideUp(300);
                presionado = 0;
            }
        })
    }

    var BotonFlotante = {
        iniciar: function(config){
            iniciar(config);
            eventoClic();
        }
    }

    window.BotonFlotante = BotonFlotante;
    
})()

export default BotonFlotante