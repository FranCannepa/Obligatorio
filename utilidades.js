function mostrarPantallaPorId(idPantalla) {
    document.querySelector(`#${idPantalla}`).style.display = "block";
}

function ocultarPantallaPorId(idPantalla) {
    document.querySelector(`#${idPantalla}`).style.display = "none";
}

function mostrarFlexPorId(idPantalla) {
    document.querySelector(`#${idPantalla}`).style.display = "flex";
}

function limpiarValorElementoPorId(idElemento) {
    document.querySelector(`#${idElemento}`).value = "";
}

function ocultarTodasLasPantallas() {
    document.querySelector("#contenedorLogin").style.display = "none";
    document.querySelector("#pantallaAlumno").style.display = "none";
    document.querySelector("#registro").style.display = "none";
    document.querySelector("#pantallaDocente").style.display = "none";
    document.querySelector("#banner").style.display = "none";
    document.querySelector("#opcionesDocente").style.display = "none";
    document.querySelector("#opcionesAlumno").style.display = "none";
    document.querySelector("#mensajeBienvenida").style.display = "none";
    document.querySelector("#loginError").style.display = "none";
    document.querySelector("#pantallaRealizarEntrega").style.display = "none";
    document.querySelector("#detallesTareaSeleccionada").style.display = "none";
    document.querySelector("#detallesAlumnoSeleccionado").style.display =
        "none";
    document.querySelector(
        "#pantallaEstudianteTareasEntregadas"
    ).style.display = "none";
}

function ocultarTodasLasPantallasDocente() {
    document.querySelector("#pantallaInfoAlumnosDocente").style.display =
        "none";
    document.querySelector("#pantallaEstadisticasDocente").style.display =
        "none";
    document.querySelector("#pantallaDevolucionesDocente").style.display =
        "none";
    document.querySelector("#pantallaCrearTareaDocente").style.display = "none";
    document.querySelector("#detallesAlumnoSeleccionado").style.display =
        "none";
}

function verificarDatosDeUsuario(nombreUsuario, contraseña) {
    const nombreUsuarioValido = verificarNombreUsuario(nombreUsuario);
    const contraseñaValida = verificarContraseña(contraseña);

    return nombreUsuarioValido && contraseñaValida;
}

function verificarNombreUsuario(nombreUsuario) {
    let nombreUsuarioValido = true;
    let index = 0;

    while (index < usuarios.length && nombreUsuarioValido) {
        const esValido = usuarios[index].nombreUsuario == nombreUsuario;

        if (esValido) {
            nombreUsuarioValido = false;
        }

        index++;
    }

    return nombreUsuarioValido;
}

function verificarContraseña(contraseña) {
    let contieneCuatroCaracteres = contraseña.length >= 4;
    let contieneNumero = false;
    let contieneMayuscula = false;
    let contieneMinuscula = false;

    for (let i = 0; i < contraseña.length; i++) {
        const caracter = contraseña[i];
        const esNumero = !isNaN(caracter * 1);

        if (esNumero) {
            contieneNumero = true;
        }

        if (!esNumero && caracter == caracter.toUpperCase()) {
            contieneMayuscula = true;
        }
        if (!esNumero && caracter == caracter.toLowerCase()) {
            contieneMinuscula = true;
        }
    }

    return (
        contieneNumero &&
        contieneMayuscula &&
        contieneMinuscula &&
        contieneCuatroCaracteres
    );
}

function mostrarImagenPerfilAlumno() {
    let imagenPerfil =
        '<img class="imgPerfil" src="img/estudiante.png" alt="Imagen Perfil" width="200">';
    document.querySelector("#imagenPefril").innerHTML = imagenPerfil;
}

function mostrarImagenPerfilDocente() {
    let imagenPerfil =
        '<img class="imgPerfil" src="img/teacher.png" alt="Imagen Perfil" width="200">';
    document.querySelector("#imagenPefril").innerHTML = imagenPerfil;
}

function volverAlInicio() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("contenedorLogin");
    limpiarValorElementoPorId("usuario");
    limpiarValorElementoPorId("pass");
}

function mostrarMensajeBienvendia() {
    let mensaje = `Bienvenido ${usuarioActual.nombre}!`;
    document.querySelector("#mensajeBienvenida").innerHTML = mensaje;
}

function obtenerDatosDelAlumno(usuarioAlumno) {
    let usuarioConDatos = null;
    let index = 0;

    while (index < alumnosDelDocenteActual.length && usuarioConDatos == null) {
        if (alumnosDelDocenteActual[index].nombreUsuario == usuarioAlumno) {
            usuarioConDatos = alumnosDelDocenteActual[index];
        }
        index++;
    }

    return usuarioConDatos;
}

function obtenerTareaPorId(tareaId) {
    let tarea = null;
    let index = 0;

    while (index < tareas.length && tarea == null) {
        if (tareas[index].id == tareaId) {
            tarea = tareas[index];
        }
        index++;
    }

    return tarea;
}

function obtenerDetallesDeEntregaSeleccionada() {
    let detallesEntrega = null;
    let index = 0;

    while (index < tareasEntregadas.length && detallesEntrega == null) {
        if (tareasEntregadas[index].id == entregaIdSeleccionada) {
            detallesEntrega = tareasEntregadas[index];
        }
        index++;
    }

    return detallesEntrega;
}
