const navigationMenuButton = document.getElementById("navigationMenu");


const navPanel = document.getElementById("navPanel");
console.log(navigationMenuButton);
navigationMenuButton.addEventListener("click", ()=>{
    const isExpanded = navigationMenuButton.getAttribute('aria-expanded') === 'true';
    navigationMenuButton.setAttribute('aria-expanded', !isExpanded);

    navPanel.classList.toggle("hidden");
})