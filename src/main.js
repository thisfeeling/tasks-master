import './styles/main.css'

let agregar_datos_abrir = document.querySelector("#btn-añadir");
let agregar_datos_cerrar = document.querySelector("#btn-accion-cerrar");
let agregar_datos_añadir = document.querySelector("#btn-accion-añadir");

let mostrar_formulario = document.querySelector("#contenedor-formulario");
let mostrar_enlistar = document.querySelector("#contenedor-enlistar")
let mostrar_buscar = document.querySelector("#contenedor-buscar");
let mostrar_cantidad = document.querySelector("#contenedor-cantidad");

let enlistar_elementos = document.querySelector("#enlistar-elementos");
let enlistar_abrir = document.querySelector("#btn-mostrar");
let enlistar_cerrar = document.querySelector("#btn-salir-enlistar");

let buscar_elementos = document.querySelector("#buscar-elementos");
let buscar_abrir = document.querySelector("#btn-buscar");
let buscar_cerrar = document.querySelector("#btn-salir-buscar");
let prioridad_buscar = document.querySelector("#label-prioridad-buscar");

if (prioridad_buscar) {
    prioridad_buscar.addEventListener("change", () => {
        let prioridad_seleccionada = prioridad_buscar.value;
        buscar_elementos.innerHTML = "";
        let contador = 1;
        for (let i = 0; i < tareas.length; i++) {
            let tarea = tareas[i];
            if (tarea[2] === prioridad_seleccionada) {
                buscar_elementos.innerHTML += `
                    <div class="buscar-elementos">
                        <p> ${contador} </p>
                        <p> ${tarea[0]} </p>
                        <p> ${tarea[1]} </p>
                        <p> ${tarea[2]} </p>
                    </div>
                `;
                contador++;
            }
        }
        if (contador === 1) {
            buscar_elementos.innerHTML = `
                <div class="buscar-elementos">
                    <p>No se encontraron tareas con esa prioridad.</p>
                </div>
            `;
        }
    });
} else {
    console.warn('Elemento #label-prioridad-buscar no encontrado en DOM');
}

let cantidad_abrir = document.querySelector("#btn-cantidad");
let cantidad_cerrar = document.querySelector("#btn-salir-cantidad");

let divBuscarCampo = document.querySelector(".buscar-campo");
let selectPrioridadBuscar = document.querySelector("#label-prioridad-buscar");

if (divBuscarCampo) {
    divBuscarCampo.addEventListener("click", () => {
        if (selectPrioridadBuscar) selectPrioridadBuscar.style.display = "block";
    });
} else {
    console.warn('Elemento .buscar-campo no encontrado en DOM');
}

agregar_datos_abrir.addEventListener("click",() => {
    mostrar_formulario.classList.remove("hidden");
    mostrar_enlistar.classList.add("hidden");
    mostrar_buscar.classList.add("hidden");
    mostrar_cantidad.classList.add("hidden");
    selectPrioridadBuscar.style.display = "none";
})

agregar_datos_cerrar.addEventListener("click",() => {
    mostrar_formulario.classList.add("hidden");
})

let tareas = []

agregar_datos_añadir.addEventListener("click",() => {
    let label_nombre_tarea = document.querySelector("#label-nombre-tarea").value;
    let label_fecha_limite = document.querySelector("#label-fecha-limite").value;
    let label_prioridad = document.querySelector("#label-prioridad").value;
    let agregar_datos = [];
    agregar_datos.push(label_nombre_tarea, label_fecha_limite, label_prioridad);
    tareas.push(agregar_datos)
    /* console.log(agregar_datos); */
})

enlistar_abrir.addEventListener("click",() => {
    enlistar_elementos.innerHTML = "";
    mostrar_enlistar.classList.remove("hidden");
    mostrar_formulario.classList.add("hidden");
    mostrar_buscar.classList.add("hidden");
    mostrar_cantidad.classList.add("hidden");
    selectPrioridadBuscar.style.display = "none";
    for (let i = 0;  i < tareas.length;  i++){
        let tarea = tareas[i]
        enlistar_elementos.innerHTML +=   `
            <div class="enlistar-elementos">
                <p> ${i+1} </p>
                <p> ${tarea[0]}</p>
                <p> ${tarea[1]}</p>
                <p> ${tarea[2]}</p>
            </div>
        `
    }
})

enlistar_cerrar.addEventListener("click",() => {
    mostrar_enlistar.classList.add("hidden");
})

buscar_abrir.addEventListener("click",() => {
    buscar_elementos.innerHTML = "";
    mostrar_buscar.classList.remove("hidden");
    mostrar_formulario.classList.add("hidden");
    mostrar_enlistar.classList.add("hidden");
    mostrar_cantidad.classList.add("hidden");
    selectPrioridadBuscar.style.display = "none";
    for (let i = 0;  i < tareas.length;  i++){
        let tarea = tareas[i]
        buscar_elementos.innerHTML +=   `
            <div class="buscar-elementos">
                <p> ${i+1} </p>
                <p> ${tarea[0]}</p>
                <p> ${tarea[1]}</p>
                <p> ${tarea[2]}</p>
            </div>
        `
    }
})

buscar_cerrar.addEventListener("click",() => {
    mostrar_buscar.classList.add("hidden");
})

cantidad_abrir.addEventListener("click",() => {
    mostrar_cantidad.classList.remove("hidden");
    mostrar_buscar.classList.add("hidden");
    mostrar_formulario.classList.add("hidden");
    mostrar_enlistar.classList.add("hidden");
    document.querySelector("#cantidad-tareas").innerText = tareas.length;
})

cantidad_cerrar.addEventListener("click",() => {
    mostrar_cantidad.classList.add("hidden");

})

