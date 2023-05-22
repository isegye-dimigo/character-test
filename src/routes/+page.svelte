<script>
import { goto } from "$app/navigation";
const handleClick = ()=>{
    goto('/testPage');
}
</script>

<h1>영화 취향 테스트</h1>
<p>내가 이세계에 가게 된다면..?</p>
<button on:click={handleClick}>테스트하러 가기</button>
<style>
    @import '../static/style/global.css';
</style>