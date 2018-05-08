"use strict";
function persona() {
    let dato;
    let persona = new Object();

    persona = {
        nombre: "Jonathan",
        edad: 27,
        "likes chocolate": true,
    };

    do {
        var opcion = Number(prompt("Menú:\n 1-.Nombre\n 2.-Edad\n 3.-¿Qué quieres saber?\n 4.-Salir"));
        switch (opcion) {

            case 1: alert(persona.nombre);
                break;

            case 2: alert(persona.edad);// Se puede usar la notacion del caso 3 persona[edad]
                break;

            case 3: dato = prompt("Escribe nombre o edad para obtener el dato", "nombre o edad o likes chocolate");
                alert(persona[dato]);
                break;
            case 4:
                alert("mata ashita ;)");
                break;
            default: alert("No existe esa opción");
                break;
        }
    } while (Number(opcion) != 4);
}