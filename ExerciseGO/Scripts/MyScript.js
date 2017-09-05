$(document).ready(function () {
    
    var progressPoints = (pointsEarned / 50000) * 100;
   
    function move() {
        var elem = document.getElementById("myBar");
        var width = progressPoints;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width = progressPoints;
            }
        }
    }
    
});