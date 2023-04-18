<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class="container-fluid p-0">
            <CarrouselComponent></CarrouselComponent>
        </div>
        <div class="container" style="margin-top: -80px">
            <DetailsComponent></DetailsComponent>
        </div>
        <div class="container py-4" style="margin-top: 30px">
            <InfoComponent></InfoComponent>
        </div>
        <div class="secondary-section">
            <div class="container pb-5">
                <LocationComponent></LocationComponent>
            </div>
        </div>
        <div class="primary-section">
            <div class="container py-4">
                <FooterComponent></FooterComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import CarrouselComponent from '../components/CarrouselComponent.vue';
    import DetailsComponent from '../components/DetailsComponent.vue';
    import InfoComponent from '../components/InfoComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import LocationComponent from '~~/components/LocationComponent.vue';
    export default {
        components: { 
            HeaderComponent,
            CarrouselComponent,
            DetailsComponent,
            InfoComponent,
            FooterComponent,
            LocationComponent,
        },
        layout: 'main'
    }
</script>