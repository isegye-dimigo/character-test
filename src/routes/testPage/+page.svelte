<script lang="ts">
    import { goto } from '$app/navigation';
    import {QaList} from '../../store'
    import ShowQa from "./ShowQa.svelte";

    let questionIdx:number = 0;
</script>
<div id="showqa-page">
    {#if questionIdx>=0 && questionIdx<12}
        <div>
            <progress id="progress" value="{questionIdx*10}" max="120"></progress>
        </div>
        <ShowQa on:buttonClick={()=>{questionIdx++;}} question={QaList[questionIdx].question} ans1={QaList[questionIdx].ans1} ans2={QaList[questionIdx].ans2}/>
        <p>{questionIdx+1}/12</p>
    {:else}
        <button on:click={()=>{goto('/result')}}>결과보기</button>
        <div>광고 배너 영역</div>
    {/if}
</div>