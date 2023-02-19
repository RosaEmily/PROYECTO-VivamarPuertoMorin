<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class="container-fluid p-0">
            <CarrouselComponent></CarrouselComponent>
        </div>
        <div class="container" style="margin-top: -100px">
            <DetailsComponent></DetailsComponent>
        </div>
        <div class="container" style="margin-top: 30px">
            A
        </div>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import CarrouselComponent from '../components/CarrouselComponent.vue';
    import DetailsComponent from '../components/DetailsComponent.vue';
    export default {
        components: { 
            HeaderComponent,
            CarrouselComponent,
            DetailsComponent,
        },
        layout: 'main'
    }
</script>