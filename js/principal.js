$(document).ready(function(){
    
    $(".listaLado").hide();

    $(".envioMedianoTexto").hide();

    $(".envioGrandeTexto").hide();

    $(".envioPequeñoTexto").hide();
    
    $(".listasProductos").mouseenter(function(){
        $(".listaLado").show(1000);
        $(".imagen-desp").css({
        	"margin-left" : "50px"
        });
    });

    $(".listasProductos").mouseleave(function(){
        $(".listaLado").hide(1000);
    });

    $(".envioGrande").click(function(){
        $(".envioGrandeTexto").fadeToggle();
    });

    $(".envioMediano").click(function(){
        $(".envioMedianoTexto").fadeToggle();
    });

    $(".envioPequeño").click(function(){
        $(".envioPequeñoTexto").fadeToggle();
    });

    var Productos = [
        
            {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo mesada",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena1.webp",
             'Descripcion' : 'Alacena 1.60 Mts. Color blanco',
             'Cuotas' : 'Hasta 12 cuotas sin interes',
             'llegada': 'llega mañana'
             },
             {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo mesada",
             'Marca' : "Mosconi",
             'Precio' : 12000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena2.jpg",
             'Descripcion' : 'Alacena 1.60 Mts. Color marron',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },
             {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo mesada",
             'Marca' : "Mosconi",
             'Precio' : 6000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena3.jpg",
             'Descripcion' : 'Alacena 40 Cts. Color blanco',
             'Cuotas' : 'hasta 12 cuotas sin interes',
             'llegada': 'llega el lunes'
             },
             {
             'Categoria' : 'Cocina',
             'Nombre' : "Bajo mesada",
             'Marca' : "Mosconi",
             'Precio' : 9000,
             'Imagen' : "../../../img/Cocina/Alacena/alacena4.jpg",
             'Descripcion' : 'Alacena 1.20 Mts. Color blanco',
             'Cuotas' : 'hasta 6 cuotas sin interes',
             'llegada': 'llega mañana'
             }
    ]

    
    
    
    
    for(x of Productos){
        
        if(x.Nombre == "Bajo mesada" && document.getElementById("productosMesada")  != null){
            carga(x, document.getElementById("productosMesada"));
            $("#productosMesada").children().addClass("divImgCocina m-3 col-sm bordeTarjeta");
            $(".divImgCocina").children("img").addClass("img-fluid mt-3 border bordeTarjeta imgCocina");
            $(".imgCocina").next().addClass("parrafoPrecio mt-1");
            $(".parrafoPrecio").next().addClass("parrafoDescripcion");
            $(".parrafoDescripcion").next().addClass("parrafoLLegada");
            $(".parrafoLLegada").next().addClass("parrafoCuotas mb-1");    
        }
        if(x.Nombre == "Alacena" && document.getElementById("productosAlacena")  != null){
            carga(x, document.getElementById("productosAlacena"));
            $("#productosAlacena").children().addClass("divImgCocina m-3 col-sm bordeTarjeta");
            $(".divImgCocina").children("img").addClass("img-fluid mt-3 border bordeTarjeta imgCocina");
            $(".imgCocina").next().addClass("parrafoPrecio mt-1");
            $(".parrafoPrecio").next().addClass("parrafoDescripcion");
            $(".parrafoDescripcion").next().addClass("parrafoLLegada");
            $(".parrafoLLegada").next().addClass("parrafoCuotas mb-1");   
        }
    }

    function carga(x, prod){
            b = document.createElement("b");
            b = "$ " + x.Precio;
            
            p1 = document.createElement("p");
            p1 =  x.Descripcion;
            
            p2 = document.createElement("p");
            p2 =  x.llegada;

            p3 = document.createElement("p");
            p3 =  x.Cuotas;
            
            
            divBold = document.createElement("div");
            divParrafo1 = document.createElement("div");
            divParrafo2 = document.createElement("div");
            divParrafo3 = document.createElement("div");
            
            divBold.append(b);
            divParrafo1.append(p1);
            divParrafo2.append(p2);
            divParrafo3.append(p3);
            
            img = document.createElement("img");
            
            div = document.createElement("div");
            div.append(img);
            img.src = x.Imagen;
            
            

            src = document.getElementById(prod.id);
            
            m = src.appendChild(div);
            m.appendChild(divBold);
            m.appendChild(divParrafo1);
            m.appendChild(divParrafo2);
            m.appendChild(divParrafo3);

            
    }

    
    
    
    

});






function opinion(){
    let opinion = document.getElementById('inOpinion').value;
    let nombre = document.getElementById('inNombre').value;
    if (opinion != "" && nombre != "") {
        const b = document.createElement("b");
        const p = document.createElement("p");
        const nueva = document.createTextNode(opinion);
        const nu = document.createTextNode(nombre);
        b.appendChild(nu);
        p.appendChild(nueva);
        const element = document.getElementById("parrafoOpinion");
        element.appendChild(b);
        element.appendChild(p);
          
    }else{
        alert("No ingreso los valores requeridos");
    }

}




