<template>
    <div class="card" style="border:none; box-shadow: 0px 9px 37px -22px rgb(0 0 0 / 75%);">
        <div class="card-body" style="padding: 35px">
            <h4 class="search-banner">En Vivamar contamos con:</h4>
            <br>
            <div class="row">
                <div class="col-6 col-sm-4 col-lg-2 text-center">
                    <span class="material-symbols-outlined" style="font-size:50px">
                        meeting_room
                    </span>
                    <div>
                        {{ n_bedrooms }} habitaciones
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-lg-2 text-center">
                    <span class="material-symbols-outlined" style="font-size:50px">
                        bedroom_child
                    </span>
                    <div>
                        {{ n_beds }} camas
                    </div>
                </div>
                <div class="col-sm-4 col-lg-2 d-none d-sm-block text-center">
                    <span class="material-symbols-outlined" style="font-size:50px">
                        bathroom
                    </span>
                    <div>
                        {{ n_bathrooms }} baños
                    </div>
                </div>
                <div class="col-sm-4 col-lg-2 d-none d-sm-block text-center">
                    <span class="material-symbols-outlined" style="font-size:50px">
                        cooking
                    </span>
                    <div>
                        {{ n_kitchen }} cocina
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-lg-2 text-center">
                    <span class="material-symbols-outlined" style="font-size:50px">
                        garage
                    </span>
                    <div>
                        {{ n_garages }} aparcamientos
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-lg-2 text-center">
                    <span class="material-symbols-outlined" style="font-size:50px">
                        pool
                    </span>
                    <div>
                        {{ n_pools }} piscinas
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {  },
        data() {
            return {
                n_bedrooms: 5,
                n_bathrooms: 6,
                n_beds: 18,
                n_garages: 3,
                n_pools: 2,
                n_kitchen: 1,
            };
        },
    }
</script>
