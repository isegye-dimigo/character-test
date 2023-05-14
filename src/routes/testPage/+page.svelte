<script>
    import { goto } from '$app/navigation';
    import ShowQa from "./components/showQa.svelte";
    const QaList = [
        {id:0, question:'e/i',ans1:'답1',ans2:'답2', selected:-1},
        {id:1, question:'e/i',ans1:'답1',ans2:'답2', selected:-1},
        {id:2, question:'e/i',ans1:'답1',ans2:'답2', selected:-1},
        {id:3, question:'n/s',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'n/s',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'n/s',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'t/f',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'t/f',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'t/f',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'j/p',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'j/p',ans1:'답1',ans2:'답2', selected:-1},
        {id:4, question:'j/p',ans1:'답1',ans2:'답2', selected:-1},
        ];
        let idx = -1;
</script>
{#if idx>=0 && idx <12}
<ShowQa on:buttonClick={()=>{idx++;}} question={QaList[idx].question} ans1={QaList[idx].ans1} ans2={QaList[idx].ans2}/>
{:else if idx == -1}
<button on:click={()=>{idx++;}} >시작하기</button>
{:else}
<button on:click={()=>{goto('/result')}}>결과보기</button>
{/if}