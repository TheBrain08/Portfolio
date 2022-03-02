var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none"
})

function sendMessage() {
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("Email").value;

    var Nachricht = document.getElementById("Nachricht").value;
    var request = new XMLHttpRequest();


    request.open("POST", "https://discord.com/api/webhooks/946778451313061958/8-HIHQjlzoraPb92MCS-nO9D7UDzyLKYjOJeTbnGpA5gDWfzdF0Nq4xkjUqNYtaKWNK7");
    // again, replace the url in the open method with yours
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        author: {
            name: "Vanera"
        },
        title: "My new embed",
        title: "Bewerbung",
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
        color: hexToDecimal("#05F6E2")
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