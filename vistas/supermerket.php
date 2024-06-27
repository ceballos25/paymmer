<div class="content-supermercado d-none p-2 m-2">
    <div class="row mb-3">
        <div class="col-12">
            <h4 class="text-center" id="titulo">Para empezar, escanéa el código de barras</h4>
        </div>
    </div>

    <div class="row justify-content-between">
        <!-- Ejemplo de tarjeta de novedad -->
        <div class="col-12 col-lg-2 mb-2 shadow p-2 mb-2 rounded h-50">
            <form class="fs-5">
                <div class="mb-3 text-center">
                    <label for="barcodeInput" class="form-label">Código de barras <i class="fa-solid fa-barcode"></i></label>
                    <input type="text" class="form-control" id="barcodeInput" aria-describedby="barcodeHelp">
                </div>
                <div class="mb-3 text-center">
                    <label for="inputCantidad" class="form-label">Cantidad:</label>
                    <div class="d-flex justify-content-center">
                        <button type="button" id="btnRestar" class="btn btn-danger btn-sm mx-1"><i class="fa-solid fa-minus"></i></button>
                        <input type="text" class="form-control w-50 text-center" value="1" id="inputCantidad">
                        <button type="button" id="btnAdd" class="btn btn-success btn-sm mx-1"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-12 col-lg-6 mb-4">
            <div class="card shadow rounded text-center">
                <div class="text-center mt-2 fs-5">Tu Carrito <i class="fa-solid fa-cart-shopping"></i></div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped text-center" id="tableCard">
                            <thead>
                                <tr>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Descuento</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="productTableBody">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <audio id="audioPlayer" src="sound/success.mp3"></audio>

        <div class="col-12 col-lg-3 text-center">
            <div class="p-3 mb-3 text-white rounded shadow">
                <div class="p-2 rounded-3 bg-paymmer-blue">
                    <h5 class="mb-1 p-2 rounded-3 bg-paymmer-orange">Total a Pagar:</h5>
                    <h5 id="totalPagar" class="fw-bold">$12.000</h5>
                    <h5 class="mb-2">Total productos: <span id="txtTotalProductos"></span></h5>
                </div>
            </div>
        </div>
    </div>
    <!-- Repite las tarjetas de novedades según sea necesario -->
</div>