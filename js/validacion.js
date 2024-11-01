document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('Mensaje').value.trim();

        if (nombre === '' || telefono === '' || mensaje === '') {
            alert('Por favor, complete todos los campos antes de enviar.');
            event.preventDefault();
        } else {
            alert('Formulario enviado con éxito.');

        }
    });
});