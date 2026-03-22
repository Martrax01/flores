function crearElementos() {
    const contenedor = document.getElementById('universo');
    
    // Aumentamos a 80 elementos para que se vea lleno pero disperso
    for (let i = 0; i < 80; i++) {
        let div = document.createElement('div');
        div.className = 'elemento-flotante';
        
        div.innerText = frases[Math.floor(Math.random() * frases.length)];
        
        // Dispersión total: usamos porcentajes de -50 a 150 para que algunos nazcan fuera de cámara
        const posX = (Math.random() * 200) - 50; 
        const posY = (Math.random() * 200) - 50;
        const posZ = (Math.random() * 1000) - 500; // Unos cerca, otros muy lejos

        div.style.left = posX + "vw";
        div.style.top = posY + "vh";
        
        // Guardamos su posición inicial para el movimiento
        div.setAttribute('data-x', posX);
        div.setAttribute('data-y', posY);
        div.setAttribute('data-z', posZ);
        div.setAttribute('data-vel', Math.random() * 2 + 0.5);

        // Aplicamos la posición 3D inicial
        div.style.transform = `translateZ(${posZ}px)`;
        
        contenedor.appendChild(div);
    }
}

// Movimiento mejorado para que parezca que navegas por ella
window.addEventListener('deviceorientation', (event) => {
    // Si no hay datos de sensores (PC), no hace nada
    if (event.beta === null) return;

    let rotX = (event.beta - 45) * 0.5; // Ajustamos el ángulo natural de sostener el cel
    let rotY = event.gamma * 0.5;

    const elementos = document.querySelectorAll('.elemento-flotante');
    elementos.forEach(el => {
        let vel = el.getAttribute('data-vel');
        let z = el.getAttribute('data-z');
        
        // El movimiento se multiplica por la "velocidad" para efecto paralaje
        el.style.transform = `translate3d(${rotY * vel}px, ${rotX * vel}px, ${z}px)`;
    });
});