

    // Javascript code
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://cpvaxvw75jcmfsovpuxxicjyqa0jspvh.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ' Views: ${data}';
}

updateCounter();