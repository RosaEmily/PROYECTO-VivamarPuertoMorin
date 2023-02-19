<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1522179399/p/photo/image/2495256/001_FACHADA.jpg" class="d-block w-100" style="height: 450px" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://www.scarquitectos.pe/images/services/og/268-casas-de-playa-y-de-campo-5f83f75325b5a.jpg" class="d-block w-100" style="height: 450px" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/10/19/1019535_v1.jpeg" class="d-block w-100" style="height: 450px" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>