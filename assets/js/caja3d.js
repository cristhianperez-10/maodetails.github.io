/* Mao details · caja 3D giratoria con varias ediciones */
(function () {
  var vitrina = document.querySelector(".vitrina");
  if (!vitrina) return;

  /* ---------- Ilustraciones de la tapa (la caja real lleva la foto del cliente) ---------- */
  function corazon(x, y, s, c) {
    return '<path transform="translate(' + x + " " + y + ") scale(" + s + ')" fill="' + c + '" d="M0 2C0-1 4-1 4 2C4 4 2 5.5 0 7C-2 5.5-4 4-4 2C-4-1 0-1 0 2Z"/>';
  }
  function tulipan(x, c) {
    return '<path d="M' + x + ' 100V86" stroke="#7C8F62" stroke-width="1.3"/>' +
      '<path fill="' + c + '" d="M' + (x - 3) + " 83Q" + (x - 3) + " 89 " + x + " 89Q" + (x + 3) + " 89 " + (x + 3) + " 83L" + (x + 1.5) + " 85.5L" + x + " 82.5L" + (x - 1.5) + ' 85.5Z"/>';
  }
  var ESTRELLA = "M0-5Q1.1-1.1 5 0Q1.1 1.1 0 5Q-1.1 1.1-5 0Q-1.1-1.1 0-5Z";

  var FOTO_MAMA = '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="g-mama" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F8DDD3"/><stop offset="1" stop-color="#EBAFA9"/></linearGradient></defs>' +
    '<rect width="100" height="100" fill="url(#g-mama)"/><circle cx="50" cy="68" r="22" fill="#FCEBD3"/><rect y="73" width="100" height="27" fill="#C98089"/>' +
    '<g fill="#5A1A28"><circle cx="44" cy="45" r="4.6"/><path d="M37.5 74Q38.5 59 41 53.5Q44 50.5 47 53.5Q49.5 59 50.5 74Z"/><circle cx="58" cy="57.5" r="3.3"/><path d="M54.5 74Q55 64.5 56.5 62Q58 60.6 59.5 62Q61 64.5 61.5 74Z"/></g>' +
    '<path d="M48 58.5Q52.5 64 56 64.5" stroke="#5A1A28" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
    tulipan(9, "#FFF7F2") + tulipan(17, "#B76E79") + tulipan(25, "#FFF7F2") + tulipan(75, "#FFF7F2") + tulipan(83, "#B76E79") + tulipan(91, "#FFF7F2") +
    corazon(22, 20, 1, "#fff") + corazon(76, 26, .8, "#fff") + corazon(64, 14, .6, "#fff") + "</svg>";

  var FOTO_CUMPLE = '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="g-cumple" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBE6C2"/><stop offset="1" stop-color="#EFB7A4"/></linearGradient></defs>' +
    '<rect width="100" height="100" fill="url(#g-cumple)"/><rect y="76" width="100" height="24" fill="#8E4F5A"/>' +
    '<path d="M16 32.5Q14 45 18 56M84 28.5Q87 42 82 52M78 41Q76 50 79 58" stroke="#5A1A28" stroke-width=".5" fill="none"/>' +
    '<ellipse cx="16" cy="24" rx="7" ry="8.5" fill="#B76E79"/><ellipse cx="84" cy="20" rx="6.5" ry="8" fill="#C9A35C"/><ellipse cx="78" cy="35" rx="5" ry="6" fill="#6B1E2E"/>' +
    '<rect x="28" y="58" width="44" height="18" rx="2" fill="#F7F1EA"/><path d="M28 58H72V62Q69 66 66 62Q63 67 59 62Q55 65 51 62Q47 66 43 62Q39 65 35 62Q31 66 28 62Z" fill="#B76E79"/>' +
    '<rect x="35" y="45" width="30" height="13" rx="2" fill="#E8C5C1"/><rect x="35" y="51" width="30" height="2" fill="#C9A35C"/>' +
    '<g fill="#6B1E2E"><rect x="41.5" y="37" width="2" height="8"/><rect x="49" y="36" width="2" height="9"/><rect x="56.5" y="37" width="2" height="8"/></g>' +
    '<g fill="#E9A23B"><ellipse cx="42.5" cy="34.6" rx="1.3" ry="2.2"/><ellipse cx="50" cy="33.6" rx="1.3" ry="2.2"/><ellipse cx="57.5" cy="34.6" rx="1.3" ry="2.2"/></g>' +
    '<g fill="#6B1E2E"><rect x="30" y="20" width="2" height="4" transform="rotate(30 31 22)"/><rect x="64" y="12" width="2" height="4" transform="rotate(-20 65 14)"/><rect x="88" y="62" width="2" height="4" transform="rotate(40 89 64)"/></g>' +
    '<g fill="#fff"><rect x="40" y="14" width="2" height="4" transform="rotate(-35 41 16)"/><rect x="8" y="58" width="2" height="4" transform="rotate(20 9 60)"/><rect x="70" y="50" width="2" height="4" transform="rotate(60 71 52)"/></g></svg>';

  var FOTO_NAVIDAD = '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="g-navidad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22304A"/><stop offset="1" stop-color="#506583"/></linearGradient></defs>' +
    '<rect width="100" height="100" fill="url(#g-navidad)"/><circle cx="82" cy="18" r="7" fill="#F3E3BE"/><circle cx="85" cy="16" r="6.2" fill="#2A3955"/>' +
    '<path d="M0 80Q50 70 100 80V100H0Z" fill="#F7F1EA"/>' +
    '<path d="M50 24L63 44H57L69 61H61L73 78H27L39 61H31L43 44H37Z" fill="#1F3B30"/><rect x="47" y="78" width="6" height="5" fill="#4A1420"/>' +
    '<path transform="translate(50 22) scale(1.1)" fill="#E3C98F" d="' + ESTRELLA + '"/>' +
    '<g><circle cx="46" cy="40" r="1.6" fill="#C9A35C"/><circle cx="55" cy="50" r="1.6" fill="#B76E79"/><circle cx="42" cy="57" r="1.6" fill="#F7F1EA"/><circle cx="58" cy="66" r="1.6" fill="#C9A35C"/><circle cx="38" cy="72" r="1.6" fill="#B76E79"/><circle cx="64" cy="73" r="1.6" fill="#F7F1EA"/></g>' +
    '<rect x="20" y="75" width="11" height="9" fill="#6B1E2E"/><rect x="24.6" y="75" width="1.8" height="9" fill="#C9A35C"/>' +
    '<rect x="69" y="76" width="9" height="8" fill="#C9A35C"/><rect x="72.6" y="76" width="1.8" height="8" fill="#6B1E2E"/>' +
    '<g fill="#fff" opacity=".85"><circle cx="12" cy="20" r=".9"/><circle cx="24" cy="38" r=".7"/><circle cx="18" cy="60" r=".9"/><circle cx="70" cy="34" r=".8"/><circle cx="88" cy="46" r=".9"/><circle cx="32" cy="12" r=".6"/><circle cx="62" cy="10" r=".7"/><circle cx="80" cy="62" r=".7"/></g></svg>';

  /* ---------- Ediciones ---------- */
  var DISENOS = [
    { id: "parejas", nombre: "Parejas", ocasion: "Aniversarios · Amor y Amistad", titulo: "Nuestra historia",
      tema: { tapa: "#6B1E2E", tapaOsc: "#4A1420", base: "#F3EBE1", acento: "#C9A35C", texto: "#F7F1EA" },
      foto: '<img src="pedidos/demo/foto.png" alt="" draggable="false">' },
    { id: "mama", nombre: "Mamá", ocasion: "Día de la Madre · Cumpleaños de mamá", titulo: "Para ti, mamá",
      tema: { tapa: "#B76E79", tapaOsc: "#8E4F5A", base: "#FBF3EF", acento: "#F2D7A0", texto: "#FFF8F3" },
      foto: FOTO_MAMA },
    { id: "cumple", nombre: "Cumpleaños", ocasion: "Cumpleaños · Grados · Celebraciones", titulo: "Feliz cumpleaños",
      tema: { tapa: "#2B2326", tapaOsc: "#1A1517", base: "#F7F1EA", acento: "#D4AF6A", texto: "#F7F1EA" },
      foto: FOTO_CUMPLE },
    { id: "navidad", nombre: "Navidad", ocasion: "Edición de temporada", titulo: "Feliz Navidad",
      tema: { tapa: "#1F3B30", tapaOsc: "#142821", base: "#F7F1EA", acento: "#C9A35C", texto: "#F7F1EA" },
      foto: FOTO_NAVIDAD }
  ];

  /* QR real hacia la demo (el mismo de la sección "Pruébalo") */
  var qrSvg = "";
  try {
    var q = qrcode(0, "M"); q.addData(new URL("ver.html?p=demo", location.href).href); q.make();
    qrSvg = q.createSvgTag({ cellSize: 2, margin: 0, scalable: true });
  } catch (e) { qrSvg = ""; }

  var ICONOS = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 8h4v4h-4z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="13" height="13"/><rect x="12" y="9" width="9" height="13" rx="2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z" fill="currentColor"/></svg>'
  ];

  function cara(clase, normal, html) {
    return '<div class="cara ' + clase + '" data-n="' + normal + '"><div class="cara-in">' + html + '</div><i class="luz"></i></div>';
  }

  function construir(d) {
    var techo =
      '<div class="marco-tapa"></div>' +
      '<div class="foto-tapa">' + d.foto + '</div>' +
      '<div class="sello-m"><b>M</b><span>Mao</span></div>' +
      '<svg class="destello-tapa" viewBox="-5 -5 10 10"><path d="' + ESTRELLA + '"/></svg>' +
      '<div class="textos-tapa"><p class="mini">Apunta tu cámara a la foto</p><p class="script">Recuerdos que cobran vida</p></div>';

    var tapaFrente = '<div class="fila">' + (qrSvg ? '<div class="qr">' + qrSvg + "</div>" : "") +
      '<div><p class="serif">Tu recuerdo te espera</p><p class="mini">Escanea · Apunta · Mira</p></div></div>';
    var tapaDer = '<p class="logo-lado">Mao <em>details</em><svg viewBox="-5 -5 10 10"><path d="' + ESTRELLA + '"/></svg></p>';
    var tapaAtras = '<p class="script grande">Recuerdos que cobran vida</p>';
    var tapaIzq = '<p class="script grande">' + d.titulo + "</p>";

    var pasos = ["Escanea el QR", "Apunta a la foto", "Mira y escucha"].map(function (t, i) {
      return '<div class="paso3d"><span class="ic">' + ICONOS[i] + "</span><span>" + t + "</span></div>";
    }).join("");
    var baseFrente = '<div class="zona"><div class="panel"><p class="mini">Cómo ver tu recuerdo</p><div class="pasos3d">' + pasos + "</div></div></div>";
    var baseDer = '<div class="zona"><div class="fila"><div class="sello-redondo"><b>M</b></div><div><p class="mini">Hecho a mano<br>en Bogotá</p><p class="script">cada caja es única</p></div></div></div>';
    var baseAtras = '<div class="zona"><p class="mini">@mao.details</p></div>';
    var baseIzq = '<div class="zona"><p class="serif peq">Mao <em>details</em></p></div>';

    return '<div class="grupo base">' +
        cara("lado frente", "0,0,1", baseFrente) + cara("lado der", "1,0,0", baseDer) +
        cara("lado atras", "0,0,-1", baseAtras) + cara("lado izq", "-1,0,0", baseIzq) +
        cara("fondo", "0,1,0", "") +
      "</div>" +
      '<div class="grupo tapa">' +
        cara("techo", "0,-1,0", techo) +
        cara("lado frente", "0,0,1", tapaFrente) + cara("lado der", "1,0,0", tapaDer) +
        cara("lado atras", "0,0,-1", tapaAtras) + cara("lado izq", "-1,0,0", tapaIzq) +
      "</div>";
  }

  /* ---------- Elementos ---------- */
  var escena = vitrina.querySelector(".escena");
  var deslizador = vitrina.querySelector(".deslizador");
  var caja = vitrina.querySelector(".caja");
  var nombre = vitrina.querySelector(".vitrina-nombre");
  var ocasion = vitrina.querySelector(".vitrina-ocasion");
  var puntos = vitrina.querySelector(".vitrina-puntos");
  var pista = vitrina.querySelector(".pista-giro");
  var caras = [];
  var actual = 0;

  DISENOS.forEach(function (d, i) {
    var b = document.createElement("button");
    b.type = "button"; b.setAttribute("aria-label", "Ver edición " + d.nombre);
    b.addEventListener("click", function () { ir(i); });
    puntos.appendChild(b);
  });

  function pintar(i) {
    var d = DISENOS[i], t = d.tema;
    caja.style.setProperty("--tapa", t.tapa);
    caja.style.setProperty("--tapa-osc", t.tapaOsc);
    caja.style.setProperty("--base", t.base);
    caja.style.setProperty("--acento", t.acento);
    caja.style.setProperty("--texto-tapa", t.texto);
    caja.innerHTML = construir(d);
    caras = Array.prototype.map.call(caja.querySelectorAll(".cara"), function (el) {
      return { luz: el.querySelector(".luz"), n: el.dataset.n.split(",").map(Number) };
    });
    nombre.textContent = "Edición " + d.nombre;
    ocasion.textContent = d.ocasion;
    escena.setAttribute("aria-label", "Caja Mao details, edición " + d.nombre + ". Arrastra para girarla.");
    Array.prototype.forEach.call(puntos.children, function (b, k) { b.setAttribute("aria-current", k === i ? "true" : "false"); });
    sombrear();
  }

  /* ---------- Giro ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rx = -26, ry = -38, vx = 0, vy = 0, arrastrando = false, ultimo = 0, px = 0, py = 0, visible = true;
  var RAD = Math.PI / 180, L = [0.1, -0.7, 0.7];

  function sombrear() {
    var cy = Math.cos(ry * RAD), sy = Math.sin(ry * RAD), cx = Math.cos(rx * RAD), sx = Math.sin(rx * RAD);
    for (var i = 0; i < caras.length; i++) {
      var n = caras[i].n;
      var x1 = n[0] * cy + n[2] * sy, z1 = -n[0] * sy + n[2] * cy;
      var y2 = n[1] * cx - z1 * sx, z2 = n[1] * sx + z1 * cx;
      var b = x1 * L[0] + y2 * L[1] + z2 * L[2];
      caras[i].luz.style.opacity = Math.max(0, Math.min(0.55, (0.95 - b) * 0.32)).toFixed(3);
    }
  }
  function aplicar() {
    caja.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
    sombrear();
  }

  function cuadro(t) {
    if (visible) {
      if (!arrastrando) {
        ry += vy; rx += vx; vy *= 0.94; vx *= 0.9;
        if (!reduce && t - ultimo > 2500 && Math.abs(vy) < 0.2) { ry += 0.18; rx += (-26 - rx) * 0.02; }
      }
      rx = Math.max(-72, Math.min(-6, rx));
      aplicar();
    }
    requestAnimationFrame(cuadro);
  }

  escena.addEventListener("pointerdown", function (e) {
    if (e.button !== undefined && e.button !== 0) return;
    arrastrando = true; px = e.clientX; py = e.clientY; vx = vy = 0;
    escena.setPointerCapture(e.pointerId);
    if (pista) pista.classList.add("oculta");
  });
  escena.addEventListener("pointermove", function (e) {
    if (!arrastrando) return;
    var dx = e.clientX - px, dy = e.clientY - py; px = e.clientX; py = e.clientY;
    vy = dx * 0.45; vx = -dy * 0.3; ry += vy; rx += vx; ultimo = performance.now();
  });
  function soltar() { arrastrando = false; ultimo = performance.now(); }
  escena.addEventListener("pointerup", soltar);
  escena.addEventListener("pointercancel", soltar);
  escena.addEventListener("keydown", function (e) {
    var k = { ArrowLeft: [0, -12], ArrowRight: [0, 12], ArrowUp: [-8, 0], ArrowDown: [8, 0] }[e.key];
    if (k) { e.preventDefault(); vx = k[0] * 0.3; vy = k[1] * 0.3; ultimo = performance.now(); }
  });

  /* ---------- Cambio de edición ---------- */
  var cambiando = false;
  function ir(i, dir) {
    i = (i + DISENOS.length) % DISENOS.length;
    if (i === actual || cambiando) return;
    dir = dir || (i > actual ? 1 : -1);
    var dist = escena.clientWidth * 0.55;
    if (reduce || !deslizador.animate) { actual = i; pintar(i); return; }
    cambiando = true;
    deslizador.animate([{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(" + (-dir * dist) + "px)", opacity: 0 }],
      { duration: 260, easing: "cubic-bezier(.5,0,.75,0)" }).onfinish = function () {
      actual = i; pintar(i); vy = dir * 9; ultimo = performance.now();
      var a = deslizador.animate([{ transform: "translateX(" + (dir * dist) + "px)", opacity: 0 }, { transform: "translateX(0)", opacity: 1 }],
        { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)" });
      a.onfinish = function () { cambiando = false; };
    };
  }
  vitrina.querySelector(".vitrina-ant").addEventListener("click", function () { ir(actual - 1, -1); });
  vitrina.querySelector(".vitrina-sig").addEventListener("click", function () { ir(actual + 1, 1); });

  /* Deslizar rápido con el dedo (gesto horizontal corto) también cambia de edición */
  var t0 = null;
  escena.addEventListener("touchstart", function (e) { var p = e.touches[0]; t0 = { x: p.clientX, y: p.clientY, t: Date.now() }; }, { passive: true });
  escena.addEventListener("touchend", function (e) {
    if (!t0) return; var p = e.changedTouches[0], dx = p.clientX - t0.x, dy = p.clientY - t0.y, dt = Date.now() - t0.t; t0 = null;
    if (dt < 250 && Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 2) ir(actual + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(escena);
  }

  vitrina.classList.add("lista");
  pintar(0);
  aplicar();
  requestAnimationFrame(cuadro);
})();
