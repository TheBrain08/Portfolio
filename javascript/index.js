function changeAboutMe(tab) {
    let skills = document.getElementById('about-me-skills');
    let expierence = document.getElementById('about-me-expierence');
    let education = document.getElementById('about-me-education');

    if (tab == 'skills') {
        skills.style.display = "block";
        expierence.style.display = "none";
        education.style.display = "none";
    } else if (tab == 'expierence') {
        skills.style.display = "none";
        expierence.style.display = "block";
        education.style.display = "none";
    } else {
        skills.style.display = "none";
        expierence.style.display = "none";
        education.style.display = "block";
    }
}