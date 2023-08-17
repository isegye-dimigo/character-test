<script>
    export let data;
    import {mbti} from '../../../store';
    import { goto } from "$app/navigation";
    mbti.set(data.slug);
</script>

<h1>{data.slug}</h1>
<button on:click={()=>{goto('/result');}}></button>