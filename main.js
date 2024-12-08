const todoList = document.querySelector(".todoList");
const add = document.querySelector(".add");
const modal = document.querySelector(".modal");
const inputNote = document.querySelector(".inputNote");
const apply = document.querySelector(".apply");
const cancel = document.querySelector(".cancel");
const themeToggle = document.querySelector(".theme-toggle");
const searchInput = document.querySelector(".search");
const filterCompleted = document.querySelector(".completed");
const filterNotCompleted = document.querySelector(".not-completed");
let darkTheme = false;
modal.style.display = "none";
add.addEventListener("click", () => {
  modal.style.display = "flex";
  inputNote = " ";
});
cancel.addEventListener("click", () => {
  modal.style.display = "none";
});
apply.addEventListener("click", () => {
  function addNote(text) {
    const div = document.createElement("div");
    div.className = "note";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    div.appendChild(checkbox);
    div.appendChild(span);
    todoList.appendChild(div);
  }
  const textNote = inputNote.value;
  addNote(textNote);
  modal.style.display = "none";
});
searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value.toLowerCase();
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    const text = note.querySelector("span").textContent.toLowerCase();
    note.style.display = text.includes(searchValue) ? "flex" : "none";
  });
});

function filterTasks() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    const isChecked = note.querySelector(".checkbox").checked;
    const showCompleted = filterCompleted.checked;
    const showNotCompleted = filterNotCompleted.checked;

    if (
      (isChecked && showCompleted) ||
      (!isChecked && showNotCompleted) ||
      (!showCompleted && !showNotCompleted)
    ) {
      note.style.display = "flex";
    } else {
      note.style.display = "none";
    }
  });
}

filterCompleted.addEventListener("change", filterTasks);
filterNotCompleted.addEventListener("change", filterTasks);

themeToggle.addEventListener("click", () => {
  darkTheme = !darkTheme;
  if (darkTheme) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "rgb(255, 250, 243)";
  }
});
