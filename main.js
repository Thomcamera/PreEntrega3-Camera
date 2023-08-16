// Definición de las variables del caballero
let caballero = {
    monedas: 100,
    vida: 100,
    armamento: "Espada de acero",
    comidaDragon: 5,
    fuerza: 10,
    velocidad: 10
};

// Funciones para mostrar mensajes en la interfaz
function mostrarMensaje(mensaje) {
    const mensajeContainer = document.getElementById("mensajeContainer");
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = mensaje;

    // Eliminar cualquier mensaje anterior en el contenedor
    while (mensajeContainer.firstChild) {
        mensajeContainer.removeChild(mensajeContainer.firstChild);
    }

    // Agregar el nuevo mensaje al contenedor
    mensajeContainer.appendChild(nuevoParrafo);
}

// Función para actualizar la cantidad de monedas en la interfaz
function actualizarMonedas() {
    const cantidadMonedas = document.getElementById("monedas");

    if (cantidadMonedas) {
        // Actualizar la cantidad de monedas restantes
        cantidadMonedas.textContent = "Tenés " + caballero.monedas + " monedas en tu inventario.";
    }
}


// Función para mostrar el menú principal y ocultar los demás menús
function mostrarMenuPrincipal() {
    document.getElementById("menuPrincipal").style.display = "block";
    document.getElementById("menuTienda").style.display = "none";
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuEntrenar").style.display = "none";
}

// Función para mostrar el menú de la tienda y ocultar los demás menús
function mostrarMenuTienda() {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuTienda").style.display = "block";
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuEntrenar").style.display = "none";
    
}

// Función para mostrar el menú de la mazmorra y ocultar los demás menús
function mostrarMenuMazmorra() {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuTienda").style.display = "none";
    document.getElementById("menuMazmorra").style.display = "block";
    document.getElementById("menuEntrenar").style.display = "none";
}

// Función para mostrar el menú de entrenamiento y ocultar los demás menús
function mostrarMenuEntrenar() {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuTienda").style.display = "none";
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuEntrenar").style.display = "block";
    
}

// Función para comprar vida
function comprarVida() {
    if (caballero.monedas >= 20) {
        caballero.monedas -= 20;
        caballero.vida += 20;
        mostrarMensaje("Has comprado vida. Ahora tienes " + caballero.vida + " puntos de vida. Te quedan " + caballero.monedas + " monedas.");
        actualizarMonedas();
    } else {
        mostrarMensaje("No tienes suficientes monedas para comprar vida.");
    }
}

// Función para comprar armamento
function comprarArmamento() {
    if (caballero.monedas >= 10) {
        caballero.monedas -= 10;
        caballero.armamento = "Espada mágica";
        actualizarMonedas();
        mostrarMensaje("Has comprado nueva arma. Ahora tienes " + caballero.armamento + ". Te quedan " + caballero.monedas + " monedas.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para comprar armamento.");
    }
}

// Función para comprar comida para el dragón
function comprarComidaDragon() {
    if (caballero.monedas >= 20) {
        caballero.monedas -= 20;
        caballero.comidaDragon += 5;
        actualizarMonedas();
        mostrarMensaje("Has comprado comida para tu dragón. Ahora tienes " + caballero.comidaDragon + " unidades de comida. Te quedan " + caballero.monedas + " monedas.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para comprar comida para el dragón.");
    }
}


function verInventario() {
    const inventario = "Inventario del caballero:<br>" +
        "Vida: " + caballero.vida + "<br>" +
        "Armamento: " + caballero.armamento + "<br>" +
        "Comida para el dragón: " + caballero.comidaDragon;
    document.getElementById("inventarioCaballero").innerHTML = inventario;
}


// Función para entrenar fuerza
function entrenarFuerza() {
    if (caballero.monedas >= 30) {
        caballero.monedas -= 30;
        caballero.fuerza += 1;
        actualizarMonedas();
        mostrarMensaje("Has entrenado tu fuerza. Ahora tienes " + caballero.fuerza + " puntos de fuerza.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para entrenar fuerza.");
    }
}

// Función para entrenar velocidad
function entrenarVelocidad() {
    if (caballero.monedas >= 30) {
        caballero.monedas -= 30;
        caballero.velocidad += 1;
        actualizarMonedas();
        mostrarMensaje("Has entrenado tu velocidad. Ahora tienes " + caballero.velocidad + " puntos de velocidad.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para entrenar velocidad.");
    }
}

