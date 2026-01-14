// QUERYSELECTOR - can access tag, id and even class, the selector used in css is used here
const additem = () => {
    //STEP 1 : Read user input from textbox
    // let userinput = userinput = document.querySelector("#inp").testContent it's not applicable here, if it's LABEL then textcontent can be used but not for input
    let userinput = document.querySelector("#inp").value
    // console.log(userinput);
    // Step 2 : Create list item
    let listitem = document.createElement("li")
    // console.log(listitem)
    listitem.textContent=userinput
    // console.log(listitem)
    // Step 3 : Target the list
    let list = document.querySelector("#todo")
    // Step 4 : Add item to the list
    list.appendChild(listitem)
    // insert before append appendChild
}
let btn = document.querySelector("#btn") // todo.js:5 Uncaught ReferenceError: Cannot access 'userinput' before initialization
//document.getElementId("btn")
btn.addEventListener("click",additem) // todo.js:5 Uncaught ReferenceError: Cannot access 'additem' before initialization

// NEXT TASK : To cross out the items in the todo list