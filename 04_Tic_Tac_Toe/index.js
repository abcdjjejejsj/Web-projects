let a = "X";
    let b = "O";
    let res = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let d = 1;
    let r = 2;
    let flag = 0;
    let count = 0;
    let c1="rgb(2, 255, 44)";
    let c2="rgb(2, 251, 255)";
    let p1p=0;
    let p2p=0;
    let pl1=document.getElementById("p1");
    let pl2=document.getElementById("p2");
    let win;
    let popup;
    let bpop;
    let line1;
    let line2;
    let line3;
    let boxes = document.querySelectorAll("#main>div"); // 
    function swap(x, y) {
        let temp = x;
        x = y;
        y = temp;
        a = x;
        b = y;
        let s = d;
        d = r;
        r = s;
        //color swapping
        let tc=c1;
        c1=c2;
        c2=tc;
    }

    boxes.forEach(function (div, index) {
        div.addEventListener("click", function () {
            if (div.children.length == 0) {
               
                if(document.getElementById("pop"))
                {
                    div.innerHTML="";
                }else{
                    if (div.innerHTML != "X" && div.innerHTML != "O") {
                        div.innerHTML = a;
                        res[index] = d;
                        div.style.color=c1;
                        count++;
                        swap(a, b);
                        if (flag != 1) {
                            setTimeout(result, 500);
                        }
    
                    }
                }



            }
        });
    });
    function result() {
        if (flag == 1) {
            return;
        }

        line1=document.createElement("div");
        line2=document.createElement("div");
        line3=document.createElement("div");
        //for horizontal
        for (let i = 0; i < res.length; i += 3) {
            if (res[i] == res[i + 1]) {
                if (res[i + 1] == res[i + 2]) {
                    line1.classList="lineh";
                    line2.classList="lineh";
                    line3.classList="lineh";
                    if(i===0)
                    {
                        document.getElementById("one").appendChild(line1);
                        document.getElementById("two").appendChild(line2);
                        document.getElementById("three").appendChild(line3);
                    }else if(i===3)
                    {
                        document.getElementById("four").appendChild(line1);
                        document.getElementById("five").appendChild(line2);
                        document.getElementById("six").appendChild(line3);
                    }else if(i===6)
                    {
                        document.getElementById("seven").appendChild(line1);
                        document.getElementById("eight").appendChild(line2);
                        document.getElementById("nine").appendChild(line3);
                    }
                    
                    if (res[i] == "1") {
                        
                        flag = 1;
                        p1p++;
                        pl1.innerHTML=p1p;
                        win=1;
                    } else {
                        
                        flag = 1;
                        p2p++;
                        pl2.innerHTML=p2p;
                        win=2
                    }
                }
            }
        }

        //for vertical
        if (flag != 1) {
            for (let i = 0; i < 3; i++) {
                if (res[i] == res[i + 3]) {
                    if (res[i + 3] == res[i + 6]) {
                        line1.classList="linev";
                        line2.classList="linev";
                        line3.classList="linev";
                    if(i===0)
                    {
                        document.getElementById("one").appendChild(line1);
                        document.getElementById("four").appendChild(line2);
                        document.getElementById("seven").appendChild(line3);
                    }else if(i===1)
                    {
                        document.getElementById("two").appendChild(line1);
                        document.getElementById("five").appendChild(line2);
                        document.getElementById("eight").appendChild(line3);
                    }else if(i===2)
                    {
                        document.getElementById("three").appendChild(line1);
                        document.getElementById("six").appendChild(line2);
                        document.getElementById("nine").appendChild(line3);
                    }
                        flag=1;
                        if (res[i] == "1") {
                        
                        flag = 1;
                        p1p++;
                        pl1.innerHTML=p1p;
                        win=1;
                    } else {
                        win=2;
                        flag = 1;
                        p2p++;
                        pl2.innerHTML=p2p;
                    }
                    }
                }
            }
        }


        //for diagonal
        if (flag != 1) {
            if (res[0] == res[4]) {
                if (res[4] == res[8]) {
                    flag = 1;
                        line1.classList="linetirpi";
                        line2.classList="linetirpi";
                        line3.classList="linetirpi";
                    
                        document.getElementById("one").appendChild(line1);
                        document.getElementById("five").appendChild(line2);
                        document.getElementById("nine").appendChild(line3);

                    if (res[4] == "1") {
                        win=1;
                        flag = 1;
                        p1p++;
                        pl1.innerHTML=p1p;
                    } else {
                        win=2;
                        flag = 1;
                        p2p++;
                        pl2.innerHTML=p2p;
                    }
                }
            }
        }
        if (flag != 1) {
            if (res[2] == res[4]) {
                if (res[4] == res[6]) {
                    flag = 1;
                        line1.classList="linetirpi2";
                        line2.classList="linetirpi2";
                        line3.classList="linetirpi2";
                    
                        document.getElementById("three").appendChild(line1);
                        document.getElementById("five").appendChild(line2);
                        document.getElementById("seven").appendChild(line3);

                    if (res[4] == "1") {
                        win=1;
                        flag = 1;
                        p1p++;
                        pl1.innerHTML=p1p;
                    } else {
                        win=2;
                        flag = 1;
                        p2p++;
                        pl2.innerHTML=p2p;
                    }
                }
            }
        }
        if(win==1 || win==2 || count==9)
        {
            popup=document.createElement("div");
            bpop=document.createElement("button");
            popup.id="pop";
            bpop.id="ok";
            document.querySelector("h1").insertAdjacentElement("afterend", popup);
        }
       
        if(flag==0 && count==9)
        {
            popup.textContent="Game Draw !";
            flag=1;
        }else{
            if(win==1)
            {
                popup.textContent="🥳 Player-1 Wins ! 🥳";
            }else{
                popup.textContent="🥳 Player-2 Wins ! 🥳";
            }
        }
        document.getElementById("pop").appendChild(bpop);
        bpop.innerText="OK";
        bpop.addEventListener("click", next);
    }

    function reset()
    {
        a = "X";
     b = "O";
    res = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
     d = 1;
     r=2;
    flag = 0;
    count = 0;
    c1="rgb(2, 255, 44)";
    c2="rgb(2, 251, 255)";
    p1p=0;
    p2p=0;
    win=0;
    pl1.innerHTML="0";
    pl2.innerHTML="0";
    boxes.forEach(function (div, index) {
      div.innerHTML="";   
    })
    }

    function next()
    {
        boxes.forEach(function (div, index) {
      div.innerHTML="";   
    })
    count=0;
    res = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    flag=0;
    document.getElementById("pop").remove();
    
    win=0;
    }
