if (!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme
toggleBtn.innerText = document.body.classList.contains("dark") ? "Сменить тему на светлую" : "Сменить тему на тёмную"

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark")
    toggleBtn.innerText = document.body.classList.contains("dark") ? "Сменить тему на светлую" : "Сменить тему на тёмную"
    localStorage.theme = document.body.className || "light"
}


