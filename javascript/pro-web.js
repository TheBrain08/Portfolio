const ID = document.getElementById('popupProjectID');
const title = document.getElementById('popupTitle');
let whichPoject;


const Projects = [{
        ID: "01",
        title: " Chatroom",
        headlines: [{ headline: " Login" }, { headline: " User activity and Chat" }, { headline: " User Settings" },
            { headline: " Groups" }, { headline: " News" }, { headline: " Send News" }, { headline: " User administartion" }
        ],
        texte: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }],
        imgs: [{
                src: "../img/WEB/Chatroom/Login.png"
            },
            {
                src: "../img/WEB/Chatroom/Chat&Activity.png"
            },
            {
                src: "../img/WEB/Chatroom/Settings.png"
            },
            {
                src: "../img/WEB/Chatroom/Groups.png"
            },
            {
                src: "../img/WEB/Chatroom/News.png"
            },
            {
                src: "../img/WEB/Chatroom/SendNews.png"
            },
            {
                src: "../img/WEB/Chatroom/UserAdministartion.png"
            }
        ],
        stack: ["HTML", "CSS", "Javascript", "PHP"]
    },
    {
        ID: "01",
        title: " Chatroom",
        headlines: [{ headline: " Login" }, { headline: " User activity and Chat" }, { headline: " User Settings" },
            { headline: " Groups" }, { headline: " News" }, { headline: " Send News" }, { headline: " User administartion" },
        ],
        texte: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }],
        imgs: [{
                src: "../img/WEB/Chatroom/Login.png"
            },
            {
                src: "../img/WEB/Chatroom/Chat&Activity.png"
            },
            {
                src: "../img/WEB/Chatroom/Settings.png"
            },
            {
                src: "../img/WEB/Chatroom/Groups.png"
            },
            {
                src: "../img/WEB/Chatroom/News.png"
            },
            {
                src: "../img/WEB/Chatroom/SendNews.png"
            },
            {
                src: "../img/WEB/Chatroom/UserAdministartion.png"
            }
        ],
        stack: ["HTML", "CSS", "Javascript", "PHP"]
    }
];

function loadPopupContent(project) {
    switch (project) {
        case "Chatroom":
            whichPoject = 0;
            break;
        default:
            whichPoject = 1;
            break;
    }

    const popupContentContainer = document.querySelector('.modal-content .row .col-12');
    popupContentContainer.innerHTML = ""; // Leeren des Inhalts

    if (Projects[whichPoject].headlines) {
        const projectID = document.createElement('span');
        projectID.classList.add('fw-semibold', 'numbers');
        projectID.id = 'popupProjectID';
        projectID.textContent = Projects[whichPoject].ID;

        const projectTitle = document.createElement('span');
        projectTitle.id = 'popupTitle';
        projectTitle.textContent = Projects[whichPoject].title;

        const projectHeadlines = document.createElement('p');
        projectHeadlines.classList.add('Headlines', 'fw-lighter');
        projectHeadlines.appendChild(projectID);
        projectHeadlines.appendChild(projectTitle);

        const headlineWrapper = document.createElement('div');
        headlineWrapper.classList.add('row', 'popupTextBlock');

        Projects[whichPoject].headlines.forEach((headline, index) => {
            const formattedIndex = (index + 1 < 10) ? "0" + (index + 1) : (index + 1);

            const headlineID = document.createElement('span');
            headlineID.classList.add('fw-semibold', 'numbers', 'popupDescriptionID');
            headlineID.textContent = formattedIndex;

            const headlineText = document.createElement('span');
            headlineText.classList.add('popupHeadlines');
            headlineText.textContent = headline.headline;

            const headlineParagraph = document.createElement('p');
            headlineParagraph.classList.add('HeadlinesSecond', 'fw-lighter');
            headlineParagraph.appendChild(headlineID);
            headlineParagraph.appendChild(headlineText);

            const textParagraph = document.createElement('p');
            textParagraph.classList.add('popupText');
            textParagraph.textContent = Projects[whichPoject].texte[index].text;

            const image = document.createElement('img');
            image.src = Projects[whichPoject].imgs[index].src;
            image.alt = "";
            image.classList.add('popupImg', 'img-fluid', 'd-block', 'd-sm-block', 'd-md-block', 'd-xl-none', 'd-xxl-none');

            const col1 = document.createElement('div');
            col1.classList.add('col-12', 'col-sm-12', 'col-md-12', 'col-xl-6');
            col1.appendChild(headlineParagraph);
            col1.appendChild(textParagraph);
            col1.appendChild(image);

            const image2 = image.cloneNode(true);
            image2.classList.remove('d-block', 'd-sm-block', 'd-md-block', 'd-xl-none', 'd-xxl-none');
            const col2 = document.createElement('div');
            col2.classList.add('col-6', 'col-sm-0', 'col-md-0', 'col-xl-6');
            col2.appendChild(image2);

            const row = document.createElement('div');
            row.classList.add('row', 'popupTextBlock');
            row.appendChild(col1);
            row.appendChild(col2);

            headlineWrapper.appendChild(row);
        });

        const stackHTML = document.createElement('p');
        stackHTML.classList.add('fw-semibold');
        stackHTML.textContent = 'Stack: ';

        Projects[whichPoject].stack.forEach((tech, index) => {
            const techSpan = document.createElement('span');
            techSpan.classList.add('ms-4', 'text-secondary');
            techSpan.textContent = tech;
            stackHTML.appendChild(techSpan);
        });

        const buttonsContainer = document.createElement('div');

        const gitButton = document.createElement('button');
        gitButton.classList.add('btn', 'rounded');
        gitButton.textContent = 'Go to Git';

        const siteButton = document.createElement('button');
        siteButton.classList.add('btn', 'rounded');
        siteButton.textContent = 'Visit Site';

        buttonsContainer.appendChild(gitButton);
        buttonsContainer.appendChild(siteButton);

        popupContentContainer.appendChild(projectHeadlines);
        popupContentContainer.appendChild(headlineWrapper);
        popupContentContainer.appendChild(stackHTML);
        popupContentContainer.appendChild(buttonsContainer);
    }
}