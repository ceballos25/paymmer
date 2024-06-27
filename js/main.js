// Espera a que se cargue todo el contenido del documento antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    
// Inicializa la tabla DataTable en español
let table = new DataTable('#tableCard', {
    paging: false, // Desactiva la paginación
    lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "Todos"] ], // Opciones de cantidad por página, incluyendo "Todos"
    language: {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_",
        "sZeroRecords":    "Niguna coincidencia",
        "sEmptyTable":     "0 productos en tu Carrito",
        "sInfo":           "_START_ al _END_ de _TOTAL_ produtos",
        "sInfoEmpty":      "_START_ al _END_ de _TOTAL_ produtos",
        "sInfoFiltered":   "( _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    }
});

   
    // Función para agregar un producto a la tabla
    // Obtiene elementos del DOM y define variables necesarias
    let barcodeInput = document.getElementById('barcodeInput');
    let productTableBody = document.getElementById('productTableBody');
    let audioPlayer = document.getElementById('audioPlayer');

    // Escucha el evento cambio del input de código de barras
    barcodeInput.addEventListener('change', function () {
        let barcodeValue = barcodeInput.value;
        if (barcodeValue) {
            addProductToTable(barcodeValue); // Agrega el producto a la tabla
            barcodeInput.value = ''; // Limpia el input de código de barras
            sumarCantidades(); // Actualiza la suma total de cantidades
        }
    });

    // Función para agregar un producto a la tabla
    function addProductToTable(barcodeValue) {
        // Crea una nueva fila y la inserta en la tabla
        let newRow = document.createElement('tr');
        let newRowContent = `
            <td>${barcodeValue}</td>
            <td>Lavaloza</td>
            <td><input min="1" type="number" value="1" class="form-control inputCantidades"></td>
            <td>$5000</td>
            <td>5%</td>
            <td><button type="button" class="btn btn-danger btn-sm" onclick="removeRow(this)"><i class="fa-solid fa-trash"></i></button></td>
        `;
    
        newRow.innerHTML = newRowContent;
        productTableBody.appendChild(newRow); // Agrega la nueva fila al cuerpo de la tabla
        audioPlayer.play(); // Reproduce un sonido (ejemplo)
        table.row.add(newRow).draw();  // Agrega la fila a DataTable y redibuja la tabla
    
        // Asigna el evento 'change' al input de cantidad de la nueva fila
        let inputCantidad = newRow.querySelector('input.inputCantidades');
        inputCantidad.addEventListener('change', sumarCantidades);
    }
    
    // Función global para eliminar una fila de la tabla
    window.removeRow = function (button) {
        let row = button.parentNode.parentNode;
        table.row(row).remove().draw();  // Elimina la fila de DataTable y redibuja la tabla
        sumarCantidades(); // Actualiza la suma total de cantidades
    }
    
    // Función para sumar todas las cantidades de los productos en la tabla
    function sumarCantidades() {
        let tbody = document.getElementById('productTableBody'); // Accede al cuerpo de la tabla
        let suma = 0; // Variable para almacenar la suma total
    
        // Recorre todas las filas del cuerpo de la tabla
        for (let i = 0; i < tbody.rows.length; i++) {
            let fila = tbody.rows[i]; // Accede a la fila actual
            let inputCantidad = fila.cells[2].querySelector('input.inputCantidades'); // Accede al input de cantidad
            
            // Obtiene el valor del input y lo convierte a número
            let valorCantidad = parseFloat(inputCantidad.value);
    
            // Suma el valor a la suma total si es un número válido
            if (!isNaN(valorCantidad)) {
                suma += valorCantidad;
            }
        }
    
        // Actualiza el texto del total de productos en el elemento con ID 'txtTotalProductos'
        let txtTotalProductos = document.getElementById('txtTotalProductos');
        txtTotalProductos.innerText = suma;
    }


    // Variables para los botones y contenidos de la interfaz
    let btnIniciar = document.getElementById('btnIniciar');
    let btnNovedades = document.getElementById('btn-novedades');
    let btnPromociones = document.getElementById('btn-promociones');

    let contentWelcome = document.querySelector('.content-welcome');
    let contentSupermercado = document.querySelector('.content-supermercado');
    let contentNovedades = document.querySelector('.content-novedades');
    let contentPromociones = document.querySelector('.content-promociones');

    // Escucha el evento click del botón 'Iniciar'
    btnIniciar.addEventListener('click', function () {
        contentWelcome.classList.add('d-none'); // Oculta el contenido de bienvenida
        contentSupermercado.classList.remove('d-none'); // Muestra el contenido del supermercado
        contentNovedades.classList.add('d-none'); // Oculta el contenido de novedades
        contentPromociones.classList.add('d-none'); // Oculta el contenido de promociones
    });

    // Escucha el evento click del botón 'Novedades'
    btnNovedades.addEventListener('click', function () {
        contentWelcome.classList.add('d-none'); // Oculta el contenido de bienvenida
        contentSupermercado.classList.add('d-none'); // Oculta el contenido del supermercado
        contentNovedades.classList.remove('d-none'); // Muestra el contenido de novedades
        contentPromociones.classList.add('d-none'); // Oculta el contenido de promociones
    });

    // Escucha el evento click del botón 'Promociones'
    btnPromociones.addEventListener('click', function () {
        contentWelcome.classList.add('d-none'); // Oculta el contenido de bienvenida
        contentSupermercado.classList.add('d-none'); // Oculta el contenido del supermercado
        contentNovedades.classList.add('d-none'); // Oculta el contenido de novedades
        contentPromociones.classList.remove('d-none'); // Muestra el contenido de promociones
    });

    // Variables y eventos para los botones de cantidad
    let btnAdd = document.getElementById('btnAdd');
    let inputCantidad = document.getElementById('inputCantidad');
    let btnRestar = document.getElementById('btnRestar');

    // Escucha el evento click del botón 'Agregar'
    btnAdd.addEventListener("click", function () {
        sumar(inputCantidad); // Incrementa la cantidad
    });

    // Escucha el evento click del botón 'Restar'
    btnRestar.addEventListener("click", function () {
        restar(inputCantidad); // Decrementa la cantidad
    });

    // Función para incrementar la cantidad
    function sumar(inputCantidad) {
        let value = parseInt(inputCantidad.value) || 1; // Obtiene el valor actual y lo convierte a número
        value++; // Incrementa el valor
        inputCantidad.value = value; // Asigna el nuevo valor
    }

    // Función para decrementar la cantidad
    function restar(inputCantidad) {
        let value = parseInt(inputCantidad.value) || 0; // Obtiene el valor actual y lo convierte a número
        if (value > 1) { // Solo decrementa si el valor es mayor que 0
            value--; // Decrementa el valor
        }
        inputCantidad.value = value; // Asigna el nuevo valor
    }

});
