<script lang="ts">
    import { mbti } from '../../../store';
    const shareImgToFacebook = () => {
        let facebookShareUrl= "https://www.facebook.com/sharer/sharer.php?u=" + "localhost:5173/result";
        window.open(facebookShareUrl,"Share on Facebook","scrollbars=no, width=500, height=500");
    };
    const copyUrl = (url:string) =>{
        window.navigator.clipboard.writeText(url).then(() => {
            alert("복사되었습니다!");
        });
    }
    let imgUrl = "/img/"+$mbti+".jpg";

</script>

<a href="javascript:none" on:click={()=>{shareImgToFacebook()}}><img src="/img/facebook-color.svg" alt="facebook공유"></a>
<a href="javascript:none" on:click={()=>{copyUrl(window.location.href)}}><img src="/img/link.svg" alt="url복사"></a>
<a href={imgUrl} download><img src="/img/download_img.svg" alt="이미지 저장"></a>