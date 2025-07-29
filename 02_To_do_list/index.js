function add() {
        let n = document.getElementById("task").value;
        let d = document.getElementById("date").value;
        let priority = document.getElementById("prio").value;

        // alert(n+": "+d+": "+priority);

        if (n == "" || d == "" || priority == "Priority") {
            alert("All field are required !");
            return;
        }

        let task_container = document.createElement("div");
        task_container.className = "task";



        task_container.style.borderLeftColor = setPriority(priority);


        let check = document.createElement("input");
        check.className = "status";
        check.type = "checkbox";
        let task_name = document.createElement("div");
        task_name.className = "taskName";
        task_name.textContent = document.getElementById("task").value;

        let task_date = document.createElement("div");
        task_date.className = "dte";
        task_date.textContent = document.getElementById("date").value;



        let edit = document.createElement("button");
        edit.className = "edit";
        edit.textContent = "Edit";
        edit.addEventListener("click", () => {
            // documenent.getElementById("list_task").areaDisable="true";
            document.querySelectorAll(".edit, .del").forEach(btn => btn.disabled = true);
            let taskEdit = document.createElement("div");
            taskEdit.className = "taskEdit";

            let editText = document.createElement("label");
            editText.className = "editText";
            editText.textContent = "Edit Task";

            let edited = document.createElement("input");
            edited.className = "edited";
            edited.value = task_name.textContent;

            let editDate = document.createElement("input");
            editDate.type = "date";
            editDate.className = "editDate";
            editDate.value = task_date.textContent;

            let editPrio = document.createElement("select");
            editPrio.className = "editPrio";

            let op = document.createElement("option");
            op.textContent = "High";
            editPrio.append(op);
            op = document.createElement("option");
            op.textContent = "Medium";
            editPrio.append(op);
            op = document.createElement("option");
            op.textContent = "Low";
            editPrio.append(op);



            let btnsec = document.createElement("div");
            btnsec.className = "btnsec";

            let cancel = document.createElement("button");
            cancel.className = "cancel";
            cancel.textContent = "Cancel"

            let ok = document.createElement("button");
            ok.className = "ok";
            ok.textContent = "Ok";

            taskEdit.appendChild(editText);
            taskEdit.appendChild(edited);
            taskEdit.appendChild(editDate);
            taskEdit.appendChild(editPrio);
            taskEdit.appendChild(btnsec);
            btnsec.appendChild(cancel);
            btnsec.appendChild(ok);
            let body = document.querySelector("body");
            body.append(taskEdit);


            ok.addEventListener("click", () => {
                

                let newTask = edited.value;
                let newDate = editDate.value;
                let newPrio = editPrio.value;
                task_name.textContent = newTask;
                task_date.textContent = newDate;
                if (newPrio != "") {
                    task_container.style.borderLeftColor = setPriority(newPrio);
                }


                taskEdit.remove();
               document.querySelectorAll(".edit, .del").forEach(btn => btn.disabled = false);


            });

            cancel.addEventListener("click",()=>{
                taskEdit.remove();
                document.querySelectorAll(".edit, .del").forEach(btn => btn.disabled = false);
            })
        });
        function setPriority(p) {
            if (p == "High") {
                return "red";
            } else if (p == "Medium") {
                return "green";
            } else if (p == "Low") {
                return "yellow";
            } else {
                alert("Please select the priority of the task");
            }

        }


        let del_btn = document.createElement("button");
        del_btn.className = "del";
        del_btn.textContent = "Delete";

        task_container.appendChild(check);
        task_container.appendChild(task_name);
        task_container.appendChild(task_date);
        task_container.appendChild(edit);
        task_container.appendChild(del_btn);


        document.getElementById("list_task").appendChild(task_container);
        document.getElementById("task").value = "";
        document.getElementById("date").value = "";
        document.getElementById("prio").value = "Priority";


        del_btn.addEventListener("click", function () {
            task_container.remove();
        })



    }
