<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let visitorNum = 0;

    async function getVisitorNum() {
        const response = await fetch("/api", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        });
        const res =  await response.json();
        visitorNum = res;
    }

    onMount(async ()=>{
        await getVisitorNum();
    })

</script>
<div id="first-page">
    <div id="title">
        <h1>영화 취향 테스트</h1>
        <p>내가 이세계에 가게 된다면..?</p>
    </div>
    <button id="run-test-btn" on:click={()=>{goto('/testPage')}}>테스트하러 가기</button>
    <p>{visitorNum}명이 테스트에 참여했어요!</p>
</div>

<style>
    @import '../../static/style/global.css';
</style>