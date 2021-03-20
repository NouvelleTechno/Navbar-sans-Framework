window.onload = () => {
    const navButton = document.querySelector("#ma-navbar .nav-button");

    navButton.addEventListener("click", function(event){
        // On empêche le "click" de se propager au document
        event.stopPropagation();
        // Ajoute la classe show si le ul ne l'a pas et la retire dans le cas contraire
        this.nextElementSibling.classList.toggle("show");
    });

    const navDrops = document.querySelectorAll("#ma-navbar .nav-drop");

    for(let dropdown of navDrops){
        dropdown.addEventListener("click", function(event){
            event.stopPropagation();
            for(let dropdown of navDrops){
                if(dropdown != this) dropdown.classList.remove("show");
            }    
            this.classList.toggle("show");
        });
    }

    // On gère la fermeture des menus
    document.addEventListener("click", () => {
        navButton.nextElementSibling.classList.remove("show");
        for(let dropdown of navDrops){
            dropdown.classList.remove("show");
        }
    });
}