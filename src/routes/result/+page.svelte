<script lang="ts">
    import { goto } from "$app/navigation";
    import { mbti } from '../../store';
    import SnsShare from "./SnsShare.svelte";
    const characters: Record<string, Record<'name' | 'imageRoute', string>> = {
        'istj': {
            name:"기사",
            imageRoute:""
        },
        'estj': {
            name:"마왕",
            imageRoute:""
        },
        'intj': {
            name:"마법사",
            imageRoute:""
        },
        'entj': {
            name:"귀족",
            imageRoute:""
        },
        'infj': {
            name:"예언자",
            imageRoute:""
        },
        'enfj': {
            name:"상인",
            imageRoute:""
        },
        'isfj': {
            name:"힐러",
            imageRoute:""
        },
        'esfj': {
            name:"교황",
            imageRoute:""
        },
        'infp': {
            name:"엘프",
            imageRoute:""
        },
        'enfp': {
            name:"용사",
            imageRoute:""
        },
        'isfp': {
            name:"성직자",
            imageRoute:""
        },
        'esfp': {
            name:"성녀",
            imageRoute:""
        },
        'intp': {
            name:"마녀",
            imageRoute:""
        },
        'entp': {
            name:"왕",
            imageRoute:""
        },
        'istp': {
            name:"암살자",
            imageRoute:""
        },
        'estp': {
            name:"궁수",
            imageRoute:""
        },
    };
    const retest = ()=>{
        goto('/');
    }
</script>
<div id="result-page">
    <p>내가 이세계에 가게된다면?</p>
    <h1>{characters[$mbti].name}</h1>
    <img src={characters[$mbti].imageRoute} alt="이미지 로드에 실패했습니다.">
    <div>
        <p>결과를 친구에게 공유해보세요!</p>
        <SnsShare/>
    </div>
    <div>
        <button on:click={()=>{retest()}}>테스트 다시하기</button>
    </div>
</div>