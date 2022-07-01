let combinacion = document.getElementById("valor_combinacion");
let respuesta = document.getElementById("respuesta_combinacion");

$("#r-c").click(function(){
    var palabra = $("#valor_combinacion").val();
    var n = $("#valor_combinacion_n").val();
    if(palabra==""){
        swal("Información!", "La palabra no puede estar vacía!", "warning");
    }else{
        if(palabra.length>=n){
            $('#r-c').toggleClass("disabled");
            comb(palabra,n);
        }else{
            swal("Información!", "N debe ser menor o igual que el tamaño de la cadena!", "warning");
        }
    }
})  
$("#limpiar_c").click(function(){
    $('#r-c').removeClass("disabled");
    $("#respuesta_combinacion").val("")
})  

$("#r-p").click(function(){
  
    var palabra = $("#valor_permutacion").val();
    if(palabra==""){
        swal("Información!", "La palabra no puede estar vacía!", "warning");
    }else{
        $('#r-p').toggleClass("disabled");
        var palabra = palabra.split(" ");
        let a = allPermutations(palabra);
        for(let i=0;i<a.length;i++){
            if(i==0){
                $("#respuesta_permutacion").val($("#respuesta_permutacion").val()+"["+a[i]+"]  ");
            }
            else{
            $("#respuesta_permutacion").val($("#respuesta_permutacion").val()+"   ["+a[i]+"]");
    
            }
        
    }
    }
    
})  
$("#limpiar_p").click(function(){
    $('#r-p').removeClass("disabled");
    $("#respuesta_permutacion").val("")
})  

