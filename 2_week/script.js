    var taskNameInput = document.getElementById("taskInput");
    var buttonEl = document.getElementById("button");
    var mar = 20;
    var i = 0;
    var newTask = [];
    var checkboxes = [];
    var buttons = [];

   var onButtonClick = function(){

    if(taskNameInput.value != ''){

        //creating new task
        newTask[i] = document.createElement('div');
        newTask[i].textContent = taskNameInput.value;
        newTask[i].style.marginTop = mar + "px";
        newTask[i].className = "newtasks";
        newTask[i].id = "i" + i;
        document.getElementById("tasks").appendChild(newTask[i]);

        //clearing input
        document.getElementById("taskInput").value = ""; 
      
        //adding ckeckbox
        checkboxes[i] = document.createElement('input');
        checkboxes[i].setAttribute("type", "checkbox");
        checkboxes[i].setAttribute("onChange", "newTask[0].style.textDecoration = 'line-through'");
        checkboxes[i].className = "checkboxes";
        
        document.getElementById("tasks").appendChild(checkboxes[i]);

        //adding delete button
        buttons[i] = document.createElement('button');
        buttons[i].textContent = "X";
        buttons[i].className = "buttons";
        document.getElementById("tasks").appendChild(buttons[i]);

        console.log(newTask[i]);
        i++;
    }
   };
   buttonEl.addEventListener("click", onButtonClick);



  
//    var checkbox = document.querySelector(".checkboxes");
//    checkbox.array.addEventListener('change', function(e){
//         alert("asdasddddddd");
//         if(e.target.className === 'checkboxes'){
//             alert("asdasd");
//             newTask.style.display = "none";
//         }
//    });




//    var checkbox = document.getElementsByClassName("checkboxes");

//    checkbox.addEventListener( 'change', function() {
// alert("asdasd");
//     if(this.checked) {
//            alert("asdasd");
//        } else {
//        }
//    });

//    var onCheck = function(){
       
//     alert("true!!");
//     for(var j = 0 ; j < i; j++){

//         if(checkboxes[j].checked){
//             newTask[j].style.textDecoration = overline;
//         }
//     }


//    }

   
//    checkboxes.addEventListener('change', onCheck);