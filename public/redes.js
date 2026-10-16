/* Menú flotante circular de redes: abre y cierra el abanico. */
(function () {
  var caja = document.querySelector('.redes');
  if (!caja) return;
  var boton = caja.querySelector('.redes__boton');
  if (!boton) return;
  var enlaces = caja.querySelectorAll('.redes__lista a');

  function poner(abierto) {
    caja.classList.toggle('abierto', abierto);
    for (var i = 0; i < enlaces.length; i++) enlaces[i].tabIndex = abierto ? 0 : -1;
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    boton.setAttribute('aria-label', abierto ? 'Cerrar redes sociales' : 'Abrir redes sociales');
  }

  poner(location.hash === '#redes');   /* /#redes abre el menú: sirve para enlazarlo directo */
  boton.addEventListener('click', function () { poner(!caja.classList.contains('abierto')); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && caja.classList.contains('abierto')) { poner(false); boton.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (!caja.contains(e.target)) poner(false);
  });
})();
