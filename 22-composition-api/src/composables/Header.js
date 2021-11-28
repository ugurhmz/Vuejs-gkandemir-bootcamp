import {ref, computed} from "vue";


export default function(){
    const title = ref("Bu bir değişen başlıktır.")
    const titleLengthMessage = computed( () => title.value.length + " adet karakter yazdınız.");

    return { title, titleLengthMessage };

}