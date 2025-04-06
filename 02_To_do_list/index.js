function add()
{
    let a=document.getElementById("todoInput").value;
    let c=document.getElementById("todoList");
    if(a=="")
    {
        alert("Please fill that input field !");
    }else{
        let b=document.createElement("li");
        b.style.listStyleType="none";
        b.innerHTML="✅"+a;
        c.appendChild(b);
        document.getElementById("todoInput").value="";

        let btn=document.createElement('button');
        btn.innerHTML="Done";
        c.appendChild(btn);
        btn.addEventListener("click",function()
    {
        b.remove();
        btn.remove();
    })
    }
}


let d=document.getElementById("todoInput")
    
    d.addEventListener("keyup",function(event){
        
        if(event.key=="Enter")
        {
           add();
        }

    })
