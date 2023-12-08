function drag() {
    let items = document.querySelectorAll('.todo-list__item');

    for (let ball of items) {
        ball.onmousedown = function (e) {

            var coords = getCoords(ball);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            ball.style.position = 'absolute';
            moveAt(e);

            ball.style.zIndex = 1000;

            function moveAt(e) {
                ball.style.left = e.pageX - shiftX + 'px';
                ball.style.top = e.pageY - shiftY + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            ball.onmouseup = function () {
                document.onmousemove = null;
                ball.onmouseup = null;
            };

        }

        ball.ondragstart = function () {
            return false;
        };

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            }
        }
    }
}
