let buttons = document.querySelectorAll("button");
    let a="";
    let as="";
    let b=document.getElementById("ex");
    let res=0;
    let e=document.getElementById("answer");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        // your logic here
        let d=button.innerHTML;
        if(d=="DEL")
    {
        a=a.slice(0,-1);
        as=as.slice(0,-1);
        b.innerHTML=as;
    }
        if(d=="x")
    {
        a+="*";
        as+=d
        b.innerHTML=as;  
    }
        if(d!="AC" && d!="=" && d!="x" && d!="DEL")
    {
        a+=d;
        as+=d;
        b.innerHTML=as;        
    }
    if(d=="AC")
    {
        a=""; 
        as="";
        b.innerHTML="0";  
        e.innerHTML="Answer";
           
    }    
    });
});

document.getElementById("ans").addEventListener("click",function(){
   try{
    res="="+eval(a);
   }catch{
    res="Error";
   }
e.innerHTML=res;
    
})

document.addEventListener("keydown", function(event) {
    let f = event.key;

    
    if (f === "*") {
        a += "*";   
        as += "x";   
        b.innerHTML = as;
    }


    else if (f !== "Enter" && f !== "Backspace") {
        a += f;
        as += f;
        b.innerHTML = as;
    }

  
    else if (f === "Enter") {
        try {
            res = "=" + eval(a);
        } catch {
            res = "Error";
        }
        e.innerHTML = res;
    }

 
    else if (f === "Backspace") {
        a = a.slice(0, -1);
        as = as.slice(0, -1);
        b.innerHTML = as;
    }
});
