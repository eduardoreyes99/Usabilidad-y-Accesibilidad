//Menú barra de navegación
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});
