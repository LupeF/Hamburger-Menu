const hamburgerContainer = document.getElementById('hamburger-cont');
const xContainer = document.getElementById('close-cont');
const hamburgerMenu = document.getElementById('hamburger-menu');
const listItems = document.getElementById('list-item-cont');
hamburgerMenu.addEventListener('click', (e)=>{
    if(xContainer.style.zIndex !== -1){
        listItems.style.transform = 'translateY(0)';
        listItems.style.opacity = 1;
        xContainer.style.zIndex = 2;

    }
    
})
xContainer.addEventListener('click', (e)=>{
    xContainer.style.zIndex = -1;
    listItems.style.transform = 'translateY(-100%)';
    // listItems.style.opacity = -1;
})