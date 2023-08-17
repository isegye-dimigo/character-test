<script lang="ts">
    import { goto } from "$app/navigation";
    import { mbti } from '../../store';
    import SnsShare from "./SnsShare.svelte";
    const characters: Record<string, Record<'name' | 'imageRoute', string>> = {
        'istj': {
            name:"기사",
            imageRoute:"/img/istj"
        },
        'estj': {
            name:"마왕",
            imageRoute:"/img/estj"
        },
        'intj': {
            name:"마법사",
            imageRoute:"/img/intj"
        },
        'entj': {
            name:"귀족",
            imageRoute:"/img/entj"
        },
        'infj': {
            name:"예언자",
            imageRoute:"/img/infj"
        },
        'enfj': {
            name:"상인",
            imageRoute:"/img/enfj"
        },
        'isfj': {
            name:"힐러",
            imageRoute:"/img/isfj"
        },
        'esfj': {
            name:"교황",
            imageRoute:"/img/esfj"
        },
        'infp': {
            name:"엘프",
            imageRoute:"/img/infp"
        },
        'enfp': {
            name:"용사",
            imageRoute:"/img/enfp"
        },
        'isfp': {
            name:"성직자",
            imageRoute:"/img/isfp"
        },
        'esfp': {
            name:"성녀",
            imageRoute:"/img/esfp"
        },
        'intp': {
            name:"마녀",
            imageRoute:"/img/intp"
        },
        'entp': {
            name:"왕",
            imageRoute:"/img/entp"
        },
        'istp': {
            name:"암살자",
            imageRoute:"/img/istp"
        },
        'estp': {
            name:"궁수",
            imageRoute:"/img/estp"
        },
    };
    const retest = ()=>{
        goto('/');
    }
</script>
<div id="result-page">
    <p>내가 이세계에 가게된다면?</p>
    <h1>{characters[$mbti].name}</h1>
    <img src={characters[$mbti].imageRoute} alt='이미지로드에 실패했습니다'>
    <div>
        <p>결과를 친구에게 공유해보세요!</p>
        <div id="result-share-sns">
            <SnsShare/>
        </div>
    </div>
    <div>
        <button on:click={()=>{retest()}}>테스트 다시하기</button>
    </div>
</div>