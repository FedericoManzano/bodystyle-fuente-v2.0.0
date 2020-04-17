import $ from 'jquery'
import ERR from './Errores'

(function(){

    var abierto = 0
    var tiempo = 300
    
    // Codigo de error MODULO 24
    const MODULO = "Error BodyStyle dice: M24"


    var validacionConfiguracion = (
                colorFondo, 
                colorFlechas, 
                colorLogo, 
                colorTitulos, 
                colorEnlaces, 
                tiempoEfecto
        ) => {
        if( !(ERR.clasesColorFondo.validacion.test(colorFondo)) ){
            console.error(MODULO + ERR.clasesColorFondo.mensaje)
            return false
        }

        if( !(ERR.hexadecimal.validacion).test(colorFlechas) ){
            console.error(MODULO + ERR.hexadecimal.mensaje)
            return false
        }

        if( !(ERR.clasesColorTexto.validacion).test(colorLogo) ){
            console.error(MODULO + ERR.clasesColorTexto.mensaje)
            return false
        }
        if( !(ERR.clasesColorTexto.validacion).test(colorTitulos) ){
            console.error(MODULO + ERR.clasesColorTexto.mensaje)
            return false
        }

        if( !(ERR.clasesColorTexto.validacion).test(colorEnlaces) ){
            console.error(MODULO + ERR.clasesColorTexto.mensaje)
            return false
        }

        if( !ERR.positivos.validacion(tiempoEfecto) ){
            console.error(MODULO + ERR.positivos.mensaje)
            return false
        }

        return true
    }


    var inicializarComponentes = (
        {
            colorFondo="fd-gris-n", 
            colorFlechas="#fff",
            colorLogo="c-blanco",
            colorTitulos="c-blanco",
            colorEnlaces="c-blanco",
            tiempoEfecto=300
        }) => {
    
        if(!validacionConfiguracion(colorFondo, 
                colorFlechas, 
                colorLogo, 
                colorTitulos, 
                colorEnlaces, 
                tiempoEfecto
            )){
            $(".sidebarFija").hide()
            return 
        }
       
        tiempo = tiempoEfecto
        
        
        $(".sidebarFija").addClass(colorFondo)
        $(".sidebarFija .sedebarLogo").addClass(colorLogo)
        $(".sidebarFija .titulo").addClass(colorTitulos)
        $(".sidebarFija ul li a").addClass(colorEnlaces)


        $(".sidebarFija .titulo").append("<i class='f-derecha'></i>");
        $(".sidebarFija .titulo").append("<i class='f-abajo'></i>");

        $(".sidebarFija .titulo").children(".f-abajo").css({
            borderTop: "solid 5px " + colorFlechas,
            borderRight: "solid 5px transparent",
            borderLeft: "solid 5px transparent"
        })
        $(".sidebarFija .titulo").children(".f-derecha").css({
            borderTop: "solid 5px transparent",
            borderBotton: "solid 5px transparent",
            borderLeft: "solid 5px " + colorFlechas
        })


        $(".sidebarFija .titulo .f-abajo").hide();
        $(".sidebarFija .lista").hide();
    }


    var cerrarTodas = () => {
        $(".sidebarFija  > .lista").slideUp(tiempo)
        $(".sidebarFija  > .titulo").children(".f-derecha").show()
        $(".sidebarFija  > .titulo").children(".f-abajo").hide()
    }

    var desplegar = (id) => {
        cerrarTodas()
        
        $(".titulo").each(function(){
            
            if($($(this)).data("target") === id){
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                $(id).show()
                abierto = $(this).index()
            }
        })
    }

    var mostarLista = () => {
        $(".sidebarFija a.titulo").click(function() {
            cerrarTodas()
            if($(this).index() !== abierto) {
                $($(this).data("target")).slideDown(tiempo)
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                abierto = $(this).index()
            }else {
                abierto = 0
            }
        })
    }


    var SidebarFija = {

        iniciar: (c)=> {
            inicializarComponentes(c)
            mostarLista()
        },

        desplegar: (id) => desplegar(id)
    
    }
    window.SidebarFija = SidebarFija
})()

export default SidebarFija