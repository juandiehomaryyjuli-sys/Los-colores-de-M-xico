document.addEventListener('DOMContentLoaded', () => {
    const datosDestinos = {
        "Xochimilco": {
            lugares: [
                { nombre: "Trajineras coloridas", link: "destinos.html#trajineras"},
                { nombre: "Zoológico de Xochimilco", link: "destinos.html#zoo"}
            ],
            comidas: [
                { nombre: "Tacos de Suadero", link:"sabores.html#suadero"},
                { nombre: "Mole Poblano", link:"sabores.html#mole"}
            ],
            eventos: "Paseos nocturnos en trajinera y feria de flores nativas."
        },
        
        "Taxco": {
            lugares: [
                { nombre: "Parroquia de Santa Prisca", link: "destinos.html#santa-prisca"},
                { nombre: "Tianguis de Plata", link: "destinos.html#plata"}
            ],
            comidas: [
                { nombre: "Torta de Jamón", link: "sabores.html#torta"},
                { nombre: "Enchiladas Suizas", link: "sabores.html#enchiladas"}
            ],
            eventos: "Feria Nacional de la Plata y Procesiones tradicionales."
        },

        "Teotihuacán": {
            lugares: [{ nombre: "Pirámide del Sol", link: "destinos.html"}],
            comidas: [{ nombre: "Platos prehispánicos", link: "sabores.html"}],
            eventos: "Equinoccio de Primavera (Marzo)."
        },

        "Coyoacan": {
            lugares: [{ nombre: "Casa Azul de Frida", link: "destinos.html"}],
            comidas: [{ nombre: "Churros rellenos", link: "sabores.html"}],
            eventos: "Bazares de artesanías fines de semana."
        }
    };

    const btn = document.getElementById('btnPlanear');
    const modal = document.getElementById('modalItinerario');
    const contentModal = document.getElementById('contenidoDinamico');
    const cerrarModal = document.querySelector('.close-modal');

    if (btn) {
        btn.onclick = function() {
            const nombre = document.getElementById('nombreUsuario').value.trim();
            const destino = document.getElementById('seleccionDestino').value;

            if (nombre === "" || destino === "") {
                alert("Por favor, completa tu nombre y elige un destino.");

                return;
            }

            const info= datosDestinos [destino];
            const hora = new Date().getHours();
            let saludo = (hora < 12)? "¡Buen día" : (hora < 18) ? "¡Buena tarde" : "¡Buena noche"


            contentModal.innerHTML = `
                <div class="itinerario-container">
                    <div class="header-itinerario">
                        <h2>${saludo}, ${nombre}!</h2>
                        <p>Tu viaje a <strong>${destino}</strong> está diseñado.</p>
                    </div>
                </div>
            
                <div class="itinerario-grid" style="display:flex; gap:20px; margin-top:15px;">
                    <div class="columna">
                        <h3> Sitios Imperdibles: </h3>
                        <ul>
                            ${info.lugares.map(c => `<li><a href="${c.link}">${c.nombre}</a></li>`).join('')}
                        </ul>
                    </div>
                    <div class="columna">
                        <h3> Sabores Sugeridos: </h3>
                        <ul>
                            ${info.comidas.map(c => `<li><a href="${c.link}">${c.nombre}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="footer-itinerario">
                    <h3> Eventos en la zona: </h3>
                    <p>${info.eventos}</p>
                    <small>*Haz clic en los lugares o comidas para ver las fotos y detalles.</small>
                </div>
            `;

            modal.style.display = "block"; // Abrir la ventana
        }
    }

    if (cerrarModal) {
        cerrarModal.onclick = () => modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }

    const enlaces = document.querySelectorAll('.menu-navegacion ul li a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseover', () => {
            enlace.style.color = '#FF8C00';
            enlace.style.fontWeight = 'bold';
            });
        enlace.addEventListener('mouseout', () => {
            enlace.style.color = '';
            enlace.style.fontWeight = '';
        });
    });
    

    const hero = document.querySelector('.hero-section');
    if (hero) {
        const imagenes = [
            'url("images/Destinos/Taxco de Alarcon.jpg")',
            'url("images/Destinos/Xochimilco.jpg")',
            'url("images/Destinos/Piramides de Teotihuacan.jpg")',
        ];
        let i = 0;
        setInterval(() => {
            i = (i + 1) % imagenes.length;
            hero.style.backgroundImage = imagenes[i];
            hero.style.transition = "background-image 1s ease-in-out";
        }, 5000);
    }
});
