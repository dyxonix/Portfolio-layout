isDarkTheme = () => {
    return document.body.classList.contains("dark");
}


if (localStorage.getItem("darkTheme")==="true") {
   document.body.classList.add('dark');
    
};

changeActiveText = () => { 
   return isDarkTheme() ? "Сменить тему на светлую" : "Сменить тему на тёмную";
    
}

toggleBtn.innerHTML = changeActiveText();

toggleBtn.onclick = () => {

    document.body.classList.toggle("dark")
    toggleBtn.innerText = changeActiveText();
    localStorage.setItem('darkTheme', isDarkTheme());
}

