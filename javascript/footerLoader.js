function loadFooter() {
    footer = document.getElementById('footer');
    fetch('../html/footer.html')
        .then(res => {
            if (res.ok) {
                return res.text();
            }
        })
        .then(htmlSnipped => {
            footer.innerHTML = htmlSnipped
        })
}