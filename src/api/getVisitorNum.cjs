export async function getVisitorNum(){
    return await fetch('http://localhost:3000/api/getVisitorNum',{
        method: 'POST',
        credentials: 'include',
        headers:{
            'Content-Type':'text/plain'
        }
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error=>{
        console.error('Error:',error);
        throw error;
    })
}