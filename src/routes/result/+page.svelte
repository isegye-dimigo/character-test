<script lang="ts">
    import { mbti } from '../../store';
    import SnsShare from "./SnsShare.svelte";
    const characters: Record<string, Record<'name' | 'description', string>> = {
        'istj': {
            name:"기사",
            description:""
        },
        'estj': {
            name:"마왕",
            description:""
        },
        'intj': {
            name:"마법사",
            description:""
        },
        'entj': {
            name:"귀족",
            description:""
        },
        'infj': {
            name:"예언자",
            description:""
        },
        'enfj': {
            name:"상인",
            description:""
        },
        'isfj': {
            name:"힐러",
            description:""
        },
        'esfj': {
            name:"교황",
            description:""
        },
        'infp': {
            name:"엘프",
            description:""
        },
        'enfp': {
            name:"용사",
            description:""
        },
        'isfp': {
            name:"성직자",
            description:""
        },
        'esfp': {
            name:"성녀",
            description:""
        },
        'intp': {
            name:"마녀",
            description:""
        },
        'entp': {
            name:"왕",
            description:""
        },
        'istp': {
            name:"암살자",
            description:""
        },
        'estp': {
            name:"궁수",
            description:""
        },
    };
</script>
<p>내가 이세계에 가게된다면?</p>
<h1>{characters[$mbti].name}</h1>
<p>{characters[$mbti].description}</p>
<img src="" alt="">
<div>
    <SnsShare/>
</div>