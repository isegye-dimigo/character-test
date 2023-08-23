<script lang="ts">
    import { goto } from "$app/navigation";
    import { mbti } from '../../store';
    import {mbtiCharacters} from '../../store';
    import SnsShare from "./SnsShare.svelte";
</script>
<div id="result-page">
    <p>내가 이세계에 가게된다면?</p>
    <h1>{mbtiCharacters[$mbti].name}</h1>
    <img src={mbtiCharacters[$mbti].imageRoute} alt='이미지로드에 실패했습니다'>
    <div>
        <p>결과를 친구에게 공유해보세요!</p>
        <div id="result-share-sns">
            <SnsShare/>
        </div>
    </div>
    <div>
        <button on:click={()=>{goto('/');}}>테스트 다시하기</button>
    </div>
</div>