/* Mostrar estadisticas del alumno seleccionado en apartado estadisticas/docente */
function estadisticasAlumno() {
    let alumnoSeleccionado = document.querySelector(
        "#alumnoSeleccionado"
    ).value;

    /* for (i = 0; i < tareasAlumno; i++) {
        if (alumnoSeleccionado[i].nombre == alumnoSeleccionado) {

            
        }
    } */

    let infoAlumno = `
                
                <h2>Alumno: ${alumnoSeleccionado[i].nombre}</h2>
                <br>
                <h3>Nivel: ${alumnoSeleccionado[i].nivel}</h2>
                <br>
                <p>Tareas Asignadas</p>


            `;

    document.querySelector("#estadisticasAlumno").innerHTML = infoAlumno;
}