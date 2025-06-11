window.date = function(){
    window.setInterval(function(){
        var now = new Date();
        var date = document.getElementById("date");
        date.innerHTML = now.toLocaleDateString();
    });
   };