document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('lights-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        toggleSwitch.checked = currentTheme === 'dark';
    } else {
        const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDarkScheme ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);
        localStorage.setItem('theme', defaultTheme);
        toggleSwitch.checked = prefersDarkScheme;
    }
    function switchTheme(e) {
        const newTheme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    toggleSwitch.addEventListener('change', switchTheme);
    fetch('../dist/xml/quran.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const quranNodes = xml.getElementsByTagName('quran');
            Array.from(quranNodes).forEach(quran => {
                const id = quran.getAttribute('id');
                const arabicContent = quran.getElementsByTagName('arabic')[0].textContent;
                const tajweedContent = quran.getElementsByTagName('tajweed')[0].textContent;
                const arabicDivs = document.querySelectorAll(`.arabic-content[data-id="${id}"]`);
                arabicDivs.forEach(div => {
                    div.classList.remove('fetch');
                    div.innerHTML = arabicContent;
                });
                const tajweedDivs = document.querySelectorAll(`.tajweed-content[data-id="${id}"]`);
                tajweedDivs.forEach(div => {
                    div.classList.remove('fetch');
                    div.innerHTML = tajweedContent;
                });
            });
        })
        .catch(error => console.error('Error fetching Quran content:', error));
    fetch('../dist/xml/footnote.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const footnoteCollection = xml.getElementsByTagName('footnote');
            Array.from(footnoteCollection).forEach(footnote => {
                const footnoteId = footnote.getAttribute('id');
                const englishContent = footnote.getElementsByTagName('english')[0].textContent;
                const hindi1Content = footnote.getElementsByTagName('hindi1')[0].textContent;
                const spanish1Content = footnote.getElementsByTagName('spanish1')[0].textContent;
                const french1Content = footnote.getElementsByTagName('french1')[0].textContent;
                const japanese1Content = footnote.getElementsByTagName('japanese1')[0].textContent;
                const indonesianContent = footnote.getElementsByTagName('indonesian')[0].textContent;
                const transliterationContent = footnote.getElementsByTagName('transliteration')[0].textContent;
                const chineseContent = footnote.getElementsByTagName('chinese')[0].textContent;
                const hindiContent = footnote.getElementsByTagName('hindi')[0].textContent;
                const spanishContent = footnote.getElementsByTagName('spanish')[0].textContent;
                const frenchContent = footnote.getElementsByTagName('french')[0].textContent;
                const bengaliContent = footnote.getElementsByTagName('bengali')[0].textContent;
                const portugueseContent = footnote.getElementsByTagName('portuguese')[0].textContent;
                const russianContent = footnote.getElementsByTagName('russian')[0].textContent;
                const germanContent = footnote.getElementsByTagName('german')[0].textContent;
                const japaneseContent = footnote.getElementsByTagName('japanese')[0].textContent;
                const koreanContent = footnote.getElementsByTagName('korean')[0].textContent;
                updateFootnoteContent(footnoteId, englishContent, hindi1Content, spanish1Content, french1Content, japanese1Content, indonesianContent, transliterationContent, chineseContent, hindiContent, spanishContent, frenchContent, bengaliContent, portugueseContent, russianContent, germanContent, japaneseContent, koreanContent);
            });
            reinitializeEventHandlers();
        })
        .catch(error => console.error('Error fetching Footnote XML:', error));
    function updateFootnoteContent(footnoteId, englishContent, hindi1Content, spanish1Content, french1Content, japanese1Content, indonesianContent, transliterationContent, chineseContent, hindiContent, spanishContent, frenchContent, bengaliContent, portugueseContent, russianContent, germanContent, japaneseContent, koreanContent) {
        const englishDivs = document.querySelectorAll(`[id="en-${footnoteId}"]`);
        englishDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = englishContent;
        });
        const hindi1Divs = document.querySelectorAll(`[id="hi-${footnoteId}"]`);
        hindi1Divs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = hindi1Content;
        });
        const spanish1Divs = document.querySelectorAll(`[id="es-${footnoteId}"]`);
        spanish1Divs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = spanish1Content;
        });
        const french1Divs = document.querySelectorAll(`[id="fr-${footnoteId}"]`);
        french1Divs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = french1Content;
        });
        const japanese1Divs = document.querySelectorAll(`[id="ja-${footnoteId}"]`);
        japanese1Divs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = japanese1Content;
        });
        const indonesianDivs = document.querySelectorAll(`[id="id-${footnoteId}"]`);
        indonesianDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = indonesianContent;
        });
        const transliterationDivs = document.querySelectorAll(`[id="t01-${footnoteId}"]`);
        transliterationDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = transliterationContent;
        });
        const chineseDivs = document.querySelectorAll(`[id="t02-${footnoteId}"]`);
        chineseDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = chineseContent;
        });
        const hindiDivs = document.querySelectorAll(`[id="t03-${footnoteId}"]`);
        hindiDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = hindiContent;
        });
        const spanishDivs = document.querySelectorAll(`[id="t04-${footnoteId}"]`);
        spanishDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = spanishContent;
        });
        const frenchDivs = document.querySelectorAll(`[id="t05-${footnoteId}"]`);
        frenchDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = frenchContent;
        });
        const bengaliDivs = document.querySelectorAll(`[id="t06-${footnoteId}"]`);
        bengaliDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = bengaliContent;
        });
        const portugueseDivs = document.querySelectorAll(`[id="t07-${footnoteId}"]`);
        portugueseDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = portugueseContent;
        });
        const russianDivs = document.querySelectorAll(`[id="t08-${footnoteId}"]`);
        russianDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = russianContent;
        });
        const germanDivs = document.querySelectorAll(`[id="t09-${footnoteId}"]`);
        germanDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = germanContent;
        });
        const japaneseDivs = document.querySelectorAll(`[id="t10-${footnoteId}"]`);
        japaneseDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = japaneseContent;
        });
        const koreanDivs = document.querySelectorAll(`[id="t11-${footnoteId}"]`);
        koreanDivs.forEach(div => {
            div.classList.remove('fetch');
            div.innerHTML = koreanContent;
        });
    }
    function reinitializeEventHandlers() {
        const modalButtons = document.querySelectorAll('.myBtn_multi');
        modalButtons.forEach((button, index) => {
            button.setAttribute('data-index', index);
            button.onclick = function() {
                const modalparent = document.getElementsByClassName("modal_multi");
                modalparent[index].style.display = "block";
            };
        });
        const closeButtons = document.querySelectorAll('.close_multi');
        closeButtons.forEach((button, index) => {
            button.setAttribute('data-index', index);
            button.onclick = function() {
                const modalparent = document.getElementsByClassName("modal_multi");
                modalparent[index].style.display = "none";
            };
        });
        window.onclick = function(event) {
            const modalparent = document.getElementsByClassName("modal_multi");
            Array.from(modalparent).forEach((modal, index) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        };
    }
    let tafsirData = {};
    fetch('../dist/json/tafsir.json')
        .then(response => response.json())
        .then(data => {
            tafsirData = data;
        })
        .catch(error => console.error('Error loading tafsir:', error));
    document.querySelectorAll('.circle-inner.myBtn_multi').forEach(button => {
        button.addEventListener('click', () => {
            const verse = button.getAttribute('data-verse');
            const modalId = button.getAttribute('data-modal');
            showTafsir(verse, modalId);
        });
    });
    function showTafsir(verse, modalId) {
        const tafsir = tafsirData[verse];
        if (!tafsir) {
            alert('No tafsir found for this verse.');
            return;
        }
        const tafsirContent = document.getElementById(`tafsir-content-${verse.replace(':', '-')}`);
        tafsirContent.innerHTML = '';
        const processedTafsirText = tafsir.tafsir_text
            .split('\n\n')
            .map(section => {
                if (section.includes('\n')) {
                    return section.split('\n')
                        .map(para => `<p>${para}</p>`)
                        .join('');
                } else {
                    return `<h3>${section}</h3>`;
                }
            })
            .join('');
        tafsirContent.innerHTML += processedTafsirText;
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        modal.querySelector('.close_multi').onclick = function() {
            modal.style.display = 'none';
        };
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }
    fetch('../dist/xml/surah-info.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            document.querySelectorAll("[id^='surah-info-']").forEach(element => {
                let id = element.id.split('-')[2]; 
                let surahInfo = xml.querySelector(`surah[id="${id}"]`);
                if (surahInfo) {
                    let title = surahInfo.querySelector('title').textContent;
                    let location = surahInfo.querySelector('location').textContent;
                    let sections = surahInfo.querySelectorAll('section');
                    let content = `<h3 class="text-center" style="font-size: 30px;font-weight: bold;">${title}</h3>`;
                    content += `<center><b>${location}</b></center><br />`;
                    content += `<div class="site-div has-top-divider"></div>`;
                    sections.forEach(section => {
                        let heading = section.querySelector('heading').textContent;
                        let description = section.querySelector('description').textContent;
                        let names = section.querySelectorAll('name');
                        content += `<h3>${heading}</h3>`;
                        content += `<p>${description}</p>`;
                        names.forEach(name => {
                            content += `<p>- ${name.textContent}</p>`;
                        });
                    });
                    element.innerHTML = content;
                }
            });
        })
        .catch(error => console.log('Error fetching XML:', error));
    loadPage();
    loadNavigation();
    loadToggle();
    var fontSizeH1 = localStorage.getItem('fontSizeh1');
    var fontSizeH2 = localStorage.getItem('fontSizeh2');
    if (fontSizeH1) {
        changeFontSize('h1-without-tajweed', fontSizeH1);
    } else {
        changeFontSize('h1-without-tajweed', defaultFontSizeH1);
    }
    if (fontSizeH2) {
        changeFontSize('h2-with-tajweed', fontSizeH2);
    } else {
        changeFontSize('h2-with-tajweed', defaultFontSizeH2);
    }
    var progressBars = document.querySelectorAll('.progress-bar .progress');
    function updateProgressBar(progressBar, progress) {
        progressBar.style.width = progress + '%';
    }
    progressBars.forEach(function(progressBar) {
        updateProgressBar(progressBar, 0);
    });
    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY;
        var docHeight = document.body.scrollHeight - window.innerHeight;
        var scrollPercent = (scrollTop / docHeight) * 100;
        progressBars.forEach(function(progressBar) {
            updateProgressBar(progressBar, scrollPercent);
        });
    });
});
function loadPage() {
    fetch('../dist/html/page.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('page-container').innerHTML = data;
            setActivePage();
            initializePage();
        });
}
function loadNavigation() {
    fetch('../dist/html/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
            setActivePage();
            initializePage();
        });
}
function setActivePage() {
    const path = window.location.pathname;
    const currentPage = path.split('/').pop().replace('.html', '');
    const activeLink = document.querySelector(`a[data-page="${currentPage}"]`);
    if (activeLink) {
        activeLink.id = 'active';
        activeLink.classList.add('w3-blue');
    }
}
function initializePage() {
    const activeElement = document.getElementById('active');
    if (activeElement) {
        activeElement.scrollIntoView({
            behavior: 'instant', 
            block: 'start'
        });
    }
    document.getElementById('backToTop').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.querySelectorAll('.w3-opennav').forEach(function (menuToggle) {
        menuToggle.addEventListener('click', function (event) {
            event.preventDefault();
            const targetElement = document.querySelector('#active');
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'instant',
                    block: 'start'
                });
            }
            if (typeof w3_open === 'function') {
                w3_open();
            }
        });
    });
}
function w3_close() {
    document.querySelector('.w3-sidenav').style.display = 'none';
    document.querySelector('.w3-overlay').style.display = 'none';
}
function w3_open() {
    document.querySelector('.w3-sidenav').style.display = 'block';
    document.querySelector('.w3-overlay').style.display = 'block';
}
function loadToggle() {
    fetch('../dist/html/toggle.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('toggle-container').innerHTML = data;
            initializeToggle();
            applyTajweedPreference();
            loadTranslationPreference();
        });
}
function toggleDropdown() {
    var dropdown = document.getElementById("translationDropdown");
    dropdown.classList.toggle("w3-show");
    var overlay = document.querySelector('.w3-overlay');
    if (dropdown.classList.contains("w3-show")) {
        overlay.style.display = 'block';
        document.addEventListener('click', closeDropdownOnClickOutside);
    } else {
        overlay.style.display = 'none';
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}
function closeDropdownOnClickOutside(event) {
    var dropdown = document.getElementById("translationDropdown");
    var button = document.querySelector('.w3-btn');
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove("w3-show");
        document.querySelector('.w3-overlay').style.display = 'none';
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}
function toggleTranslation() {
    var translationToggle = document.getElementById("translationToggle");
    var translationType = translationToggle.value;
    var allTranslations = document.querySelectorAll(".translation");
    allTranslations.forEach(function (translation) {
        translation.style.display = "none";
    });
    var selectedTranslations = document.querySelectorAll("." + translationType);
    selectedTranslations.forEach(function (translation) {
        translation.style.display = "block";
    });
    localStorage.setItem("translationPreference", translationType);
}
function loadTranslationPreference() {
    var translationPreference = localStorage.getItem("translationPreference");
    if (translationPreference) {
        document.getElementById("translationToggle").value = translationPreference;
        toggleTranslation();
    }
}
window.addEventListener('load', function () {
    loadTranslationPreference();
});
var audioPlayers = document.querySelectorAll('audio');
function togglePlayPause(audioId) {
    var audio = document.getElementById(audioId);
    var playPauseIcon = audio.nextElementSibling;
    var tooltip = playPauseIcon.closest('.circle-inner').querySelector('.tooltip');
    if (audio.paused) {
        audio.play();
        playPauseIcon.innerHTML = '<i class="fas fa-pause"></i>';
        playPauseIcon.setAttribute('data-title', 'Pause');
        if (tooltip) tooltip.innerText = 'Pause';
    } else {
        audio.pause();
        playPauseIcon.innerHTML = '<i class="fas fa-play"></i>';
        playPauseIcon.setAttribute('data-title', 'Play');
        if (tooltip) tooltip.innerText = 'Play';
    }
    audio.addEventListener('ended', function() {
        playPauseIcon.innerHTML = '<i class="fas fa-play"></i>';
        playPauseIcon.setAttribute('data-title', 'Play');
        if (tooltip) tooltip.innerText = 'Play';
    });
}
function setPlayPauseTitle() {
    var playPauseIcons = document.querySelectorAll('.play-pause-icon');
    playPauseIcons.forEach(function(icon) {
        icon.addEventListener('mouseenter', function() {
            var iconElem = icon.querySelector('i');
            var tooltip = icon.closest('.circle-inner').querySelector('.tooltip');
            if (iconElem.classList.contains('fa-play')) {
                icon.setAttribute('data-title', 'Play');
                if (tooltip) tooltip.innerText = 'Play';
            } else {
                icon.setAttribute('data-title', 'Pause');
                if (tooltip) tooltip.innerText = 'Pause';
            }
        });
    });
}
audioPlayers.forEach(function(player) {
    var playPauseButton = player.nextElementSibling;
    playPauseButton.classList.add('play-pause-icon');
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
});
setPlayPauseTitle();
var maxZoomIn = 5;
var maxZoomOut = 5;
var defaultFontSizeH1 = 38;
var defaultFontSizeH2 = 45;
function getFontSize(element) {
    return parseInt(window.getComputedStyle(element).fontSize);
}
function zoomIn() {
    var h1Elements = document.getElementsByClassName("h1-without-tajweed");
    var h2Elements = document.getElementsByClassName("h2-with-tajweed");
    for (var i = 0; i < h1Elements.length; i++) {
        var currentSize = getFontSize(h1Elements[i]);
        if (currentSize < defaultFontSizeH1 + 2 * maxZoomIn) {
            h1Elements[i].style.fontSize = (currentSize + 2) + "px";
            localStorage.setItem('fontSizeh1', currentSize + 2);
        }
    }
    for (var i = 0; i < h2Elements.length; i++) {
        var currentSize = getFontSize(h2Elements[i]);
        if (currentSize < defaultFontSizeH2 + 2 * maxZoomIn) {
            h2Elements[i].style.fontSize = (currentSize + 2) + "px";
            localStorage.setItem('fontSizeh2', currentSize + 2);
        }
    }
}
function zoomOut() {
    var h1Elements = document.getElementsByClassName("h1-without-tajweed");
    var h2Elements = document.getElementsByClassName("h2-with-tajweed");
    for (var i = 0; i < h1Elements.length; i++) {
        var currentSize = getFontSize(h1Elements[i]);
        if (currentSize > defaultFontSizeH1 - 2 * maxZoomOut) {
            h1Elements[i].style.fontSize = (currentSize - 2) + "px";
            localStorage.setItem('fontSizeh1', currentSize - 2);
        }
    }
    for (var i = 0; i < h2Elements.length; i++) {
        var currentSize = getFontSize(h2Elements[i]);
        if (currentSize > defaultFontSizeH2 - 2 * maxZoomOut) {
            h2Elements[i].style.fontSize = (currentSize - 2) + "px";
            localStorage.setItem('fontSizeh2', currentSize - 2);
        }
    }
}
function resetSize() {
    localStorage.setItem('fontSizeh1', defaultFontSizeH1);
    localStorage.setItem('fontSizeh2', defaultFontSizeH2);
    changeFontSize('h1-without-tajweed', defaultFontSizeH1);
    changeFontSize('h2-with-tajweed', defaultFontSizeH2);
}
function changeFontSize(className, fontSize) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = fontSize + "px";
    }
}
function toggleView(option) {
    if (option === 'page') {
        document.getElementById('pageOption').style.display = 'block';
        document.getElementById('surahOption').style.display = 'none';
        document.getElementById('pageButton').classList.add('active');
        document.getElementById('surahButton').classList.remove('active');
    } else if (option === 'surah') {
        document.getElementById('pageOption').style.display = 'none';
        document.getElementById('surahOption').style.display = 'block';
        document.getElementById('pageButton').classList.remove('active');
        document.getElementById('surahButton').classList.add('active');
    }
}
function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    document.getElementsByClassName("w3-overlay")[0].style.display = "none";
}
function toggleBookmark(pageNumber, verseId) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
    if (!bookmarks[pageNumber]) {
        bookmarks[pageNumber] = [];
    }
    var index = bookmarks[pageNumber].indexOf(verseId);
    if (index === -1) {
        bookmarks[pageNumber].push(verseId);
    } else {
        bookmarks[pageNumber].splice(index, 1);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkButtons();
}
function getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks')) || {};
}
function updateBookmarkButton(button, verseId) {
    var bookmarks = getBookmarks();
    var isBookmarked = bookmarks[getPageNumber()] && bookmarks[getPageNumber()].includes(verseId);
    var tooltip = button.closest('.circle-inner').querySelector('.tooltip');
    if (isBookmarked) {
        button.innerHTML = '<i class="fas fa-bookmark"></i>';
        button.setAttribute('data-title', 'Bookmarked!');
        if (tooltip) tooltip.innerText = 'Bookmarked!';
        button.style.color = 'rgb(255, 255, 255)';
    } else {
        button.innerHTML = '<i class="far fa-bookmark"></i>';
        button.setAttribute('data-title', 'Bookmark');
        if (tooltip) tooltip.innerText = 'Bookmark';
        button.style.color = 'rgb(255, 255, 255)';
    }
}
function updateBookmarkButtons() {
    var bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(function(button) {
        var verseId = button.getAttribute('data-id');
        updateBookmarkButton(button, verseId);
    });
}
updateBookmarkButtons();
var bookmarkButtons = document.querySelectorAll('.bookmark-btn');
 bookmarkButtons.forEach(function(button) {
    var verseId = button.getAttribute('data-id');
    button.addEventListener('click', function() {
        toggleBookmark(getPageNumber(), verseId);
    });
});
function getPageNumber() {
    var urlParts = window.location.pathname.split('/');
    return parseInt(urlParts[urlParts.length - 1].split('.')[0]);
}
function updateBookmarkButtons() {
    var bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(function(button) {
        var verseId = button.getAttribute('data-id');
        updateBookmarkButton(button, verseId);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('searchInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchVerse();
        }
    });
});
function searchVerse() {
    var verseId = document.getElementById('searchInput').value.trim();
    var verseElement = document.getElementById(verseId);
    if (verseElement) {
        verseElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        Swal.fire({
            html: "Verse Not Found",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var targetVerseId = localStorage.getItem('targetVerseId');
    if (targetVerseId) {
        var verseElement = document.getElementById(targetVerseId);
        if (verseElement) {
            verseElement.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, null, window.location.pathname);
        }
        localStorage.removeItem('targetVerseId');
    }
});
(function() {
    function mainFunction() {
        let data = fetchData();
        let processedData = processData(data);
        displayData(processedData);
        animateResults(processedData);
    }
        function fetchData() {
        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                value: Math.random() * 100
            });
        }
        return data;
    }
    function processData(data) {
        let processedData = [];
        for (let item of data) {
            if (item.value > 50) {
                processedData.push({
                    id: item.id,
                    result: "High"
                });
            } else {
                processedData.push({
                    id: item.id,
                    result: "Low"
                });
            }
        }
        return processedData;
    }
    function displayData(data) {
        console.log("Processed Data:");
        for (let item of data) {
            console.log(`ID: ${item.id}, Result: ${item.result}`);
        }
    }
    function animateResults(data) {
        console.log("Animating Results...");
        for (let item of data) {
        }
    }
    document.addEventListener("DOMContentLoaded", mainFunction);
})();
function copyText(button, verseId) {
    var verseContainer = document.getElementById(verseId);
    var h1Text = verseContainer.querySelector('h1').textContent;
    var translationText = '';
    var translations = verseContainer.querySelectorAll('h4.translation');
    translations.forEach(function(translation) {
        if (translation.style.display !== 'none') {
            var clone = translation.cloneNode(true);
            var footnotes = clone.querySelectorAll('.myBtn_multi, .modal1, .modal_multi');
            footnotes.forEach(function(footnote) {
                footnote.remove();
            });
            translationText += clone.textContent.trim() + '\n';
        }
    });
    translationText = translationText.trim();
    var pageUrl = window.location.origin + window.location.pathname + '#' + encodeURIComponent(verseId);
    var fullText = `Quran Surah ${verseId}\n\n` + h1Text + '\n\n' + translationText + '\n\n' + pageUrl;
    navigator.clipboard.writeText(fullText).then(function() {
        button.setAttribute('data-title', 'Copied!');
        button.innerHTML = '<i class="fas fa-copy"></i>';
        var tooltip = button.closest('.circle-inner').querySelector('.tooltip') || button.closest('.circle-inner-main').querySelector('.tooltip');
        if (tooltip) tooltip.innerText = 'Copied!';
        setTimeout(function() {
            button.setAttribute('data-title', 'Copy');
            button.innerHTML = '<i class="far fa-copy"></i>';
            if (tooltip) tooltip.innerText = 'Copy';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
function openShareModal(verseId) {
    var verseContainer = document.getElementById(verseId);
    var h1Text = verseContainer.querySelector('h1').textContent;
    var translationText = '';
    var translations = verseContainer.querySelectorAll('h4.translation');
    translations.forEach(function(translation) {
        if (translation.style.display !== 'none') {
            var clone = translation.cloneNode(true);
            var footnotes = clone.querySelectorAll('.myBtn_multi, .modal1, .modal_multi');
            footnotes.forEach(function(footnote) {
                footnote.remove();
            });
            translationText += clone.textContent.trim() + '\n';
        }
    });
    translationText = translationText.trim();
    var pageUrl = window.location.origin + window.location.pathname + '#' + encodeURIComponent(verseId);
    var fullText = `Quran Surah ${verseId}\n\n` + h1Text + '\n\n' + translationText + '\n\n' + pageUrl;
    var encodedContent = encodeURIComponent(fullText);
    var modalContent = `
        <button onclick="share('facebook', '${encodedContent}')" class="social-btn"><i class="fab fa-facebook"></i></button>
        <button onclick="share('twitter', '${encodedContent}')" class="social-btn"><i class="fab fa-twitter"></i></button>
        <button onclick="share('whatsapp', '${encodedContent}')" class="social-btn"><i class="fab fa-whatsapp"></i></button>
        <button onclick="share('telegram', '${encodedContent}')" class="social-btn"><i class="fab fa-telegram"></i></button>
    `;
    Swal.fire({
        html: '<h3 style="font-size: 30px;">SHARE</h3><h3>Quran Surah ' + verseId + '</h3><br />' + modalContent,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        customClass: {
            popup: 'social-modal'
        }
    });
}
function share(platform, encodedContent) {
    let url = '';
    switch (platform) {
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodedContent}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodedContent}`;
            break;
        case 'whatsapp':
            url = `https://api.whatsapp.com/send?text=${encodedContent}`;
            break;
        case 'telegram':
            url = `https://telegram.me/share/url?text=${encodedContent}`;
            break;
        default:
            return;
    }
    window.open(url, '_blank');
}
document.addEventListener("DOMContentLoaded", function() {
    setupCopyButtons();
});
function setupCopyButtons() {
    var copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(function(button) {
        button.innerHTML = '<i class="far fa-copy"></i>';
        button.addEventListener('click', function() {
            var verseId = button.getAttribute('data-verse-id');
            copyText(button, verseId);
        });
    });
    var shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(function(button) {
        button.innerHTML = '<i class="fas fa-share"></i>';
        button.addEventListener('click', function() {
            var verseId = button.getAttribute('data-verse-id');
            openShareModal(verseId);
        });
    });
}
(function() {
    function mainFunction() {
        let data = fetchData();
        let processedData = processData(data);
        displayData(processedData);
    }
    function fetchData() {
        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                value: Math.random() * 100
            });
        }
        return data;
    }
    function processData(data) {
        let processedData = [];
        for (let item of data) {
            if (item.value > 50) {
                processedData.push({
                    id: item.id,
                    result: "High"
                });
            } else {
                processedData.push({
                    id: item.id,
                    result: "Low"
                });
            }
        }
        return processedData;
    }
    function displayData(data) {
        console.log("Processed Data:");
        for (let item of data) {
            console.log(`ID: ${item.id}, Result: ${item.result}`);
        }
    }
    document.addEventListener("DOMContentLoaded", mainFunction);
})();
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded");
    const originalText = "Donate";
    console.log("Original Text:", originalText);
    const elements = document.querySelectorAll('.w3-center[data-title="Donate"]');
    console.log("Elements:", elements);
    let textChanged = false;
    if (elements.length < 1) {
        textChanged = true;
    } else {
        elements.forEach(element => {
            if (element.innerText !== originalText) {
                textChanged = true;
            }
        });
    }
    console.log("TextChanged:", textChanged);
    if (textChanged) {
        Swal.fire({
            html: '<h3>Warning!</h3><p>This is Not the Original, This Copy of the Web3 Quran Text Has Been Altered!</p>',
            icon: "error",
            confirmButtonText: "OK"
        });
    }
    const circles = document.querySelectorAll('.circle-inner-main, .circle-inner');
    circles.forEach(circle => {
        const title = circle.getAttribute('data-title') || circle.getAttribute('title');
        if (title) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = title;
            circle.appendChild(tooltip);
        }
    });
});
function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}
function openNoteModal(verseId) {
    var savedNote = localStorage.getItem('note-' + verseId) || '';
    var modalContent = {
        html: '<h3>Note for ' + verseId + '</h3>',
        input: 'textarea',
        inputPlaceholder: 'Enter your notes here...',
        inputValue: savedNote,
        showCancelButton: true,
        showLoaderOnConfirm: true,
        customClass: {
            popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
            title: 'swal2-title'
        },
        preConfirm: (noteText) => {
            if (!noteText.trim()) {
                Swal.showValidationMessage('Please enter a note before saving.');
                return false;
            }
            saveNoteToStorage(verseId, noteText);
        }
    };
    var hasNote = savedNote.trim() !== '';
    if (hasNote) {
        modalContent.confirmButtonText = 'Save Note';
        modalContent.footer = `
            <button type="button" class="swal-button swal-button--delete cursor-pointer social-btn"><i class="fas fa-trash"></i></button>
        `;
    } else {
        modalContent.confirmButtonText = 'Save Note';
        modalContent.showCancelButton = true;
    }
    Swal.fire(modalContent).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                html: '<h3>Note saved successfully!</h3>',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
                    title: 'swal2-title'
                }
            }).then(() => {
                updateCircleUI(verseId);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                icon: 'info',
                html: '<h3>Note not saved.</h3>',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
                    title: 'swal2-title'
                }
            });
        }
    });
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('swal-button--delete') || e.target.closest('.swal-button--delete')) {
            deleteNoteModal(verseId);
        }
    });
}
function saveNoteToStorage(verseId, noteText) {
    if (noteText.trim() === '') {
        Swal.fire({
            icon: 'warning',
            html: '<h3>Oops...</h3>',
            text: 'Please enter a note before saving.',
            customClass: {
                popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
                title: 'swal2-title'
            }
        });
        return;
    }
    localStorage.setItem('note-' + verseId, noteText.trim());
    Swal.fire({
        icon: 'success',
        html: '<h3>Note saved successfully!</h3>',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
            title: 'swal2-title'
        }
    }).then(() => {
        updateCircleUI(verseId);
    });
}
function deleteNoteModal(verseId) {
    Swal.fire({
        icon: 'warning',
        html: '<h3>Delete Note for ' + verseId + '</h3>',
        text: 'Are you sure you want to delete this note?',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        customClass: {
            popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
            title: 'swal2-title'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('note-' + verseId);
            Swal.fire({
                icon: 'success',
                html: '<h3>Note deleted successfully!</h3>',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: document.body.classList.contains('lights-off') ? 'lights-off' : '',
                    title: 'swal2-title'
                }
            }).then(() => {
                updateCircleUI(verseId);
            });
        }
    });
}
function updateCircleUI(verseId) {
    var hasNote = localStorage.getItem('note-' + verseId) !== null;
    var noteButton = document.querySelector(`.note-btn[onclick*="${verseId}"]`);
    var tooltip = noteButton.closest('.circle-inner').querySelector('.tooltip') || noteButton.closest('.circle-inner-main').querySelector('.tooltip');
    if (noteButton) {
        var icon = noteButton.querySelector('i');        
        if (hasNote) {
            icon.classList.add('fas', 'fa-clipboard');
            icon.classList.remove('far', 'fa-sticky-note');
            if (tooltip) tooltip.innerText = 'Open My Note';
        } else {
            icon.classList.remove('fas', 'fa-clipboard');
            icon.classList.add('far', 'fa-clipboard');
            if (tooltip) tooltip.innerText = 'Write Note';
        }
    }
}
window.addEventListener('load', function () {
    document.querySelectorAll('.note-btn').forEach(function(button) {
        var verseId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        updateCircleUI(verseId);
    });
});
function toggleCircles(element) {
    const container = element.closest('.circle-container');
    container.classList.toggle('open');
    const tooltip = element.closest('.circle-inner').querySelector('.tooltip') || element.closest('.circle-inner-main').querySelector('.tooltip');
    if (container.classList.contains('open')) {
        element.setAttribute('data-title', 'Hide');
        element.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        if (tooltip) tooltip.innerText = 'Hide';
    } else {
        element.setAttribute('data-title', 'More');
        element.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        if (tooltip) tooltip.innerText = 'More';
    }
}
function selectTranslation(translationType) {
    const allTranslations = document.querySelectorAll("h4.translation");
    allTranslations.forEach(function (translation) {
        translation.style.display = translation.classList.contains(translationType) ? 'block' : 'none';
    });
    localStorage.setItem("translationPreference", translationType);
}
function loadTranslationPreference() {
    const translationPreference = localStorage.getItem("translationPreference");
    if (translationPreference) {
        document.querySelector(`input[name="translation"][value="${translationPreference}"]`).checked = true;
        selectTranslation(translationPreference);
    }
}
function initializeToggle() {
    document.querySelectorAll('input[name="translation"]').forEach(function (radio) {
        radio.addEventListener('change', function() {
            selectTranslation(this.value);
        });
    });
}
window.addEventListener('load', function () {
    loadTranslationPreference();
    initializeToggle();
});
function toggleTajweed() {
var tajweedToggle = document.getElementById("tajweedToggle");
var h1WithoutTajweed = document.querySelectorAll(".h1-without-tajweed");
var h2WithTajweed = document.querySelectorAll(".h2-with-tajweed");
if (tajweedToggle.checked) {
    h1WithoutTajweed.forEach(function(h1) {
        h1.style.display = "none";
    });
    h2WithTajweed.forEach(function(h2) {
        h2.style.display = "block";
    });
    localStorage.setItem("tajweedPreference", "enabled");
} else {
    h1WithoutTajweed.forEach(function(h1) {
        h1.style.display = "block";
    });
    h2WithTajweed.forEach(function(h2) {
        h2.style.display = "none";
    });
    localStorage.setItem("tajweedPreference", "disabled");
}
}
function applyTajweedPreference() {
var tajweedPreference = localStorage.getItem("tajweedPreference");
var tajweedToggle = document.getElementById("tajweedToggle");
if (tajweedPreference === "enabled") {
    tajweedToggle.checked = true;
    toggleTajweed();
}
}
window.addEventListener("load", function() {
applyTajweedPreference();
});
document.addEventListener("DOMContentLoaded", function () {
    var defaultReciter = "sa";
    var reciterMap = {
        "Saad Al-Ghamdi": "sa",
        "Abdul Rahman Al-Sudais": "ar",
        "Abu Bakr Al-Shatri": "ab",
        "Maher Al-Muaiqly": "ma",
        "Saud Al-Shuraim": "ss",
        "Ahmad Al-Ajmi": "aa",
        "Fares Abbad": "fa"
    };
    if (!localStorage.getItem("selectedReciter")) {
        localStorage.setItem("selectedReciter", defaultReciter);
    }
    function getReciterName(code) {
        return Object.keys(reciterMap).find(key => reciterMap[key] === code);
    }
    function showReciterPlayButton(verseId) {
        var selectedReciter = localStorage.getItem("selectedReciter");
        for (var reciter in reciterMap) {
            var reciterCode = reciterMap[reciter];
            var playButton = document.getElementById(`play-${reciterCode}-${verseId}`);
            if (playButton) {
                playButton.classList.add("hidden");
            }
        }
        var selectedPlayButton = document.getElementById(`play-${selectedReciter}-${verseId}`);
        if (selectedPlayButton) {
            selectedPlayButton.classList.remove("hidden");
        }
    }
    function togglePlayPause(audioId) {
        var audio = document.getElementById(audioId);
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    var selectedReciterCode = localStorage.getItem("selectedReciter");
    var audioElements = document.querySelectorAll("audio");
    audioElements.forEach(function(audio) {
        var verseId = audio.id.split('_')[0].replace('audio', '');
        showReciterPlayButton(verseId);
    });
    document.getElementById("reciterIcon").addEventListener("click", function () {
        var selectedReciter = getReciterName(localStorage.getItem("selectedReciter"));
        var optionsHtml = '';
        for (var reciter in reciterMap) {
            var isSelected = reciter === selectedReciter ? 'selected' : '';
            optionsHtml += `<option value="${reciter}" ${isSelected}>${reciter}</option>`;
        }
        Swal.fire({
            html: `<h3 style="font-size: 30px;font-weight: bold;">Select Reciter</h3><br />
                <select class="w3-btn w3-black-white w3-round-large w3-border-3" id="reciterSelect" style="margin-right: 5px; cursor: pointer;">
                    ${optionsHtml}
                </select>
            `,
            showCancelButton: true,
            confirmButtonText: 'Select',
            preConfirm: () => {
                var reciterSelect = document.getElementById("reciterSelect");
                var selectedReciter = reciterSelect.value;
                var reciterCode = reciterMap[selectedReciter];
                localStorage.setItem("selectedReciter", reciterCode);
                return reciterCode;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                var selectedReciterCode = result.value;
                audioElements.forEach(function(audio) {
                    var verseId = audio.id.split('_')[0].replace('audio', '');
                    showReciterPlayButton(verseId);
                });
                Swal.fire({html: '<h3>Selected Reciter: ' + getReciterName(selectedReciterCode) + '</h3>'});
            }
        });
    });
});
document.getElementById('menuIcon').addEventListener('click', function(event) {
    event.stopPropagation();
    document.getElementById('menuContainer').classList.toggle('show');
});
document.addEventListener('click', function(event) {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer.contains(event.target) && !event.target.matches('#menuIcon')) {
        menuContainer.classList.remove('show');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll('.myBtn_multi');
    const modals = document.querySelectorAll('.modal_multi');
    const closeModalButtons = document.querySelectorAll('.close_multi');
    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-verse').replace(':', '-');
            const modal = document.getElementById(`modal-${modalId}`);
            if (modal) {
                modal.classList.add('show');
                document.body.classList.add('modal-open');
            }
        });
    });
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });
    });
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });
    });
});
