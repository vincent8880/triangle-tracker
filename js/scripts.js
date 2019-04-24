function triangle(){
    var a = parseInt(document.sides.a.value);
    var b = parseInt(document.sides.b.value);
    var c = parseInt(document.sides.c.value);
    if( c >= b + a || b >= c +  a ||  a
    >= b + c){
        alert("This numbers cannot form a triangle");
    }else if(a===b && b===c){
        alert("This is an equilateral triangle");
    }else if(a===b || b===c || a===c){
        alert("This is an isosceles triangle");
    }else{
        alert("This is a scalene triangle");
    }
        

    
}