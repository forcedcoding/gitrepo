async function fetchdata(params) {
    try {
        let responce=await fetch('https://api.github.com/users?per_page=10')
        let data=await responce.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}
fetchdata();
async function fetchData() {
    try {
        // Assuming data is fetched or initialized here. Example:
        let response = await fetch('your-api-endpoint-url');
        let data = await response.json();

        data.forEach((element) => {
            let h1 = document.createElement("h1");
            h1.textContent = element.node_id;

            let a = document.createElement("a");
            a.textContent = element.node_id;
            a.setAttribute("href", element.html_url);

            // Append to document or another element, e.g., document.body
            document.body.appendChild(h1);
            document.body.appendChild(a);
        });

    } catch (error) {    
        console.log(error);
    }
}