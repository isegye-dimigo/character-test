<script>
    import {createEventDispatcher} from 'svelte'
    export let question = "",ans1 = "",ans2 = "";
    import {mbti} from '../../../store'
    let idx = 0;
    const userResponse = [0,0,0,0]; //[e,n,t,j]
    const dispatch = createEventDispatcher();
    /**
   * @type {any[]}
   */
    const userResponseStr = [];
    let result = '';
    const pushUserResponse = (/** @type {number} */ a)=>{
        switch(a){
            case 0:
                switch(idx){
                    case 0:
                    case 1:
                    case 2:
                        userResponse[0]++;
                        break;
                    case 3:
                    case 4:
                    case 5:
                        userResponse[1]++;
                        break;
                    case 6:
                    case 7:
                    case 8:
                        userResponse[2]++;
                        break;
                    case 9:
                    case 10:
                    case 11:
                        userResponse[3]++;
                        break;
                }
            case 1:
                break;
        }
        if(idx == 11){
                console.log(userResponse);
                culUserResponse();
        }
    }
    const culUserResponse = ()=>{
        for(let i = 0; i<userResponse.length; i++){
            if(userResponse[i]>=2){
                switch(i){
                    case 0:
                        userResponseStr.push('e');
                        break;
                    case 1:
                        userResponseStr.push('n');
                        break;
                    case 2:
                        userResponseStr.push('t');
                        break;
                    case 3:
                        userResponseStr.push('j');
                        break;
                }
            }
            else{
                switch(i){
                    case 0:
                        userResponseStr.push('i');
                        break;
                    case 1:
                        userResponseStr.push('s');
                        break;
                    case 2:
                        userResponseStr.push('f');
                        break;
                    case 3:
                        userResponseStr.push('p');
                        break;
                }
            }
        }
        for(let i = 0; i<userResponseStr.length; i++){
            result += userResponseStr[i];
        }
        mbti.set(result);
        console.log($mbti);
    }

    const handleClick = (/** @type {number} */ a)=>{
        if(idx<12){
            dispatch('buttonClick');
            pushUserResponse(a);
            idx++;
        }
    }
</script>
<div>
    <div>{question}</div>
    <button on:click={()=>{handleClick(0)}}>{ans1}</button>
    <button on:click={()=>{handleClick(1)}}>{ans2}</button>
</div>