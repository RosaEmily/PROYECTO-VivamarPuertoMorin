<template>
    <div class="row">
        <!--
        <div class="col-6 col-md-3">
            <div class="card-primary" style="background-color: transparent">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-transparent"><b>Área de terreno: </b> 127 m<sup>2</sup></li>
                    <li class="list-group-item bg-transparent"><b>Área construida: </b> 110 m<sup>2</sup></li>
                    <li class="list-group-item bg-transparent"><b>Cantidad de pisos: </b> 2</li>
                </ul>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="card-primary" style="background-color: transparent">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-transparent"><b>Dirección exacta: </b> Dirección</li>
                    <li class="list-group-item bg-transparent"><b>Referencia: </b> Dirección</li>
                    <li class="list-group-item bg-transparent"><b>N° de huéspedes: </b> 20 (aprox)</li>
                </ul>
            </div>
        </div>
        -->
        <div class="col-12 col-md-6">
            <h4 class="text-white text-center">Comunícate con nosotros</h4>
            <br>
            <div class="px-3 py-2 rounded" style="background-color: rgba(255, 255, 255, 0.5);" align="justify">
                Estamos dispuestos a atenderte, escríbenos un mensaje o comunícate con nosotros por cualquiera de los medios disponibles en la parte inferior de esta web.
            </div>
            <br>
            <form action="https://formsubmit.co/vivamar.puertomorin@gmail.com" method="POST">
                <div class="mb-3">
                    <input type="text" class="form-control" name="Nombre" placeholder="Nombre" required>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" name="Correo" placeholder="Correo electrónico" required>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" name="Asunto" placeholder="Asunto" required>
                </div>
                <div class="mb-3">
                    <textarea type="text" class="form-control" name="Mensaje" placeholder="Mensaje" rows="5" required></textarea>
                </div>
                <input type="hidden" name="_next" value="https://vivamar-puerto-morin.vercel.app/">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_subject" value="VIVAMAR - Mensaje!!!">
                <button type="submit" class="col-12 btn btn-dark">Enviar</button>
            </form>
        </div>
        <div class="col-12 col-md-6">
            <h4 class="text-white text-center">Encuéntranos</h4>
            <br>
            <div class="px-3 py-2 rounded" style="background-color: rgba(255, 255, 255, 0.5);" align="justify">
                A través de Google Maps te brindamos la ubicación exacta de Vivamar con el fin de facilitar tu llegada a nuestra casa de playa.
            </div>
            <br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1818.528929924965!2d-78.89723684580112!3d-8.398658605789944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ace3391ad35303%3A0xe4ff8ed190d03e07!2sVivamar%20-%20Casa%20de%20Playa!5e0!3m2!1ses-419!2spe!4v1681777744448!5m2!1ses-419!2spe" width="100%" height="348" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>