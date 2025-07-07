//Get navigation menu button
const navigationMenuButton = document.getElementById("navigationMenu");

// Get navigation menu button
const navPanel = document.getElementById("navPanel");

// Check if user is using keyboard or mouse or touch

let isKeyboard = false;

window.addEventListener("keydown", () => {
  isKeyboard = true;
});

window.addEventListener("mousedown", () => {
  isKeyboard = false;
});

window.addEventListener("touchstart", () => {
  isKeyboard = false;
});

//Open/Close navigation menu on click on navigation button
navigationMenuButton.addEventListener("click", ()=>{
    navPanel.classList.toggle("hidden");

    
    // set aria-expanded = true if navigation menu is open and false if it is closed
    if(!(navPanel.classList.contains("hidden"))){
        navigationMenuButton.setAttribute("aria-expanded", "true")
        const dropdownelements = navPanel.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');

        //Move focus to the first element of the dropdown if user is using mouse
        if(isKeyboard){
            dropdownelements[0].focus();
        }
        

        //Close the dropdown if user presses 'Shift + Tab' key on first element
        dropdownelements[0].addEventListener('keydown', function handleshifttabout(e){
            if(e.shiftKey && e.key === 'Tab'){
                e.preventDefault();
                navPanel.classList.add("hidden");
                navigationMenuButton.setAttribute('aria-expanded', "false");  
                navigationMenuButton.focus();
                dropdownelements[0].removeEventListener('keydown', handleshifttabout);
            }
        })

        //Get last element
        const lastelement = dropdownelements[dropdownelements.length-1]

        //Close the dropdown if user pressed Tab key on last element
        lastelement.addEventListener('keydown', function handleTabOut(e){
            if(e.key === 'Tab' && !e.shiftKey){
                navPanel.classList.add("hidden");
                navigationMenuButton.setAttribute('aria-expanded', "false");
                
                lastelement.removeEventListener('keydown', handleTabOut);
            }
        })
    }
    else{
        navigationMenuButton.setAttribute('aria-expanded', "false");
    }
})

//Close menu dropdown if focus moves out of menu dropdown
document.addEventListener('focusin', (e)=>{
    if(!(navPanel.contains(e.target))&& e.target !== navigationMenuButton){
        navPanel.classList.add("hidden");
        navigationMenuButton.setAttribute('aria-expanded', "false");
    }
})

//Close menu dropdown if user clicks anywhere on the page except dropdown menu
document.addEventListener('click', (e)=>{
    if(!(navPanel.contains(e.target))&& !navigationMenuButton.contains(e.target)){
        navPanel.classList.add("hidden");
        navigationMenuButton.setAttribute('aria-expanded', "false");
    }
})



//Close menu dropdown if user clicks on links 
const navlinks = document.querySelectorAll(".navLink");

navlinks.forEach((navLink)=> {
    navLink.addEventListener('click', (e)=>{
        navPanel.classList.add("hidden");
        navigationMenuButton.setAttribute('aria-expanded', "false");
    })
} )

