<script>
    import { goto } from "$app/navigation";
    import { mbti, mbtiCharacters } from '../../store';
    const resultUrl = '/result/'+mbtiCharacters[$mbti].code;
    goto(resultUrl);
</script>