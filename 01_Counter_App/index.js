let count=0;
let add=document.getElementById("inc");
let sub=document.getElementById("dec");
let re=document.getElementById("res");
let tt=document.getElementById("c");
/* first way
add.addEventListener("click",function()
{
    count++;
    tt.innerHTML=count
})

sub.addEventListener("click",function()
{
    count--;
    document.getElementById("c").innerHTML=count
    
})

re.addEventListener("click",function()
{
    count=0;
    document.getElementById("c").innerHTML=count;
})
*/

function vadhva()
{
    count++;
    document.getElementById("c").innerHTML=count;
    if(count>0)
    {
        document.getElementById("c").style.color="green";
    }else if(count==0)
    {
        document.getElementById("c").style.color="black";
    }
}
function kami()
{
    count--;
    document.getElementById("c").innerHTML=count;
    if(count<0)
    {
        document.getElementById("c").style.color="red";
    }else if(count==0)
    {
        document.getElementById("c").style.color="black";
    }
}
function back()
{
    count=0;
    document.getElementById("c").innerHTML=count;
    document.getElementById("c").style.color="black";
}

