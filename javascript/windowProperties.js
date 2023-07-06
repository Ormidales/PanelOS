// WINDOW - EXEMPLE DE WINDOW
function window_exempleWindow_ouvrir(){
    document.getElementById("window_exempleWindow").style.visibility = "visible";
    document.getElementById("window_exempleWindow").style.opacity = "1";
    document.getElementById("window_exempleWindow").style.transition = "opacity 200ms";
}
function window_exempleWindow_fermer(){
    document.getElementById("window_exempleWindow").style.visibility = "hidden";
    document.getElementById("window_exempleWindow").style.opacity = "0";
    document.getElementById("window_exempleWindow").style.transition = "opacity 200ms, visibility 0ms 200ms";
}

// WINDOW - TEST CARD
function window_testCard_ouvrir(){
    document.getElementById("window_testCard").style.visibility = "visible";
    document.getElementById("window_testCard").style.opacity = "1";
    document.getElementById("window_testCard").style.transition = "opacity 200ms";
}
function window_testCard_fermer(){
    document.getElementById("window_testCard").style.visibility = "hidden";
    document.getElementById("window_testCard").style.opacity = "0";
    document.getElementById("window_testCard").style.transition = "opacity 200ms, visibility 0ms 200ms";
}