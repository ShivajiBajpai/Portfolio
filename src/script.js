//Get navigation menu button
const navigationMenuButton = document.getElementById("navigationMenu");

// Get navigation menu button
const navPanel = document.getElementById("navPanel");

//Open/Close navigation menu on click on navigation button
navigationMenuButton.addEventListener("click", ()=>{
    navPanel.classList.toggle("hidden");

    // set aria-expanded = true if navigation menu is open and false if it is closed
    if(!(navPanel.classList.contains("hidden"))){
        navigationMenuButton.setAttribute("aria-expanded", "true")
    }
    else{
        navigationMenuButton.setAttribute('aria-expanded', "false");
    }
})

//Close menu dropdown if focus moves out of menu dropdown
document.addEventListener('focusin', (e)=>{
    if(!(navPanel.contains(e.target)) && e.target !== navigationMenuButton){
        navPanel.classList.add("hidden");
        navigationMenuButton.setAttribute('aria-expanded', "false");
    }
})