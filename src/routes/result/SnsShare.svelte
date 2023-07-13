<script lang="ts">
const shareImgToKakaoTalk = () => {
    //kakaotalk code
};
const shareImgToFacebook = () => {
    let facebookShareUrl: string = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(document.URL);
    window.open(
        facebookShareUrl,
        "Share on Facebook",
        "scrollbars=no, width=500, height=500"
        );
    };
</script>
<div>
    <a href="javascript:none" on:click={()=>{shareImgToFacebook()}}><img src="../../static/img/kakaotalk-color.svg" alt="facebook공유"></a>
    <a href="javascript:none" on:click={()=>{shareImgToKakaoTalk()}}><img src="../../static/img/kakaotalk-color.svg" alt="kakaotalk공유"></a>
</div>