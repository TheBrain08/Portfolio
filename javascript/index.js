function changeAboutMe(tab) {
    let me = document.getElementById('about-me-me');
    let skills = document.getElementById('about-me-skills');
    let expierence = document.getElementById('about-me-expierence');
    let education = document.getElementById('about-me-education');

    let meclass = document.getElementsByClassName('meclass');
    let skillsclass = document.getElementsByClassName('skillsclass');
    let exclass = document.getElementsByClassName('exclass');
    let educlass = document.getElementsByClassName('educlass');

    if (tab == 'me') {
        me.style.display = "block";
        skills.style.display = "none";
        expierence.style.display = "none";
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
        expierence.style.display = "none";
        education.style.display = "none";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.add("active");
        skillsclass[1].classList.add("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
    } else if (tab == 'expierence') {
        me.style.display = "none";
        skills.style.display = "none";
        expierence.style.display = "block";
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
        expierence.style.display = "none";
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