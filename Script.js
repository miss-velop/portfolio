
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

      $(document).ready(function(){
        $("a").click(function(){
          $("#landing-text").slideUp(2000).slideDown(2000);
        });
      });
AOS.init({
  easing:'ease',
duration:1800});
  