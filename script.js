function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todoinput");
    // console.log(text.value);
    db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })

    text.value = "";
}

function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) =>{
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) =>{
                items.push({
                    id: doc.id,
                    ...doc.data()
                });
        })
        // console.log(items)
        generateItems(items);
    })
}

function generateItems(items){
    let itemHTMl = "";

    items.forEach((item) => {
        // console.log(item);
        itemHTMl += `
        <div class="todo-item">
            <div class="check">
              <div data-id="${item.id}" class="check-mark  ${item.status == "completed" && "checked" ? "checked" : ""}">
                <img src="/Images/icon-check.svg" alt="" srcset="" />
              </div>
            </div>
            <div class="todo-text ${item.status == "completed" && "checked" ? "checked" : ""}">
            ${item.text}
            </div>
          </div>
        `
    })
    document.querySelector(".todo-items").innerHTML = itemHTMl;
    createEventListeners();
}

function createEventListeners(){
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark")
    todoCheckMarks.forEach((checkMark) =>{
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id);
        })
    })

}

function markCompleted(id){
    // console.log(id);
    let item = db.collection("todo-items").doc(id);

    item.get().then(function(doc){
        if(doc.exists){
            let status = doc.data().status;
            if(status == "active"){
                item.update({
                    status: "completed"
                })
            }
            else if(status == "completed"){
                item.update({
                    status: "active"
                })
            }
        }

    })
}

getItems();


