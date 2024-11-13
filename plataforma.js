function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "ojo.png"; // Cambia a la imagen de ojo cerrado
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "ojo2.png"; // Cambia de nuevo a la imagen de ojo abierto
    }
}

// Lista de usuarios y contraseñas
const users = {
    "Danny": "9865255",
    "DevidAlbert": "12510638",
    "RosaJulieta": "14879298",
    "LuisJosue": "16198737",
    "JessicaAbigail": "13986076",
    "William": "9927208",
    "JoseVictor": "13276007",
    "AdrianaElia": "14912561",
    "KevinJoel": "13280247",
    "KatherineCarla": "10083518",
    "DavisManuel": "13279650",
    "Nadia": "13086870",
    "IgnacioGustavo": "13281247",
    "FernandoAndre": "13121085",
    "LuzClara": "303030",
    "AlinaRubi": "404040"
    // Añadir más estudiantes según sea necesario
};

// Datos de calificaciones para cada estudiante
const gradesData = {
    //6TO DE SECUNDARIA//
    //lista 1
    "Danny": [
        { trimestre: "1er Trim.", nota: 85, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 79, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " },
    ],
    //lista 2
    "DevidAlbert": [
        { trimestre: "1er Trim.", nota: 54, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 60, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 63, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " },
    ],
    //lista 3
    "RosaJulieta": [
        { trimestre: "1er Trim.", nota: 96, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 85, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 4
    "LuisJosue": [
        { trimestre: "1er Trim.", nota: 53, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 55, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 5
    "JessicaAbigail": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 64, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 6
    "William": [
        { trimestre: "1er Trim.", nota: 64, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 55, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 46, descripcion: "REPROBADO", observacion: "- completar tareas/-presentar sellos de cacnioneros y otros/Falta demostración de danza 22-11-24 " }
    ],
    //lista 7
    "JoseVictor": [
        { trimestre: "1er Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 88, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 8
    "AdrianaElia": [
        { trimestre: "1er Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 95, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 9
    "KevinJoel": [
        { trimestre: "1er Trim.", nota: 56, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 68, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 10
    "KatherineCarla": [
        { trimestre: "1er Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 89, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 11
    "DavisManuel": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 49, descripcion: "REPROBADO", observacion: "- completar tareas/-presentar sellos de cacnioneros y otros/Falta demostración de danza 22-11-24 " }
    ],
    //lista 12
    "Nadia": [
        { trimestre: "1er Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 96, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 13
    "IgnacioGustavo": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 14
    "FernandoAndre": [
        { trimestre: "1er Trim.", nota: 63, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 78, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 73, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 15
    "LuzClara": [
        { trimestre: "1er Trim.", nota: 0, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 73, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    //lista 16
    "AlinaRubi": [
        { trimestre: "1er Trim.", nota: 0, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 55, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "Falta demostración de danza 22-11-24 " }
    ],
    // Añadir más calificaciones para otros estudiantes
};

// Función de inicio de sesión
function login(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] === password) {
        // Guardar el usuario en el almacenamiento local
        localStorage.setItem("loggedUser", username);
        // Redireccionar a la página de plataforma
        window.location.href = "plataforma.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

// Función para cargar las calificaciones del estudiante
function loadGrades() {
    const username = localStorage.getItem("loggedUser");
    if (!username || !gradesData[username]) {
        alert("No hay datos de usuario. Redirigiendo a inicio de sesión.");
        window.location.href = "inicio.html";
        return;
    }

    // Mostrar nombre del estudiante
    document.getElementById("student-name").textContent = username;

    // Obtener la tabla y llenar las calificaciones
    const gradesTable = document.getElementById("grades-table");
    gradesData[username].forEach(grade => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${grade.trimestre}</td>
            <td>${grade.nota}</td>
            <td>${grade.descripcion}</td>
            <td>${grade.observacion}</td>
        `;
        gradesTable.appendChild(row);
    });
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}

// Llama a loadGrades solo si estamos en plataforma.html
if (window.location.pathname.includes("plataforma.html")) {
    loadGrades();
}
