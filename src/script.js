const navigationMenuButton = document.getElementById("navigationMenu");


const navPanel = document.getElementById("navPanel");
console.log(navigationMenuButton);
navigationMenuButton.addEventListener("click", ()=>{
    const isExpanded = navigationMenuButton.getAttribute('aria-expanded') === 'true';
    navigationMenuButton.setAttribute('aria-expanded', !isExpanded);
    
    navPanel.classList.toggle("hidden");
    if(!isExpanded){
        const firstfocusableelement = document.querySelector('a[href="#aboutMe"]');
        if(firstfocusableelement){
            firstfocusableelement.focus();
        }
    }
})


document.addEventListener('focusin', (e)=>{
    if(!(navPanel.contains(e.target)) && e.target !== navigationMenuButton){
        navPanel.classList.add("hidden");
    }
})