// Lista de narrativas para esperar al otro día
const narrativas = [
    {texto: "La noche es larga e intensa. El frío asecha en las oscuridades del bosque. Tu dragón enciende la fogata con su aliento y duermes con él toda la noche. Pierdes 5 unidades de comida.",
        efecto: () => {caballero.comidaDragon -= 5;}
    },
    {texto: "Has tenido un sueño tranquilo. Tu dragón ronca suavemente mientras descansa.",
        efecto: () => {}
    },
    {texto: "Unos pequeños elfos asaltan tu campamento, tu dragón sale volando y quedas atrapado dentro de un círculo enemigo. Sacás la espada pero es más fácil patearlos. Tu dragón aparece y simplemente se recuesta sobre ellos. Ganás dos puntos de fuerza.",
        efecto: () => {caballero.fuerza += 2;}
    },
    {texto: "La noche pasa sin incidentes. Despiertas sintiéndote renovado y listo para enfrentar un nuevo día.",
        efecto: () => {}
    }
];

function esperarAlOtroDia() {
    const narrativaIndex = Math.floor(Math.random() * narrativas.length);
    const narrativa = narrativas[narrativaIndex];

    narrativa.efecto(); 

    caballero.vida += 10;
    caballero.comidaDragon -= 3;
    mostrarMensaje(`Has esperado al otro día. ${narrativa.texto} Tu vida se ha recuperado.`);
}


// Asignar las funciones a los botones en el menú principal
document.getElementById("btnTienda").addEventListener("click", mostrarMenuTienda);
document.getElementById("btnMazmorra").addEventListener("click", mostrarMenuMazmorra);
document.getElementById("btnEntrenar").addEventListener("click", mostrarMenuEntrenar);
document.getElementById("btnEsperar").addEventListener("click", esperarAlOtroDia);

// Asignar las funciones a los botones en el menú de la tienda
document.getElementById("btnComprarVida").addEventListener("click", comprarVida);
document.getElementById("btnComprarArmamento").addEventListener("click", comprarArmamento);
document.getElementById("btnComprarComidaDragon").addEventListener("click", comprarComidaDragon);
document.getElementById("btnSalirTienda").addEventListener("click", mostrarMenuPrincipal);

// Asignar las funciones a los botones en el menú de la mazmorra
document.getElementById("btnExplorarHabitacion").addEventListener("click", iniciarBatalla);
document.getElementById("btnVerInventario").addEventListener("click", verInventario), 
document.getElementById("btnSalirMazmorra").addEventListener("click", mostrarMenuPrincipal);

// Asignar las funciones a los botones en el menú de entrenamiento
document.getElementById("btnEntrenarFuerza").addEventListener("click", entrenarFuerza);
document.getElementById("btnEntrenarVelocidad").addEventListener("click", entrenarVelocidad);
document.getElementById("btnSalirEntrenar").addEventListener("click", mostrarMenuPrincipal);

// Actualizar la cantidad de monedas en la interfaz al inicio del juego
actualizarMonedas();

// BATALLAS

/// Definir enemigos con atributos
let enemigos = [
    { nombre: "Orco", fuerza: 20, velocidad: 5, vida: 40, vidaInicial: 40 },
    { nombre: "Vampiro", fuerza: 25, velocidad: 10, vida: 30, vidaInicial: 40 },
    { nombre: "Dragon", fuerza: 30, velocidad: 8, vida: 60, vidaInicial: 40 },
    { nombre: "Hechizero", fuerza: 15, velocidad: 12, vida: 25, vidaInicial: 40 }
];

// Variable para controlar el turno del jugador
let enemigoActual = null;

// Función para iniciar una batalla con un enemigo aleatorio
function iniciarBatalla() {
    const enemigoActual = enemigos[Math.floor(Math.random() * enemigos.length)];
    for (let enemigo of enemigos) {
        enemigo.vida = enemigo.vidaInicial;
    }
    mostrarMensaje("¡Has encontrado un " + enemigoActual.nombre + " enemigo! ¿Qué deseas hacer?");
    mostrarAccionesBatalla(enemigoActual);
}


