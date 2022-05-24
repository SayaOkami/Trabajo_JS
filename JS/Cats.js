// Pre-code-------------------------------------------------

let mochilaAbierta = false
let huecomochila = false
let boton = "primero"
let comidacomprada = false

precioComida = 30

$("#cats").hide()
$("#interiorMochila").hide()
$("#boton").hide()
$("#compra").hide()

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

    } else if(huecomochila == true){

    }
    

})

// Abrir inventario

$("#mochila").dblclick(function(){

    if(mochilaAbierta == false){
        $("#interiorMochila").show()
        mochilaAbierta = true;
    }else {
        $("#interiorMochila").hide()
        mochilaAbierta = false
    }

})

// Pasar a la sig pantalla

$("#boton").click(function(){

    if(boton == "primero"){
        $("#texto").text($("#texto").text().replace("Vamos a por algo de comida" , "Compra algo de comida para el camino y vámonos"))

        $("#boton").css({
            "position" : "absolute" ,
            "top" : "1030px"
        })

        $("#compra").show()

        boton = "segundo"

    } else if(boton == "segundo"){
        $("#texto").text($("#texto").text().replace("Compra algo de comida para el camino y vámonos" , "¡Mira que gatitos mas lindos!"))

        $("#compra").hide()

        $("#cats").show()

        comidacomprada = true
    }
    

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

$("#black").droppable({

    drop:function( event, ui){
        if($(ui.draggable).attr("id") == "raton" ){
            $("#black").attr("src" , "img/blackcateat.png")
        }
        else if($(ui.draggable).attr("id") != "raton" ){
            $("#black").attr("src" , "img/blackcatmad.png")
        }

        // return !dropped;
    }

})

$("#brown").droppable({

    drop:function( event, ui){
        if($(ui.draggable).attr("id") == "muslo" ){
            $("#brown").attr("src" , "img/browncateat.png")
        }
        else if($(ui.draggable).attr("id") != "muslo" ){
            $("#brown").attr("src" , "img/browncatmad.png")
        }
    }

})

$("#white").droppable({

    drop:function( event, ui){
        if($(ui.draggable).attr("id") == "pescado" ){
            $("#white").attr("src" , "img/whitecateat.png")
        }
        else if($(ui.draggable).attr("id") != "pescado" ){
            $("#white").attr("src" , "img/whitecatmad.png")
        }
    }

})