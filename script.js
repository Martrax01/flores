function crearElementos() {
    const contenedor = document.getElementById('universo');
    const frasesGalaxia = [
        "Eres mi luz 🌻", "Mi persona favorita", "Siempre brillas", 
        "🌻🌻🌻", "Te amo Wendy", "Mi flor más bella", "Luz en mi vida"
    ];

    for (let i = 0; i < 70; i++) {
        let div = document.createElement('div');
        div.className = 'elemento-flotante';
        div.innerText = frasesGalaxia[Math.floor(Math.random() * frasesGalaxia.length)];
        
        // Esparcir por TODA la pantalla usando vh y vw
        div.style.left = Math.random() * 90 + "vw"; 
        div.style.top = Math.random() * 90 + "vh";
        
        // Diferentes tamaños para dar profundidad
        let size = Math.random() * (25 - 12) + 12;
        div.style.fontSize = size + "px";
        
        // Velocidad para el movimiento
        div.setAttribute('data-vel', Math.random() * 3 + 1);
        
        contenedor.appendChild(div);
    }
}
