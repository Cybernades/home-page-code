function showMenu(){
    // Initialize scroll event to detect if mobile menu is used and change menu color
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

    let menu = document.getElementById("Hidden");
    let icon = document.getElementById("MenuIcon");
    let currentLocation = window.location.href.split('/');
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        if (currentLocation[currentLocation.length - 2] === "blog") {
            icon.src = "../Static/menuIcon.png";
        } 
        else if (currentLocation[currentLocation.length - 2] === "solutions") {
            icon.src = "../Static/menuIcon.png";
        } else {
            icon.src = "./Static/menuIcon.png";
        }
        
        icon.style.width = "30px";
    } else {
        menu.style.display = "flex";

        if (currentLocation[currentLocation.length - 2] === "blog") {
            icon.src = "../Static/closeIcon.png";
        } 
        else if (currentLocation[currentLocation.length - 2] === "solutions") {
            icon.src = "../Static/closeIcon.png";
        } else {
            icon.src = "./Static/closeIcon.png";
        }
        icon.style.width = "25";
    }
}