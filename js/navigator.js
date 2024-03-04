/*
 *  Websites list in order
 */
var websites = [
    "https://lehigh-university-design.github.io/project-1-awb324/",
    "https://lehigh-university-design.github.io/project-1-sit225/",
    "https://lehigh-university-design.github.io/project-1-lar326/",
    "https://lehigh-university-design.github.io/project-1-adrawoot/",
    "https://lehigh-university-design.github.io/project-1-mmurata22/",
    "https://lehigh-university-design.github.io/project-1-SSShee77y/",
    "https://lehigh-university-design.github.io/project-1-eyt225/",
    "https://lehigh-university-design.github.io/project-1-shirls326/",
    "https://lehigh-university-design.github.io/project-1-Colin941/",
    "https://lehigh-university-design.github.io/project-1-ellafall/",
    "https://lehigh-university-design.github.io/project-1-laurj46/",
    "https://lehigh-university-design.github.io/project-1-kaydolan/",
    "https://lehigh-university-design.github.io/project-1-dsw225/"
];

/*
 *  Website index variable
 */
var currentIndex = 13;

window.onload = function getCurrentIndex() {
    var path = window.location.href; 
    var page = path.split("/");

    if (page.includes("https") || page.includes("http"))
        currentIndex = websites.indexOf(path);
    else
        currentIndex = websites.indexOf(page.pop());
}

/*
 *  Goes to the previous page from the index of current page in list
 */
function goToPrevious() {
    currentIndex = (currentIndex - 1 + websites.length) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to the next page from the index of current page in list
 */
function goToNext() {
    currentIndex = (currentIndex + 1) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to random page that is not the current page
 */
function goToRandom() {
    var randomIndex = currentIndex;
    while (randomIndex == currentIndex)
    {
        randomIndex = Math.floor(Math.random() * websites.length);
    }
    currentIndex = randomIndex;
    location.href = websites[currentIndex];
}