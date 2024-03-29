import { writable} from "svelte/store";

export const mbti = writable<string>("undefined");

export const QaList = [
    //e&i
    {question:'영화를볼 때 보통 나는',ans1:'다른사람들과 함께 본다',ans2:'혼자서 여유롭게 감상한다'},
    {question:'영화관에서 인생영화를 발견한 나는',ans1:'바로 친구들에게 그 영화를 보라고 말하고 다닌다',ans2:'와.. 이건 미쳤다..넷플릭스에 뜨면 집에서 한번 더 봐야지'},
    {question:'둘중에 더 선호하는 것은?',ans1:'영화관에서 친구들과 영화보기',ans2:'집에서 과자먹으며 넷플릭스 보기'},
    //n&s
    {question:'내가 좋아하는 영화 장르는?',ans1:'흥미진진한 판타지영화',ans2:'두근두근 설레는 로멘스 영화'},
    {question:'영화를 보고 난 후 나의 모습은?',ans1:'혹시 나도 이 문을 열면 영화처럼다른 세계로 이동하는거 아니겠지..?',ans2:'아 재밌었다~ 다음에는 뭐보지?'},
    {question:'"우리 A관은 비상대피시 왼쪽 문으로 나가실 수 있습니다. 휴대폰 전원은 꺼주시길 바랍니다."',ans1:'혹시 영화볼 때 불나면 어떡하지?',ans2:'와 이제 광고 끝났네...영화 곧 시작하겠다'},
    //t&f
    {question:'집에서 단짝 친구와 영화를 보는 도중 슬픈 장면이 나와서 친구가 울고 있다. 이때 나는?',ans1:'왜울지..',ans2:'나도 슬퍼져서 같이 운다'},
    {question:'영화 주인공이 위기에 처해있는 상황! 이때 당신의 생각은?',ans1:'어차피 주인공이니까 살아남겠지..주인공은 이 상황을 어떻게 헤쳐나갈까?',ans2:'헉.. 주인공이 저런 상황에 부딪히다니 어떡해...잘 됐으면 좋겠다'},
    {question:'영화 리뷰를 달면 공짜로 음료수를 준다고 한다. 이때 내가 작성한 리뷰는?',ans1:'영화의 전반적인 흐름이 매끄럽고 연출이 멋진 것 같아요',ans2:'주인공도 예쁘고 내용이 너무 감동적이에요! 다들 꼭 보세요~'},
    //j&p
    {question:'영화 보기전 팝콘을 주문할 때 나의 모습은?',ans1:'나는 카라멜이나 치즈팝콘 먹으니까 오늘은 치즈팝콘 먹어야겠다',ans2:'맨날 팝콘만 먹으니까 좀 질리는거같아.. 오늘은 팝콘 말고 버터구이 오징어 먹어볼까?'},
    {question:'조조 영화를 보러 갈 때 나의 모습은?',ans1:'지금 영화시작 30분 전이니까 이제 나가면 여유롭겠지?',ans2:'헉... 영화시작 30분 남았는데 지금 일어났다.. 그냥 예매 취소하고 오후꺼 봐야지'},
    {question:'영화가 시작되기전 광고시간에 나의 모습은?',ans1:'혹시 모르니 미리 화장실 다녀와야겠다',ans2:'언제 시작하지..팝콘 맛있당'},
] as const;

const codeList = ['1w8gse', 'yfjx9p', 'v3hzbr', 'qcktn7', 'dmwla4', 'spkb5o', 'i0eu6r', 'hn2tyl', '5r4ipg', 'lmtv3d', '9ab7wz', '8vrtxj', 'fxslny', '3c0pge', 'rd7jyx', '2iwp6n'] as const;
const mbtiList = ['istj','estj','intj','entj','infj','enfj','isfj','esfj','infp','enfp','isfp','esfp','intp','entp','istp','estp'];

export const convertMbtiCodeToString = (code:string)=>{
    for(let i = 0; i<codeList.length; i++){
        if(codeList[i] == code){
            return mbtiList[i];
        }
    }
}

export const mbtiCharacters: Record<string, Record<'name' | 'imageRoute' |'code' , string>> = {
    'istj': {
        name:"기사",
        imageRoute:"/img/istj",
        code: codeList[0],
    },
    'estj': {
        name:"마왕",
        imageRoute:"/img/estj",
        code: codeList[1],
    },
    'intj': {
        name:"마법사",
        imageRoute:"/img/intj",
        code: codeList[2],
    },
    'entj': {
        name:"귀족",
        imageRoute:"/img/entj",
        code: codeList[3],
    },
    'infj': {
        name:"예언자",
        imageRoute:"/img/infj",
        code: codeList[4],
    },
    'enfj': {
        name:"상인",
        imageRoute:"/img/enfj",
        code: codeList[5],
    },
    'isfj': {
        name:"힐러",
        imageRoute:"/img/isfj",
        code: codeList[6],
    },
    'esfj': {
        name:"교황",
        imageRoute:"/img/esfj",
        code: codeList[7],
    },
    'infp': {
        name:"엘프",
        imageRoute:"/img/infp",
        code: codeList[8],
    },
    'enfp': {
        name:"용사",
        imageRoute:"/img/enfp",
        code: codeList[9],
    },
    'isfp': {
        name:"성직자",
        imageRoute:"/img/isfp",
        code: codeList[10],
    },
    'esfp': {
        name:"성녀",
        imageRoute:"/img/esfp",
        code: codeList[11],
    },
    'intp': {
        name:"마녀",
        imageRoute:"/img/intp",
        code: codeList[12],
    },
    'entp': {
        name:"왕",
        imageRoute:"/img/entp",
        code: codeList[13],
    },
    'istp': {
        name:"암살자",
        imageRoute:"/img/istp",
        code: codeList[14],
    },
    'estp': {
        name:"궁수",
        imageRoute:"/img/estp",
        code: codeList[15],
    },
};