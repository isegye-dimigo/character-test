<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { getVisitorNum } from '../api/getVisitorNum.cjs';
    let visitorNum = 0;
    onMount(async ()=>{
        const data = await getVisitorNum();
        console.log(data);
        visitorNum = parseInt(data);
    })
    const handleClick = ()=>{
        goto('/testPage');
    }
</script>
<div id="first-page">
    <div id="title">
        <h1>영화 취향 테스트</h1>
        <p>내가 이세계에 가게 된다면..?</p>
    </div>
    <button id="run-test-btn" on:click={handleClick}>테스트하러 가기</button>
    <p>{visitorNum}명이 테스트에 참여했어요!</p>
</div>

<style>
    @import '../static/style/global.css';
</style>