navigation(location.hash)
//if no hash loction set home as deafult page
function navigation() {
    if (!location.hash) {
        location.hash = '#home'
    }
}
window.addEventListener('hashchange', () => {
    var contentDiv = document.getElementById('container');
    var currentQueryParams = location.hash;
    const currentPage = currentQueryParams.substring(1);
    showClickedPage(currentPage, function (content) {
        contentDiv.innerHTML = content;
    });
    navigation()
})
//click nav bar link it load html page
function showClickedPage(queryParm, callback) {
    var request = new XMLHttpRequest();
    request.onload = function () {
        callback(request.responseText);
    };
    request.open("GET", queryParm + ".html");
    request.send(null);
}



