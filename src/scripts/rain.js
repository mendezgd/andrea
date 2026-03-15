/* ============================================
   RAIN EFFECT — andrea-counter
   Genera imágenes cayendo en pantalla.
   La imagen se configura via data-src en el
   elemento contenedor #rainContainer.
   ============================================ */

function initRain() {
  const container = document.getElementById('rainContainer');
  if (!container) return;

  // Lee la imagen configurada desde el atributo data-src
  const imgSrc = container.dataset.src || '/images/subject.jpg';
  const COUNT  = parseInt(container.dataset.count || '22', 10);

  for (let i = 0; i < COUNT; i++) {
    const wrap = document.createElement('div');
    wrap.className = 'rain-item';

    const size  = 38 + Math.floor(Math.random() * 40); // 38–78px
    const dur   = 5 + Math.random() * 9;
    const delay = -Math.random() * dur;

    wrap.style.cssText = `
      position: absolute;
      left:     ${Math.random() * 100}vw;
      top:      0;
      width:    ${size}px;
      height:   ${size}px;
      animation: imgFall ${dur}s ${delay}s linear infinite;
      pointer-events: none;
      z-index:  2;
    `;

    const img = document.createElement('img');
    img.src   = imgSrc;
    img.alt   = '';
    img.style.cssText = `
      width: 100%; height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #FFE600;
      box-shadow: 0 2px 8px rgba(0,0,0,0.55);
    `;

    wrap.appendChild(img);
    container.appendChild(wrap);
  }
}

document.addEventListener('DOMContentLoaded', initRain);
