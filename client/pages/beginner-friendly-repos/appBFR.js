

export function darkTheme(){
    console.log("Dark Theme ausgeführt")
    const cardsContainer = document.querySelectorAll(".card");
    if(document.body.classList.contains("dark-theme")){
        cardsContainer.forEach(card => {
            console.log("ist im forEach")
            card.classList.add("dark-theme-card");

        });
    }else{
        console.log("ist im Else")
        cardsContainer.forEach(card => {
            card.classList.remove("dark-theme-card");

        });
    }
}
