// const header = document.querySelector("header");
// window.addEventListener("scroll", function(){

//     header.classList.toggle("sticky", this.window.scrollY >100);
// });

// let menu=document.querySelector("#menu-icon");
// let navlist=document.querySelector(".navlist");

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('open')
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navlist.classList.remove('open')
// };

const url = "https://portfolio-backend-5xul.onrender.com";


const container = document.getElementById('animation-container');
const animation = bodymovin.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './gifs/coding.json' // Replace with your animation file URL
});


VANTA.WAVES({
    el: "#top-section",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#151a20',
    shininess: 17.00,
    waveSpeed: 0.95,
    zoom: 0.88
})

// VANTA.DOTS({
//   el: "#mid-section",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   color: "#915eff",
//   color2: "#915eff",
//   backgroundColor: "#0e0f1f",
//   size: 3.90,
//   showLines: false
// })


window.ityped.init(document.querySelector('#user-detail-skill'),{
    strings: ['Full Stack Web Developer','NodeJs Backend Developer'],
    loop: true
})

window.ityped.init(document.querySelector('#about-section-skill'),{
    strings: ['Full Stack Web Developer','NodeJs Backend Developer'],
    loop: true
})


const toggleMenu = () => document.body.classList.toggle("open");


const form = document.querySelector("form");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const submit = document.getElementById("submit");
    submit.style.display = "none";
    showLoader();
    const message = {
        name:form.name.value,
        email:form.email.value,
        message:form.message.value
    }
    try {
        const request = await fetch(`${url}/message`, {
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(message),
        })
    
        const response = await request.json();
    
        if(response.ok){
            Swal.fire(
                'Thanks for Reaching out',
                `${response.msg}`,
                'success'
            )
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: `${response.msg}`,
            })
        }
        hideLoader();
        submit.style.display = "block";
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Please Contact through call',
        })
        hideLoader();
        submit.style.display = "block";
    }
})