function changeAboutMe(tab) {
    let me = document.getElementById('about-me-me');
    let skills = document.getElementById('about-me-skills');
    let experiences = document.getElementById('about-me-experiences');
    let education = document.getElementById('about-me-education');

    let meclass = document.getElementsByClassName('meclass');
    let skillsclass = document.getElementsByClassName('skillsclass');
    let exclass = document.getElementsByClassName('exclass');
    let educlass = document.getElementsByClassName('educlass');

    if (tab == 'me') {
        me.style.display = "block";
        skills.style.display = "none";
        experiences.style.display = "none";
        education.style.display = "none";
        meclass[0].classList.add("active");
        meclass[1].classList.add("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
    } else if (tab == 'skills') {
        me.style.display = "none";
        skills.style.display = "block";
        experiences.style.display = "none";
        education.style.display = "none";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.add("active");
        skillsclass[1].classList.add("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
    } else if (tab == 'experiences') {
        me.style.display = "none";
        skills.style.display = "none";
        experiences.style.display = "block";
        education.style.display = "none";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.add("active");
        exclass[1].classList.add("active");

    } else {
        me.style.display = "none";
        skills.style.display = "none";
        experiences.style.display = "none";
        education.style.display = "block";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.add("active");
        educlass[1].classList.add("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
    }
}

const modShapes = document.querySelector('.modShapes');
const anchorTags = modShapes.querySelectorAll('a');

function hoverHandler(event) {
    anchorTags.forEach(anchor => {
        if (anchor === event.currentTarget) {

            switch (anchor.id) {
                case 'a_hexagon_one':
                    anchor.style.transform = 'scale(1.3) translate(0px, -10px)';
                    anchor.style.transition = 'transform 1s';

                    a_hexagon_two.style.transform += 'translate(125px, 0px)';
                    a_hexagon_three.style.transform += 'translate(125px, 0px)';
                    a_hexagon_four.style.transform += 'translate(120px, 50px)';
                    a_hexagon_five.style.transform += 'translate(120px, 50px)';

                    break;
                case 'a_hexagon_two':
                    anchor.style.transform = 'scale(1.3) translate(-65px, -10px)';
                    anchor.style.transition = 'transform 1s';

                    a_hexagon_one.style.transform += 'translate(65px, 0px)';
                    a_hexagon_three.style.transform += 'translate(170px, 0px)';
                    a_hexagon_four.style.transform += 'translate(100px, 75px)';
                    a_hexagon_five.style.transform += 'translate(115px, 75px)';
                    break;
                case 'a_hexagon_three':
                    anchor.style.transform = 'scale(1.3) translate(-145px, -10px)';
                    anchor.style.transition = 'transform 1s';

                    a_hexagon_one.style.transform += 'translate(100px, 0px)';
                    a_hexagon_two.style.transform += 'translate(100px, 0px)';
                    a_hexagon_four.style.transform += 'translate(75px, 50px)';
                    a_hexagon_five.style.transform += 'translate(75px, 50px)';

                    break;
                case 'a_hexagon_four':
                    anchor.style.transform = 'scale(1.3) translate(-50px, -50px)';
                    anchor.style.transition = 'transform 1s';

                    a_hexagon_one.style.transform += 'translate(85px, 0px)';
                    a_hexagon_two.style.transform += 'translate(85px, 0px)';
                    a_hexagon_three.style.transform += 'translate(85px, 0px)';
                    a_hexagon_five.style.transform += 'translate(125px, 50px)';
                    break;
                case 'a_hexagon_five':
                    anchor.style.transform = 'scale(1.3) translate(-100px, -50px)';
                    anchor.style.transition = 'transform 1s';

                    a_hexagon_one.style.transform += 'translate(180px, 5px)';
                    a_hexagon_two.style.transform += 'translate(180px, 5px)';
                    a_hexagon_three.style.transform += 'translate(180px, 5px)';
                    a_hexagon_four.style.transform += 'translate(90px, 50px)';
                    break;
            }

        } else {
            anchor.style.transform += 'scale(0.7)';
            anchor.style.transition = 'transform 1s ease';

        }
    });
}

function resetHandler() {
    anchorTags.forEach(anchor => {
        anchor.style.transform = 'scale(1)';
        anchor.style.transition = 'transform 1s ease';
    });
}

anchorTags.forEach(anchor => {
    anchor.addEventListener('mouseover', hoverHandler);
    anchor.addEventListener('mouseout', resetHandler);
});

function sendMessage() {
    var Name = document.getElementById("namef").value;
    var Email = document.getElementById("Email").value;

    var Nachricht = document.getElementById("Nachricht").value;
    var request = new XMLHttpRequest();


    request.open("POST", "https://discord.com/api/webhooks/946778451313061958/8-HIHQjlzoraPb92MCS-nO9D7UDzyLKYjOJeTbnGpA5gDWfzdF0Nq4xkjUqNYtaKWNK7");
    // again, replace the url in the open method with yours
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        author: {
            name: "Portfolio Webpage"
        },
        title: "Portfolio",
        fields: [{
            "name": "Name",
            "value": "> " + Name
        }, {
            "name": "Email",
            "value": "> " + Email
        }, {
            "name": "Message",
            "value": "> " + Nachricht
        }],
        "thumbnail": {
            "url": "https://iili.io/EKWC74.th.png"
        },
        color: hexToDecimal("#F11F4E")
    }

    var params = {
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

    // function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
    alert("Danke für deine Nachricht")
}


let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('themeSwitch');

function enableLightmode() {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    document.getElementById('logo').src = "../img/logo-lightmode.png";
}

function disableLightmode() {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    document.getElementById('logo').src = "../img/logo.png";
}

if (lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
});