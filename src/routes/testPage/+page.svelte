<script lang="ts">
    import { goto } from '$app/navigation';
    import ShowQa from "./components/ShowQa.svelte";
    import ProcessBar from './components/ProcessBar.svelte';
    const QaList = [
        //e-i
        {question:'영화를볼 때 보통 나는',ans1:'다른사람들과 함께 본다',ans2:'혼자서 여유롭게 감상한다'},
        {question:'영화관에서 인생영화를 발견한 나는',ans1:'바로 친구들에게 그 영화를 보라고 말하고 다닌다',ans2:'와.. 이건 미쳤다..넷플릭스에 뜨면 집에서 한번 더 봐야지'},
        {question:'둘중에 더 선호하는 것은?',ans1:'영화관에서 친구들과 영화보기',ans2:'집에서 과자먹으며 넷플릭스 보기'},
        //n-s
        {question:'내가 좋아하는 영화 장르는?',ans1:'흥미진진한 판타지영화',ans2:'가슴 설레는 로멘스 영화'},
        {question:'영화를 보고 난 후 나의 모습은?',ans1:'혹시 나도 이 문을 열면 영화처럼다른 세계로 이동하는거 아니겠지..?',ans2:'아 재밌었다~ 다음에는 뭐보지?'},
        {question:'"우리 A관은 비상대피시 왼쪽 문으로 나가실 수 있습니다. 휴대폰 전원은 꺼주시길 바랍니다."',ans1:'혹시 영화볼 때 불나면 어떡하지?',ans2:'와 이제 광고 끝났네...영화 곧 시작하겠다'},
        //t-f
        {question:'집에서 단짝 친구와 영화를 보는 도중 슬픈 장면이 나와서 친구가 울고 있다. 이때 나는?',ans1:'왜울지..',ans2:'나도 슬퍼져서 같이 운다'},
        {question:'둘중에 더 좋다고 생각하는 것은?',ans1:'유튜브 영화 요약클립으로 영화 5편보기',ans2:'제대로 영화 한 편보기'},
        {question:'영화 리뷰를 달면 공짜로 음료수를 준다고 한다. 이때 내가 작성한 리뷰는?',ans1:'영화의 전반적인 흐름이 매끄럽고 연출이 멋진 것 같아요',ans2:'주인공도 예쁘고 노래가 너무 좋아요! 다들 꼭 보세요~'},
        //j-p
        {question:'영화 보기전 팝콘을 주문할 때 나의 모습은?',ans1:'나는 카라멜이나 치즈팝콘 먹으니까 오늘은 치즈팝콘 먹어야겠다',ans2:'맨날 팝콘만 먹으니까 좀 질리는거같아.. 오늘은 팝콘 말고 버터구이 오징어 먹어볼까?'},
        {question:'조조 영화를 보러 갈 때 나의 모습은?',ans1:'지금 영화시작 30분 전이니까 이제 나가면 여유롭겠지?',ans2:'헉... 영화시작 30분 남았는데 지금 일어났다.. 그냥 예매 취소하고 오후꺼 봐야지'},
        {question:'영화가 시작되기전 광고시간에 나의 모습은?',ans1:'혹시 모르니 미리 화장실 다녀와야겠다',ans2:'언제 시작하지..팝콘 맛있당'},
        ] as const;
        let idx:number = 0;
</script>
<div id="showqa-page">
    {#if idx>=0 && idx <12}
        <div>
            <ProcessBar progress={idx*10}/>
        </div>
        <ShowQa on:buttonClick={()=>{idx++;}} question={QaList[idx].question} ans1={QaList[idx].ans1} ans2={QaList[idx].ans2}/>
        <p>{idx+1}/12</p>
    {:else}
        <button on:click={()=>{goto('/result')}}>결과보기</button>
        <div>광고 배너 영역</div>
    {/if}
</div>