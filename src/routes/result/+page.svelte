<script>
    import {data} from '../../store';
    let charId = -1;
    const character = [
        {name:"기사",desc:""},
        {name:"마왕",desc:""},
        {name:"마법사",desc:""},
        {name:"교황",desc:""},
        {name:"고블린",desc:""},
        {name:"상인",desc:""},
        {name:"힐러",desc:""},
        {name:"귀족",desc:""},
        {name:"엘프",desc:""},
        {name:"용사",desc:""},
        {name:"성직자",desc:""},
        {name:"성녀",desc:""},
        {name:"마녀",desc:""},
        {name:"왕",desc:""},
        {name:"궁수",desc:""},
        {name:"암살자",desc:""},
    ];
    console.log($data);
    switch($data){
        case 'istj':
            charId = 0;
            break;
        case 'estj':
            charId = 1;
            break;
        case 'intj':
            charId = 2;
            break;
        case 'entj':
            charId = 3;
            break;
        case 'infj':
            charId = 4;
            break;
        case 'enfj':
            charId = 5;
            break;
        case 'isfj':
            charId = 6;
            break;
        case 'esfj':
            charId = 7;
            break;
        case 'infp':
            charId = 8;
            break;
        case 'enfp':
            charId = 9;
            break;
        case 'isfp':
            charId = 10;
            break;
        case 'esfp':
            charId = 11;
            break;
        case 'intp':
            charId = 12;
            break;
        case 'entp':
            charId = 13;
            break;
        case 'istp':
            charId = 14;
            break;
        case 'estp':
            charId = 15;
            break;
    }
</script>
<h1>{character[charId].name}</h1>
<p>{character[charId].desc}</p>