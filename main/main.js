var c = 0
function addItem() {
    var input,item,text,p,result;
    input = document.getElementById("input").value;
    if (input == "") {
        alert("plz add a task")
    }
        else{
           p= document.createElement("p");
           item= document.createElement("span");
           text= document.createTextNode(input);

           item.appendChild(text);
           p.appendChild(item);

           result= document.getElementById("task");
           result.appendChild(p);

           var remove= document.createElement("span");
           var rem = document.createTextNode("X");
           remove.appendChild(rem);
           p.appendChild(remove);

           p.addEventListener("click", drowLine);

           function drowLine(){
               item.style.textDecoration = "line-through";
           }
           
           remove.addEventListener("click", remo);

           function remo(){
               remove.parentNode.remove();
            }

        }
}