function atacar(turnoJugador) {
    let atacante = turnoJugador ? caballero : enemigoActual;
    let defensor = turnoJugador ? enemigoActual : caballero;

    let ataquePrimero = (turnoJugador && caballero.velocidad >= enemigoActual.velocidad) ||
                        (!turnoJugador && enemigoActual.velocidad > caballero.velocidad);

    // Realizar el ataque según el orden determinado
    if (ataquePrimero) {
        defensor.vida -= atacante.fuerza;
        if (defensor.vida <= 0) {
            // Ganó el jugador o el enemigo
            if (turnoJugador) {
                mostrarMensaje("¡Ganaste la batalla!");
                volverAMenuMazmorra();
            } else {
                mostrarMensaje("¡Perdiste la batalla!");
                volverAMenuMazmorra();
            }
        } else {
            if (turnoJugador) {
                mostrarMensaje("Atacaste al enemigo.");
                actualizarVidaEnemigo();
                // Comprobar si el caballero ganó en velocidad
                if (caballero.velocidad > enemigoActual.velocidad) {
                    // El enemigo ataca automáticamente después del ataque del jugador
                    setTimeout(function() {
                        mostrarMensaje("El enemigo te atacó.");
                        caballero.vida -= enemigoActual.fuerza;  // Restar vida al caballero
                        actualizarVidaCaballero();
                    }, 1000);
                } else {
                    // Turno del enemigo
                    turnoEnemigo();
                }
            } else {
                mostrarMensaje("El enemigo te atacó.");
                caballero.vida -= enemigoActual.fuerza;  // Restar vida al caballero
                actualizarVidaCaballero();
            }
        }
    } else {
        // El defensor ataca primero
        defensor.vida -= atacante.fuerza;
        if (defensor.vida <= 0) {
            // Ganó el jugador o el enemigo
            if (turnoJugador) {
                mostrarMensaje("¡Ganaste la batalla!");
                volverAMenuMazmorra();
            } else {
                mostrarMensaje("¡Perdiste la batalla!");
                volverAMenuMazmorra();
            }
        } else {
            if (turnoJugador) {
                // Turno del enemigo
                turnoEnemigo();
            } else {
                mostrarMensaje("Atacaste al enemigo.");
                actualizarVidaEnemigo();
                // Comprobar si el caballero ganó en velocidad
                if (caballero.velocidad > enemigoActual.velocidad) {
                    // El enemigo ataca automáticamente después del ataque del jugador
                    setTimeout(function() {
                        mostrarMensaje("El enemigo te atacó.");
                        caballero.vida -= enemigoActual.fuerza;  // Restar vida al caballero
                        actualizarVidaCaballero();
                    }, 1000);
                } else {
                    // Turno del enemigo
                    turnoEnemigo();
                }
            }
        }
    }
}
function turnoEnemigo() {

    setTimeout(function() {
        if (ataqueEnemigoPrimero) {
            atacar(false); // Ataque del enemigo primero
        } else {
            mostrarMensaje("Tienes la ventaja de velocidad. ¡Es tu turno!");
        }
    }, 1000);
}

function mostrarMenuBatalla(enemigo) {
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuBatalla").style.display = "block";
    enemigoActual = enemigo;
    actualizarVidaCaballero();
    actualizarVidaEnemigo();
}


// Función para que el dragón ataque al enemigo
function usarAtaqueDragon() {
    enemigoActual.vida -= 30;
    caballero.comidaDragon -= 2;
    
    if (enemigoActual.vida <= 0) {
        mostrarMensaje("¡Ganaste la batalla!");
        volverAMenuMazmorra();
    } else {
        mostrarMensaje("El dragón atacó al enemigo.");
        actualizarVidaEnemigo();
        actualizarComidaDragon();
        turnoEnemigo();
    }
}

function huirBatalla() {
    mostrarMensaje("Huyes de la batalla.");
    volverAMenuMazmorra();
}

function volverAMenuMazmorra() {
    document.getElementById("menuMazmorra").style.display = "block";
    document.getElementById("menuBatalla").style.display = "none";
    enemigoActual = null;
}

function actualizarVidaCaballero() {
    document.getElementById("vidaCaballero").textContent = caballero.vida;
}

function actualizarVidaEnemigo() {
    document.getElementById("vidaEnemigo").textContent = enemigoActual.vida;
}

// Función para usar una habilidad contra el enemigo
function usarHabilidad(enemigo) {
    // Implementa la lógica para usar una habilidad contra el enemigo
    // Puedes causar un daño especial o aplicar un efecto, por ejemplo
}

document.getElementById("btnExplorarHabitacion").addEventListener("click", function() {
    let enemigoAleatorio = enemigos[Math.floor(Math.random() * enemigos.length)];
    mostrarMenuBatalla(enemigoAleatorio);
});

document.getElementById("btnAtacar").addEventListener("click", function() {
    atacar(true);
});

document.getElementById("btnAtaqueDragon").addEventListener("click", function() {
    usarAtaqueDragon();
});

document.getElementById("btnHabilidad").addEventListener("click", function() {
    usarHabilidadEspecial();
});

document.getElementById("btnHuir").addEventListener("click", function() {
    huirBatalla();
});