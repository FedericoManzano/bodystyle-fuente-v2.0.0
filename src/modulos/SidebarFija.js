import $ from 'jquery'

(function(){

    var abierto = 0
    var tiempo = 300
    
    // Codigo de error MODULO 24
    const MODULO = "Error BodyStyle dice: M24"

    // Errores
    const E1 = `Color background: \n las clases background-color de BodyStyle comienzan con el prefijo (fd-)`
    const E2 = `Colores hexadecimales: \n los valores hexadecimales de los colores se componen #+valor (A-F0-9) hexadecimal del color`
    const E3 = `Color textos: \n las clases de BodyStyle comienzan con el prefijo (c-) + color para los textos `
    const E4 = `Tiempo MS: \n El tiempo en ms debe ser mayor que 0`


    var validacionConfiguracion = (
                colorFondo, 
                colorFlechas, 
                colorLogo, 
                colorTitulos, 
                colorEnlaces, 
                tiempoEfecto
        ) => {
        if( !(/^fd-./.test(colorFondo)) ){
            console.error(MODULO + "01 " + E1)
            return false
        }

        if( !(/^#([a-f]|[A-F]|[0-9]){3,}$/).test(colorFlechas) ){
            console.error(MODULO + "02 " + E2)
            return false
        }

        if( !(/^c-./).test(colorLogo) ){
            console.error(MODULO + "03" + E3)
            return false
        }
        if( !(/^c-./).test(colorTitulos) ){
            console.error(MODULO + "03" + E3)
            return false
        }

        if( !(/^c-./).test(colorEnlaces) ){
            console.error(MODULO + "03" + E3)
            return false
        }

        if( tiempoEfecto <= 0 ){
            console.error(MODULO + "04 " + E4)
            return false
        }

        return true
    }


    var inicializarComponentes = (
        {
            colorFondo="fd-gris-n", 
            colorFlechas="fff",
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