import {ref} from "vue";


export default function () {

    const show = ref(false);
    const toggleFunc = () => {
        show.value = !show.value;
    }

    return { show, toggleFunc}
}