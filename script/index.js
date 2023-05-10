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
    el: '#top-section',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    zoom: 0.6,
    waveSpeed: 0.55,
    scaleMobile: 1.00,
    color: '#132239'
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

// Hero section
window.ityped.init(document.querySelector('#user-detail-skill'),{
    strings: ['Full Stack Web Developer','NodeJs Backend Developer'],
    loop: true
})

// About section
window.ityped.init(document.querySelector('#about-section-skill'),{
    strings: ['Full Stack Web Developer','NodeJs Backend Developer'],
    loop: true
})


const toggleMenu = () => {
    document.getElementById("nav-menu").style.backdropFilter = "none";
    document.body.classList.toggle("open");
};
let temp = 0;
const addFilter = () => {
    temp++;
    if(temp % 2 == 0){
        document.getElementById("nav-menu").style.backdropFilter = "blur(16px)"
    }
}

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
        Swal.fire(
            'Thanks for Reaching out',
            `I'll revert back in 24 hrs`,
            'success'
        )
        hideLoader();
        submit.style.display = "block";
        const request = await fetch(`${url}/message`, {
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(message),
        })
    
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Please Contact through call',
        })
        hideLoader();
        submit.style.display = "block";
    }
    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
})

AOS.init();