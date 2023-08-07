var editedEle = null;
    const item=document.querySelector("#item");
    const toDoBox=document.querySelector("#to-do-box");

item.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        if(editedEle == null)
        {
            addToDo(this.value);
            this.value="";
        }
        else{
            editedEle.value = this.value;
            this.value = "";
            editedEle.parentElement.classList.toggle("done");
            editedEle = null;
        }
    }
})

const addToDo=(item)=>{
    const inputEle = document.createElement("input");
    inputEle.setAttribute("type", "text");
    inputEle.setAttribute("value", item);
    inputEle.setAttribute("class", "todoItem");
    inputEle.setAttribute("readonly", true);

    const listItem=document.createElement("li");
    listItem.innerHTML=`
    <i class="fas fa-times"></i>
    <i class="edit fa fa-pencil-square-o"></i>` 
    
    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
    });
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    });
    listItem.querySelector(".edit").addEventListener("click",function(){
        var inputField = this.parentElement.querySelector("input");
        const mainInputTag = document.querySelector("#item");
        mainInputTag.value = inputField.value;
        mainInputTag.focus();   

        editedEle = inputField;   
    });
    listItem.appendChild(inputEle);
    toDoBox.appendChild(listItem);
};