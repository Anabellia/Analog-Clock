
window.addEventListener("load", () => {
    var canvas = document.getElementById("analog-clock");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")
        var width = canvas.width;
        var height = canvas.height;
    } else {
        alert("canvas is not supported")
    }

    var i = 0

    function rotateHands() {
        drawClock()
        rotateSeconds()
        rotateMinutes()
        rotateHours()

        ctx.beginPath()
        ctx.fillStyle = "#eeeeee"
        ctx.arc(width / 2, height / 2, 5, 0, 2 * Math.PI);
        ctx.fill()
        
        i++
    }
    function rotateSeconds() {
        var angleForSeconds = 360 / 60;

        ctx.translate(250, 250);
        ctx.rotate((angleForSeconds * i) * (Math.PI / 180));
        ctx.translate(-250, -250);
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(width / 2 - 11, width / 2 + 15);
        ctx.lineTo(360, 100);
        ctx.strokeStyle = "#222831"
        ctx.stroke();
        ctx.restore();
    }

    function rotateMinutes() {

        ctx.save();

        var angleForMinutes = 360 / 3600;

        ctx.translate(250, 250);
        ctx.rotate((angleForMinutes * i) * (Math.PI / 180));
        ctx.translate(-250, -250);
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.moveTo(width / 2, width / 2 + 15);
        ctx.lineTo(250, 90);
        ctx.strokeStyle = "#03506f"
        ctx.stroke();

        ctx.restore();
    }

    function rotateHours() {

        ctx.save();

        var angleForHours = 360 / 34200;
        ctx.translate(250, 250);
        ctx.rotate((angleForHours * i) * (Math.PI / 180));
        ctx.translate(-250, -250);
        ctx.beginPath();
        ctx.lineWidth = 13;
        ctx.moveTo(width / 2 + 15, width / 2);
        ctx.lineTo(110, 250);
        ctx.strokeStyle = "#0a043c";
        ctx.stroke();

        ctx.restore();
    }

    function drawClock() {

        ctx.save();
        ctx.clearRect(0, 0, 500, 500);

        ctx.beginPath();
        ctx.arc(250, 250, 220, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "#bbbbbb";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 250, 200, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "#ffe3d8"
        ctx.fill();
        ctx.stroke();

        var j = 60;
        while (j > 0) {
            let angle = (j * 6) * Math.PI / 180;
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.arc(width / 2, height / 2, 200, 0, angle);
            ctx.lineTo(width / 2, height / 2);
            ctx.stroke();
            j--
        }

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = "#ffe3d8";
        ctx.arc(width / 2, height / 2, 190, 0, 2 * Math.PI);
        ctx.fill();

        var i = 12;
        while (i > 0) {
            let angle = (i * 30) * Math.PI / 180;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.arc(width / 2, height / 2, 200, 0, angle);
            ctx.lineTo(width / 2, height / 2)
            ctx.stroke();
            i--
        }

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = "#ffe3d8";
        ctx.arc(width / 2, height / 2, 170, 0, 2 * Math.PI);
        ctx.fill();

    }

    window.setInterval(rotateHands, 1000);

})