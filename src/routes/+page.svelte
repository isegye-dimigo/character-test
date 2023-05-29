<script lang="ts">
import { goto } from "$app/navigation";
const handleClick = ()=>{
    goto('/testPage');
}
let visitNum = 0;
</script>
<div id="first-page">
    <div>
        <h1>영화 취향 테스트</h1>
        <p>내가 이세계에 가게 된다면..?</p>
        <button on:click={handleClick}>테스트하러 가기</button>
        <p>{visitNum}</p>
    </div>
</div>

<style>
    @import '../static/style/global.css';
</style>