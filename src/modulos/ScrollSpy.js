import $ from 'jquery'

(function() {

    var c = {}
    var cantidad = $(".scroll-item").length;
    var ids = new Array(cantidad)

    var inicializarIds = 
    ({
        ancho, 
        tamFuente, 
        colorBorde,
        alturaBorde, 
        separacion, 
        colorSeleccionado, 
        colorNoSeleccionado
    } = {
        ancho: "15%",
        tamFuente: 18,
        colorBorde: "fd-azul-c",
        alturaBorde: 30,
        separacion: 120,
        colorSeleccionado: "#000",
        colorNoSeleccionado: "#666"
    
    }) => {
        for(var i = 0; i < cantidad; i++){
            ids[i] = $(".scroll-item:nth-child("+ (i + 1) +")").attr("id")
            
        }


        c.ancho = ancho
        c.tamFuente = tamFuente
        c.colorBorde = colorBorde
        c.alturaBorde = alturaBorde
        c.separacion = separacion
        c.colorSeleccionado = colorSeleccionado
        c.colorNoSeleccionado = colorNoSeleccionado



        $(".lista-scroll").css("width", c.ancho)
        $(".lista-scroll ul li a").css("font-size", c.tamFuente)
        $(".elemento-seleccionado").addClass(c.colorBorde)
        $(".lista-scroll").css("top", c.separacion)


        seleccionarIndice(1)
    } 



    var seleccionarIndice = (indice)=> {
        $(".elemento-seleccionado").remove()
        $(".lista-scroll ul li a").css("color", c.colorNoSeleccionado)
        var elem = $("<p class='elemento-seleccionado " + c.colorBorde + "'></p>")
        elem.css("height", c.alturaBorde)
        $(".lista-scroll ul li:nth-child("+  indice + ") a")
            .before(elem);
        $(".lista-scroll ul li:nth-child("+ indice + ") a").css("color", c.colorSeleccionado)
    }

    var inicializar = () => {
        $(window).scroll( function(e){
            for(var i = 0; i < cantidad; i++){
                if($(this).scrollTop() >= $("#" + ids[i]).offset().top - 200){
                    seleccionarIndice(i + 1)
                }
            }
        })
    }

    var seleccionar = () => {
        $(".lista-scroll ul li").click(function() {
            $(".lista-scroll ul li a").css("color", c.colorNoSeleccionado)
            $(".elemento-seleccionado").remove()
            var elem = $("<p class='elemento-seleccionado " + c.colorBorde + "'></p>")
            elem.css("height", c.alturaBorde)
            $(this).children("a").before(elem);
            $(this).children("a").css("color", c.colorSeleccionado)
        })
    }

    var ScrollSpy = {
        iniciar: (config) => {
            inicializarIds(config)
            inicializar()
            seleccionar()
            
        }
    }
    window.ScrollSpy = ScrollSpy;
})()

export default ScrollSpy;