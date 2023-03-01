<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class="container-fluid p-0">
            <CarrouselComponent></CarrouselComponent>
        </div>
        <div class="container" style="margin-top: -80px">
            <DetailsComponent></DetailsComponent>
        </div>
        <div class="container" style="margin-top: 50px">
            <InfoComponent></InfoComponent>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import CarrouselComponent from '../components/CarrouselComponent.vue';
    import DetailsComponent from '../components/DetailsComponent.vue';
    import InfoComponent from '../components/InfoComponent.vue';
    export default {
        components: { 
            HeaderComponent,
            CarrouselComponent,
            DetailsComponent,
            InfoComponent,
        },
        layout: 'main'
    }
</script>