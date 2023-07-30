<script lang="ts">
    import {browser} from '$app/environment'
    import { mbti } from '../../store';
    const shareImgToKakaoTalk = () => {
        console.log('Im problem maker')
    };
    const shareImgToFacebook = () => {
        let facebookShareUrl= "https://www.facebook.com/sharer/sharer.php?u=" + "localhost:5173/result";
        window.open(facebookShareUrl,"Share on Facebook","scrollbars=no, width=500, height=500");
    };
    let imgUrl = "/img/"+$mbti+".jpg";
</script>

<a href="javascript:none" on:click={()=>{shareImgToFacebook()}}><img src="/img/facebook-color.svg" alt="facebook공유"></a>
<a href="javascript:none" on:click={()=>{shareImgToKakaoTalk()}}><img src="/img/kakaotalk-color.svg" alt="kakaotalk공유"></a>
<a href={imgUrl} download><img src="/img/download_img.svg" alt="이미지 저장"></a>

{#if browser}
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js" integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh" crossorigin="anonymous"></script>
<script>
    alert('asdf');
    if(!Kakao.isInitialized()){
        Kakao.init('f0946b5a1f17ea2319f8e2c6739a45a4');
    }
    const sendKakao = () => {
    Kakao.Link.sendScrap({
    requestUrl: 'http://localhost:/5173', // 페이지 url
    templateId: 96112, // 메시지템플릿 번호
    templateArgs: {
            PROFILE : '${profile}' // 프로필 이미지 주소 ${PROFILE}
            THUMB: '${썸네일}', // 썸네일 주소 ${THUMB}
            TITLE: '제목 텍스트입니다', // 제목 텍스트 ${TITLE}
            DESC: '설명 텍스트입니다', // 설명 텍스트 ${DESC}
        },
    });
    };
</script>
{/if}