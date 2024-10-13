const ID = Object.assign(document.createElement('span'), {
    id: 'popupProjectID'
});

const title = Object.assign(document.createElement('span'), {
    id: 'popupTitle'
});

let whichProject;
const Projects = [{
        ID: "01",
        title: "Chatroom",
        headlines: [
            { headline: "Login" },
            { headline: "Register" },
            { headline: "Forgot Password" },
            { headline: "User activity and Chat" },
            { headline: "User Settings" },
            { headline: "Groups" },
            { headline: "News" },
            { headline: "Send News" },
            { headline: "User administartion" }
        ],
        texte: [{
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            },
            {
                text: "coming soon..."
            }
        ],
        imgs: [
            { src: "../img/WEB/Chatroom/Login.png" },
            { src: "../img/WEB/Chatroom/Register.png" },
            { src: "../img/WEB/Chatroom/ForgotPassword.png" },
            { src: "../img/WEB/Chatroom/Chat&Activity.png" },
            { src: "../img/WEB/Chatroom/Settings.png" },
            { src: "../img/WEB/Chatroom/Groups.png" },
            { src: "../img/WEB/Chatroom/News.png" },
            { src: "../img/WEB/Chatroom/SendNews.png" },
            { src: "../img/WEB/Chatroom/UserAdministartion.png" }
        ],
        stack: ["HTML", "CSS", "Javascript", "PHP"],
        git: " ",
        site: " "
    },
    {
        ID: "02",
        title: "TicTacToe",
        headlines: [
            { headline: "Startscreen" }
        ],
        texte: [{
            text: "What can I say ? It's just a simple TicTacToe game, play it like you know it"
        }],
        imgs: [
            { src: "../img/WEB/TicTacToe/Startscreen.png" }
        ],
        stack: ["HTML", "CSS", "Javascript"],
        git: "https://github.com/TheBrain08/TicTacToe",
        site: "../TicTacToe/index.html"
    },
    {
        ID: "03",
        title: "CoinFlip",
        headlines: [
            { headline: "Startscreen" }
        ],
        texte: [{
            text: "What can I say ? It's just a simple coinflipper, click on the button and flip the coin"
        }],
        imgs: [
            { src: "../img/WEB/CoinFlip/Startscreen.png" }
        ],
        stack: ["HTML", "CSS", "Javascript"],
        git: "https://github.com/TheBrain08/CoinFlip",
        site: "../CoinFlip/index.html"
    }
];

function loadPopupContent(project) {
    switch (project) {
        case "Chatroom":
            whichProject = 0;
            break;
        case "TicTacToe":
            whichProject = 1;
            break;
        case "CoinFlip":
            whichProject = 2;
            break;
        default:
            whichProject = 0;
            break;
    }

    const popupContentContainer = document.querySelector('.modal-content .row .col-12');
    popupContentContainer.innerHTML = ""; // Leeren des Inhalts

    if (Projects[whichProject].headlines) {
        const projectID = Object.assign(document.createElement('span'), {
            className: 'fw-semibold numbers',
            textContent: Projects[whichProject].ID + " "
        });

        const projectTitle = Object.assign(document.createElement('span'), {
            id: 'popupTitle',
            textContent: Projects[whichProject].title
        });

        const projectHeadlines = Object.assign(document.createElement('p'), {
            className: 'Headlines fw-lighter'
        });
        projectHeadlines.append(projectID, projectTitle);

        const headlineWrapper = Object.assign(document.createElement('div'), {
            className: 'row popupTextBlock'
        });

        Projects[whichProject].headlines.forEach((headline, index) => {
            const formattedIndex = (index + 1 < 10) ? "0" + (index + 1) : (index + 1);

            const headlineID = Object.assign(document.createElement('span'), {
                className: 'fw-semibold numbers popupDescriptionID',
                textContent: formattedIndex + " "
            });

            const headlineText = Object.assign(document.createElement('span'), {
                className: 'popupHeadlines',
                textContent: headline.headline
            });

            const headlineParagraph = Object.assign(document.createElement('p'), {
                className: 'HeadlinesSecond fw-lighter'
            });
            headlineParagraph.append(headlineID, headlineText);

            const textParagraph = Object.assign(document.createElement('p'), {
                className: 'popupText',
                textContent: Projects[whichProject].texte[index].text
            });

            const image = Object.assign(document.createElement('img'), {
                src: Projects[whichProject].imgs[index].src,
                alt: "",
                className: 'popupImg img-fluid d-block d-sm-block d-md-block d-xl-none d-xxl-none'
            });

            const col1 = Object.assign(document.createElement('div'), {
                className: 'col-12 col-sm-12 col-md-12 col-xl-6'
            });
            col1.append(headlineParagraph, textParagraph, image);

            const image2 = image.cloneNode(true);
            image2.classList.remove('d-block', 'd-sm-block', 'd-md-block', 'd-xl-none', 'd-xxl-none');
            image2.classList.add('d-none', 'd-xl-block')
            const col2 = Object.assign(document.createElement('div'), {
                className: 'col-6 col-sm-0 col-md-0 col-xl-6'
            });
            col2.appendChild(image2);

            const row = Object.assign(document.createElement('div'), {
                className: 'row popupTextBlock'
            });
            row.append(col1, col2);

            headlineWrapper.appendChild(row);
        });

        const stackHTML = Object.assign(document.createElement('p'), {
            className: 'fw-semibold',
            textContent: 'Stack: '
        });

        Projects[whichProject].stack.forEach((tech, index) => {
            const techSpan = Object.assign(document.createElement('span'), {
                className: 'ms-4 text-secondary',
                textContent: tech
            });
            stackHTML.appendChild(techSpan);
        });

        const buttonsContainer = Object.assign(document.createElement('div'), {});

        const gitButton = Object.assign(document.createElement('button'), {
            className: 'btn rounded',
            innerHTML: 'Go to Git <i class="bi bi-box-arrow-up-right"></i>'
        });

        const siteButton = Object.assign(document.createElement('button'), {
            className: 'btn rounded',
            innerHTML: 'Visit Site <i class="bi bi-box-arrow-up-right"></i>'
        });

        gitButton.addEventListener('click', function() {
            window.open(Projects[whichProject].git, '_blank');
        });

        siteButton.addEventListener('click', function() {
            window.open(Projects[whichProject].site, '_blank');
        });


        if (Projects[whichProject].title != "Chatroom") {
            buttonsContainer.append(gitButton, siteButton);
        }

        popupContentContainer.append(projectHeadlines, headlineWrapper, stackHTML, buttonsContainer);
    }
}