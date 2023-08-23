<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    export let question = "", ans1 = "", ans2 = "";
    import {mbti} from '../../store'

    let questionIdx = 0;
    const userResponseCounter = [0,0,0,0]; //[e/i,n/s,t/f,j/p]
    let stringMbtiResult = '';
    
    const dispatch = createEventDispatcher();
    const userMbtiArray:Array<string> = [];
    
    const detectBtnNum = (buttonNum:number)=>{
        //buttonNum = 0:첫번째버튼/buttonNum = 1:두번째버튼
        if(buttonNum === 0){
            switch(questionIdx){
                    case 0:
                    case 1:
                    case 2:
                        userResponseCounter[0]++;
                        break;
                    case 3:
                    case 4:
                    case 5:
                        userResponseCounter[1]++;
                        break;
                    case 6:
                    case 7:
                    case 8:
                        userResponseCounter[2]++;
                        break;
                    case 9:
                    case 10:
                    case 11:
                        userResponseCounter[3]++;
                        break;
            }
        }
        if(questionIdx === 11){
            culUserResponse();
        }
    }
    const culUserResponse = ()=>{
        for(let i = 0; i<userResponseCounter.length; i++){
            if(userResponseCounter[i]>=2){
                switch(i){
                    case 0:
                        userMbtiArray.push('e');
                        break;
                    case 1:
                        userMbtiArray.push('n');
                        break;
                    case 2:
                        userMbtiArray.push('t');
                        break;
                    case 3:
                        userMbtiArray.push('j');
                        break;
                }
            }
            else{
                switch(i){
                    case 0:
                        userMbtiArray.push('i');
                        break;
                    case 1:
                        userMbtiArray.push('s');
                        break;
                    case 2:
                        userMbtiArray.push('f');
                        break;
                    case 3:
                        userMbtiArray.push('p');
                        break;
                }
            }
        }

        for(let i = 0; i<userMbtiArray.length; i++){
            stringMbtiResult += userMbtiArray[i];
        }

        mbti.set(stringMbtiResult);
    }

    const detectClick = (buttonNum:number)=>{
        if(questionIdx<12){
            dispatch('buttonClick');
            detectBtnNum(buttonNum);
            questionIdx++;
        }
    }
</script>
<div id="question">{question}</div>
<div id="button-box">
    <button class="ans-btn" on:click={()=>{detectClick(0)}}>{ans1}</button>
    <button class="ans-btn" on:click={()=>{detectClick(1)}}>{ans2}</button>
</div>