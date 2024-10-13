function changeAboutMe(tab) {
    let me = document.getElementById('about-me-me');
    let skills = document.getElementById('about-me-skills');
    let experiences = document.getElementById('about-me-experiences');
    let education = document.getElementById('about-me-education');
    let links = document.getElementById('about-me-links');

    let meclass = document.getElementsByClassName('meclass');
    let skillsclass = document.getElementsByClassName('skillsclass');
    let exclass = document.getElementsByClassName('exclass');
    let educlass = document.getElementsByClassName('educlass');
    let linksclass = document.getElementsByClassName('linksclass');

    if (tab == 'me') {
        me.style.display = "block";
        skills.style.display = "none";
        experiences.style.display = "none";
        education.style.display = "none";
        links.style.display = "none";
        meclass[0].classList.add("active");
        meclass[1].classList.add("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
        linksclass[0].classList.remove("active");
        linksclass[1].classList.remove("active");
    } else if (tab == 'skills') {
        me.style.display = "none";
        skills.style.display = "block";
        experiences.style.display = "none";
        education.style.display = "none";
        links.style.display = "none";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.add("active");
        skillsclass[1].classList.add("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
        linksclass[0].classList.remove("active");
        linksclass[1].classList.remove("active");
    } else if (tab == 'experiences') {
        me.style.display = "none";
        skills.style.display = "none";
        experiences.style.display = "block";
        education.style.display = "none";
        links.style.display = "none";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.add("active");
        exclass[1].classList.add("active");
        linksclass[0].classList.remove("active");
        linksclass[1].classList.remove("active");

    } else if (tab == 'education') {
        me.style.display = "none";
        skills.style.display = "none";
        experiences.style.display = "none";
        education.style.display = "block";
        links.style.display = "none";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.add("active");
        educlass[1].classList.add("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
        linksclass[0].classList.remove("active");
        linksclass[1].classList.remove("active");
    } else if (tab == 'links') {
        me.style.display = "none";
        skills.style.display = "none";
        experiences.style.display = "none";
        education.style.display = "none";
        links.style.display = "block";
        meclass[0].classList.remove("active");
        meclass[1].classList.remove("active");
        skillsclass[0].classList.remove("active");
        skillsclass[1].classList.remove("active");
        educlass[0].classList.remove("active");
        educlass[1].classList.remove("active");
        exclass[0].classList.remove("active");
        exclass[1].classList.remove("active");
        linksclass[0].classList.add("active");
        linksclass[1].classList.add("active");
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