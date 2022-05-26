// Pre-code-------------------------------------------------

let mochilaAbierta = false
let huecomochila = false
let boton = "primero"
let comidacomprada = false
let gatos = 0
let pelea = 1
let vida = 3

precioComida = 30

$("#cats").hide()
$("#interiorMochila").hide()
$("#boton").hide()
$("#compra").hide()
$("#equipo").hide()
$("#ganaste").hide()
$("#perdiste").hide()
$("#peleas").hide()
$("#pausa").hide()
$("#final").hide()
$("#pista").hide()


// Funciones-------------------------------------------------

// Coger mochila
$("#mochila").click(function(){

    if(huecomochila == false){
        $("#espaciomochila").append($("#mochila"))
    $("#mochila").css({
                    "margin-top" : "0",
                    "height" : "200px",
                    "width" : "150px" })

    $("#texto").text($("#texto").text().replace("¡No olvides la mochila antes de irte!" , "Vamos a por algo de comida"))

    $("#boton").show()
    huecomochila = true

    // Abrir inventario
    } else if(huecomochila == true){

        if(mochilaAbierta == false){
            $("#interiorMochila").show()
            mochilaAbierta = true;
        }else {
            $("#interiorMochila").hide()
            mochilaAbierta = false
        }
    }
    

})

$("#cerrar").click(function(){
    $("#interiorMochila").hide()
    mochilaAbierta = true;
})

// Comprar y equipar comida

$(".comida").click(function(){

    if(comidacomprada == false){
        if( parseInt($("#dinero").text()) < precioComida ){
        alert( "No puedes permitirte este producto" )
        } 
        else if ( parseInt($("#dinero").text()) >= precioComida){
        $("#dinero").text( parseInt($("#dinero").text()) - precioComida + "$" )
        $(this).appendTo($("#interiorMochila"))
        }
    } else if(comidacomprada == true){
        $(this).appendTo($("#equipo"))
        $(this).css({
            "height" : "90px"
        })

        $(".comida").draggable({ revert: true })

    }

})

// Cambio de gato negro segun comida

$("#black").droppable({

    drop:function( event, ui){
        if($(ui.draggable).attr("id") == "raton" ){
            $("#black").attr("src" , "img/blackcateat.png")
            $("#pista").text("YASSSSS")
        }
        else if($(ui.draggable).attr("id") != "raton" ){
            $("#black").attr("src" , "img/blackcatmad.png")
            $("#pista").show()
            $("#pista").text("IUG ¡Dónde está mi Jerry?!")

        }

    }

})

// Cambio de gato marron segun comida

$("#brown").droppable({

    drop:function( event, ui){
        if($(ui.draggable).attr("id") == "muslo" ){
            $("#brown").attr("src" , "img/browncateat.png")
            $("#pista").text("Así sí, ñam ñam")
        }
        else if($(ui.draggable).attr("id") != "muslo" ){
            $("#brown").attr("src" , "img/browncatmad.png")
            $("#pista").show()
            $("#pista").text("Puag , yo soy más de granja :/")
        }
    }

})

// Cambio de gato blanco segun comida

$("#white").droppable({

    drop:function( event, ui){
        if($(ui.draggable).attr("id") == "pescado" ){
            $("#white").attr("src" , "img/whitecateat.png")
            $("#pista").text("WIII, ¡muchas gracias!")
        }
        else if($(ui.draggable).attr("id") != "pescado" ){
            $("#white").attr("src" , "img/whitecatmad.png")
            $("#pista").show()
            $("#pista").text("Nooo! Algo más marino :(")
        }
    }

})

// Peleas

    $("#fight").click(function(){

        if(pelea == 1){
            // Primera pelea
            if(gatos >= 1){
                $("#ganaste").show()

                $("#guia").text("Parece que un gato se unió a la pelea y conseguimos vencer, ¡Muchas gracias michi!")
            } else {
                $("#perdiste").show()
                $("#heart1").hide()

                vida--
                
                $("#guia").text("Esperemos que no fuera igual de venenosa que de fuerte :(")
            }

            $("#boton").show()
            $("#fight").hide()

            pelea = 2

            $("#texto").text($("#texto").text().replace("¡Oh no, es una serpiente!" , "Sigamos hacia delante"))
        
            
        } else if(pelea == 2){
            // Segunda pelea

            if(gatos >= 2){
                $("#ganaste").show()
                $("#ganaste").text(" ¡Victoria! Vaya gatitos peleones jsjsjs")

                $("#guia").text("¡Mira! Gracias a esos dos gatos que te ayudaron hemos conseguido vencerle :)")
            } else {
                $("#perdiste").show()
                $("#heart2").hide()

                vida--

                $("#perdiste").text("Has perdido, pero este Aguila te ha dejado bastante tocado...")

                $("#guia").text("No te preocupes, ya queda poco para llegar, intentemos no hacernos más daño :)")
            }

            $("#boton").show()
            $("#fight").hide()

            pelea = 3

            $("#texto").text($("#texto").text().replace("¿Un Águila?" , "Vamonos... Espera..."))


        
        } else if(pelea == 3){
            // Tercera pelea

            if(gatos >= 3){
                $("#ganaste").show()
                $("#ganaste").text("Bien hecho! Vámonos a casa!")

                $("#guia").text("¡Se han unido los tres gatos! ¡Os amamos michis! No hubieramos ganado sin vosotros ^^")
            
            } else {

                vida--
                $("#perdiste").show()
                $("#perdiste").text("Has perdido. Podrás llegar a casa?")
                $("#heart3").hide()
                $("#guia").text( "OH NO ese lobo era demasiado fuerte, ¿Estas Bien?" )
                
            }

            $("#boton").show()
            $("#fight").hide()

            $("#texto").css({"opacity" : "0"})

            
            $("#boton").css({
                "top" : "150px" ,
                "width" : "400px"
            })
        }

    })

