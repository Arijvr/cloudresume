

    // Javascript code
const counter = document.querySelector(".visitor-counter");
async function updateCounter(){
    let response = await fetch("https://cpvaxvw75jcmfsovpuxxicjyqa0jspvh.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();