/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
/*Establ */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openbtn").style.display = 'none';
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.display = "inline-block";
  }