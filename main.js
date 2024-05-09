document.addEventListener("DOMContentLoaded", function() {
    let b1 = document.querySelector(".b1");
    let b2 = document.querySelector(".b2");
    let b3 = document.querySelector(".b3");
    let d1 = document.querySelector(".d1");
    let d2 = document.querySelector(".d2");
  
    b1.addEventListener("click", goster);
    function goster() {
      d1.style.display = "block";
    }
  
    b2.addEventListener("click", gizle);
    function gizle() {
      d1.style.display = "none";
    }
  });