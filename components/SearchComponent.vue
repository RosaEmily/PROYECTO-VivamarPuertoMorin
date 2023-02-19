<template>
    <div class="card" style="border:none; box-shadow: 0px 9px 37px -22px rgb(0 0 0 / 75%);">
        <div class="card-body" style="padding: 35px">
            <h4 class="search-banner">Hola, puedes realizar tu reserva aquí:</h4>
            <form class="row pt-3">
                <div class="col-3 pb-3">
                    <Datepicker v-model="start_date" :min-date="date" :max-date="end_date" placeholder="Fecha de ingreso" locale="es" :format="format" :enable-time-picker="false" :disabled-dates="disabledDates" :highlight="disabledDates" highlight-disabled-days required></Datepicker>
                </div>
                <div class="col-3 pb-3">
                    <Datepicker v-model="end_date" :min-date="start_date" @update:model-value="selectEnd()" placeholder="Fecha de salida" locale="es" :format="format" :enable-time-picker="false" :disabled-dates="disabledDates" :highlight="disabledDates" highlight-disabled-days required></Datepicker>
                </div>
                <div class="col-3 pb-3">
                    <input v-model="adults" class="dp__input" type="text" @input="isNumber" placeholder="N° de adultos" required>
                </div>
                <div class="col-3 pb-3">
                    <input v-model="children" class="dp__input" type="text" @input="isNumber" placeholder="N° de niños" required>
                </div>
                <div class="col-4 pb-3">
                    <input v-model="referent" class="dp__input" type="text" placeholder="Nombres y apellidos" required>
                </div>
                <div class="col-3 pb-3">
                    <input v-model="phone" class="dp__input" type="text" @input="isNumber" placeholder="Teléfono / celular" required>
                </div>
                <div class="col-3 pb-3">
                    <input v-model="email" class="dp__input" type="text" placeholder="Correo electrónico" required>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary" style="width: 100%">
                        SOLICITAR
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    export default {
        components: { Datepicker },
        setup() {
            const date = new Date();
            const format = (date) => {
                var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                return date.toLocaleDateString("es-ES", options);
            }
            
            return {
                date,
                format,
            }
        },
        data() {
            return {
                start_date: null,
                end_date: null,
                adults: null,
                children: null,
                disabledDates: ['02/12/2023','02/11/2023'],
            };
        },
        methods: {
            selectEnd: function() {
                if(this.start_date&&this.end_date){
                    const inicio= this.start_date;
                    const fin= this.end_date;
                    const convert = 1000 * 60 * 60 * 24;
                    var cont=0;

                    for (let i = inicio; i <= fin; i = new Date(i.getTime() + convert)) {
                        //console.log("fecha",this.format(i))
                        for (let y = 0; y<this.disabledDates.length; y++){
                            //console.log("dish",this.format(new Date(this.disabledDates[y])))
                            if(this.format(i)==this.format(new Date(this.disabledDates[y]))){
                                cont++;
                            }
                        }
                    }
                    if(cont){
                        this.$swal({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'Algunas fechas entre '+this.format(this.start_date)+' y '+this.format(this.end_date)+' están ocupadas, por favor revise las fechas bloqueadas en el calendario y seleccione nuevamente.',
                            showConfirmButton: true,
                        });
                        this.end_date=null;
                    }
                }
                console.log("XD",this.start_date);
            },
            isNumber: function(event) {
                let inputValue = event.target.value;
                if (isNaN(inputValue)) {
                    this.persons = null;
                }
            }
        }
    }
</script>
