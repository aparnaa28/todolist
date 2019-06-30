let inputBox=document.getElementById("inputBox");
let add=document.getElementById("add");
let remove=document.getElementById("delete");
let list=document.getElementById("list");

var counter=0;

function addtolist()
{
    let value=inputBox.value;
    item=document.createElement('li');
    item.innerText+=value;
    list.appendChild(item);
    counter++;

    action=1;
    item.onclick=function(event){
        if(action==1){
        event.target.style="text-decoration:line-through";
        action=2;
        }
        else
        {
            event.target.style="text-decoration:none";
            action=1;
        }
    }
      
}

function removeitem()
{
   elements=list.children;
   let i=0;
   while(i<elements.length)
   {
       if(elements[i].style.textDecoration=="line-through"){
       elements[i].remove();
       }
       else{
           i++;
       }
   }
     
}










