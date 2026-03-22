// 1. Definimos las frases (Personalizadas para Wendy)
const frases = [
    "Eres mi luz 🌻", 
    "Mi persona favorita: Wendy", 
    "Siempre brillas", 
    "🌻🌻🌻", 
    "Te amo", 
    "Mi flor más bella", 
    "Luz en mi vida",
    "Un detalle amarillo para ti",
    "Eres pura alegría",
    "Mi lugar favorito es contigo"
];

// 2. Función para iniciar todo al tocar el botón
function iniciarGalaxia() {
    console.log("Iniciando galaxia..."); // Esto es para que revises si funciona
    
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const galaxia = document.getElementById('galaxia');
    
    if (pantallaInicio && galaxia) {
        pantallaInicio.classList.add('oculto');
        galaxia.classList.remove('oculto');
        crearElementos();
    }
}

// 3. Función para esparcir las flores y frases
function crearElementos() {
    const contenedor = document.getElementById('universo');
    if (!contenedor) return;

    for (let i = 0; i < 80; i++) {
        let div = document.createElement('div');
        div.className = 'elemento-flotante';
        
        // Elegimos una frase al azar
        div.innerText = frases[Math.floor(Math.random() * frases.length)];
        
        // Posiciones aleatorias por toda la pantalla
        const posX = Math.random() * 90; // Entre 0 y 90vw
        const posY = Math.random() * 90; // Entre 0 y 90vh
        const posZ = (Math.random() * 1000) - 500; // Profundidad 3D

        div.style.left = posX + "vw";
        div.style.top = posY + "vh";
        
        // Guardamos datos para el movimiento del sensor
        div.setAttribute('data-x', posX);
        div.setAttribute('data-y', posY);
        div.setAttribute('data-z', posZ);
        div.setAttribute('data-vel', Math.random() * 4 + 1);

        // Estilo visual inicial
        div.style.transform = `translateZ(${posZ}px)`;
        div.style.fontSize = (Math.random() * (24 - 14) + 14) + "px";
        
        contenedor.appendChild(div);
    }
}

// 4. Movimiento con el giroscopio (Solo para celulares)
window.addEventListener('deviceorientation', (event) => {
    if (event.beta === null) return;

    // Ajustamos la sensibilidad
    let rotX = (event.beta - 45) * 0.7; 
    let rotY = event.gamma * 0.7;

    const elementos = document.querySelectorAll('.elemento-flotante');
    elementos.forEach(el => {
        let vel = el.getAttribute('data-vel');
        let z = el.getAttribute('data-z');
        
        // Efecto paralaje: lo que está en diferentes Z se mueve a distinta velocidad
        el.style.transform = `translate3d(${rotY * vel}px, ${rotX * vel}px, ${z}px)`;
    });
});
