const tabs = document.querySelectorAll('.training_btn');
const tabsTitle = document.querySelectorAll('.training_content')


const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
        tab.classList.remove('active')
        tabsTitle[index].classList.remove('active')

        if (index === indexClickedTab){
            tab.classList.add('active')
            tabsTitle[index].classList.add('active')
        }
    })
}

tabs.forEach((tab,index)=> {
    tab.addEventListener('click', () =>{
        changeActiveTabs(index);
    })

});

