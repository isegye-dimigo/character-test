<script lang="ts">
const shareImgToKakaoTalk = () => {
    
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

<svelte:head>
    <meta property="og:site_name" content="본인 사이트 이름 넣는 곳" />
    <meta property="og:title" content="공유되는 컨텐츠의 제목" />
    <meta property="og:description" content="공유되는 컨텐츠의 설명" />
    <meta property="article:author" content="컨텐츠 작성자" />
    <meta property="og:url" content="공유될 접속 주소" />
    <meta property="og:image" content="썸네일로 쓰일 이미지 주소" />
</svelte:head>
<div>
    <button on:click={() => {shareImgToKakaoTalk();}}>KAKAOTALK</button>
    <button on:click={() => {shareImgToFacebook();}} title="페이스북으로 공유">FACEBOOK</button>
</div>