// Pasar a la sig pantalla

$("#boton").click(function(){

    if(boton == "primero"){
        $("#texto").text("Compra algo de comida para el camino y vámonos")

        $("#boton").css({
            "position" : "absolute" ,
            "bottom" : "10px"
        })

        $("#compra").show()

        boton = "segundo"

    // segundo nivel
    } else if(boton == "segundo"){

        $("#boton").css({
            "bottom" : "150px"
        })

        $("#texto").text("¡Mira que gatitos mas lindos!")

        $("#compra").hide()

        $("#equipo").show()

        $("#cats").show()

        comidacomprada = true

        boton = "tercero"

    // primer boss
    } else if(boton == "tercero"){

        $("#interiorMochila").hide()

        $("#mochila").hide()

        $("#texto").text("¡Oh no, es una serpiente!")

        $(".comida").hide()

        $("#cats").hide()

            // Detectar cuántos gatos tengo

            if($("#black").attr("src") == "img/blackcateat.png"){
                gatos++ 
                $("#black").addClass("catsin")
                $("#black").appendTo($("#espacio"))

            }
            if($("#brown").attr("src") == "img/browncateat.png"){
                gatos++
                $("#brown").addClass("catsin")
                $("#brown").appendTo($("#espacio"))
            }
            if($("#white").attr("src") == "img/whitecateat.png"){
                gatos++
                $("#white").addClass("catsin")
                $("#white").appendTo($("#espacio"))
            }

            $("#peleas").show()

            $("#boton").css({
                "bottom" : "150px",
                "z-index" : "30"
            })

        $("#boton").text($("#boton").text().replace("Let's Go!" , "Sigamos"))

        $("#boton").hide()

        boton = "cuarto"

    // intermission
    } else if( boton == "cuarto" ){

        $("#ganaste").hide()
        $("#perdiste").hide()
        $("#boss").hide()
        $("#boss").attr("src" , "img/aguila.png")
        $("#guia").hide()

        $("#pausa").show()
        $("#texto").css({"opacity" : "0"})

        $("#boton").text($("#boton").text().replace("Sigamos" , "Mirar allí"))

        boton = "quinto"

    // Segundo Boss
    } else if( boton == "quinto") {

        $("#texto").text($("#texto").text().replace("Sigamos hacia delante" , "¿Un Águila?" ))

        $("#pausa").hide()
        $("#texto").css({"opacity" : "1"})
        $("#boss").show()
        $("#guia").show()

        $("#guia").text("Parece que este Águila es muy agresiva, espero que podamos vencerla...")

        $("#boss").css({ "height" : "400px", "margin-top" : "200px" })

        $("#fight").show()

        $("#boton").hide()
        $("#boton").text("¿Qué?")

        boton = "sexto"

    // tercer boss
    } else if( boton == "sexto" ){

        $("#ganaste").hide()
        $("#perdiste").hide()
        $("#texto").text("¡¿Otro?!")
        $("#boss").attr("src" , "img/wolf.png")

        $("#guia").text("Por favor, ten mucho cuidado, ¡debemos llegar a casa!")
    
        $("#fight").show()

        $("#boton").hide()
        $("#boton").text("Finalizar aventura")

        boton = "septimo"

// Pantalla final
    } else if( boton == "septimo" ){

        $("#mochila").hide()
        $("#peleas").hide()
        $("#equipo").hide()
        $("#final").show()
        $("#casa").hide()
        $("#boton").hide()
        $("#dead").hide()

        $("#texto").css({"margin-top" : "60px"})

        // Final
        if( vida == 3 ){
            $("#lost").css({ "background-color" : "rgb(194, 94, 252)"})
            $("#lost").text("¡Perfecto! Has conseguido llegar a casa sano y salvo, además ahora tienes tres gatitos monos , es momento de celebrarlo ;3")
            $("body").css({ "background-color" : "rgb(255, 198, 239)"})

            $("#casa").show()

        } else if(vida == 2) {
            $("#lost").css({
                "background-color" : "rgb(217, 121, 255)" ,
                "font-size" : "55px" })
            $("#lost").text("No está mal, has llegado a casa con un brazo menos pero te curarás dentro de poco, ademas tienes dos gatitos para hacerte compañía! :)")
            $("body").css({ "background-color" : "rgb(200, 255, 198)"})

            $("#casa").show()
            $("#pive").attr("src" , "img/arm.png")

        } else if(vida == 1) {
            $("#lost").css({
                "background-color" : "rgb(255, 166, 93)" ,
                "font-size" : "55px" })

            $("#lost").text("Bueno, al menos has llegado a casa, ahora solo tendras que rehabilitarte por unos cuantos meses :/, pero... mira que mono el gatito <3")
            $("body").css({ "background-color" : "rgb(255, 224, 198)"})

            $("#casa").show()
            $("#pive").attr("src" , "img/wheelchair.png")

        }else if(vida == 0) {

            $("#dead").show()

        }
    }
    

})