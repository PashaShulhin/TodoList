const button = document.querySelector('.input-container button');
const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-container input');

button.addEventListener('click', () => {
    const li =document.createElement("li");
    li.className = 'todo-list-item';
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.innerText = input.value;
    list.appendChild(li);
    li.append(deleteBtn);
    input.value = "";
    deleteBtn.addEventListener('click', ()=> {
        list.removeChild(li);
    })
    

});