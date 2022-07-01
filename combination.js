function combinations(str,n) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}
function comb(palabra,n){
  
    let a=  combinations(palabra);
    for(let i=0;i<a.length;i++){
       if(a[i].length==n){
        $("#respuesta_combinacion").val($("#respuesta_combinacion").val()+"  ["+a[i]+"]")
    } 
    }
}
    