function addTask(button) {
    const column = button.parentElement.parentElement;
    const input = column.querySelector("input");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">❌</button>
    `;

    column.querySelector("ul").appendChild(li);
    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function toggleTask(span) {
    span.parentElement.classList.toggle("completed");
}