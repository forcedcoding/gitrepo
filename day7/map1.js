async function fetchdata(params) {
    try {
        let responce=await fetch('')
        let data=await responce.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}
fetchdata();