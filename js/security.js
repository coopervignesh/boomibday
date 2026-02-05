// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable keys
document.addEventListener("keydown", function(e){
if(e.keyCode==44) e.preventDefault();     // Print Screen
if(e.keyCode==123) e.preventDefault();    // F12
if(e.ctrlKey && e.keyCode==85) e.preventDefault(); // Ctrl+U
if(e.ctrlKey && e.shiftKey && e.keyCode==73) e.preventDefault(); // Ctrl+Shift+I
});

// Disable drag
document.addEventListener("dragstart", e => e.preventDefault());

// Blur when tab change
document.addEventListener("visibilitychange", function(){
if(document.hidden){
document.body.style.filter="blur(10px)";
}else{
document.body.style.filter="blur(0px)";
}
});
