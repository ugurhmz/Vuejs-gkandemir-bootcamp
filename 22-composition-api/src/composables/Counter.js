import {computed, ref, watch} from "vue";


export default function () {

    const counter = ref(0);
    const oddOrEvenCounter = computed( () => counter.value %2 === 0  ? 'Çift' :'Tek');

    watch([counter, oddOrEvenCounter], ([newC, newO], [oldC, oldO]) => {
        console.log(oldO, " => ", newO)
    })

    return { counter, oddOrEvenCounter }

}