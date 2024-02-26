let urls = [];
const apiKey = '5c8c91ef5a1d5d997430f0ff13a3b4d6';
const link = 'https://api.linkpreview.net/?q=';

document.addEventListener('DOMContentLoaded', function() {
    const previewDiv = document.getElementsByClassName("project-header");
    const previewLink = document.getElementsByClassName("project-link");
    Array.from(previewLink).map((element, idx) => {
        urls[idx] = link+element.getAttribute('href');
    })

    urls.forEach((url, idx) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let responseData = xhr.responseText;
            let bgURL = 'url('+(responseData.image || '/images/bg.jpg')+')';
            console.log(bgURL);
            previewDiv[idx].style.backgroundImage= bgURL;
        }
        
        };
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        xhr.setRequestHeader('X-Linkpreview-Api-Key', apiKey);
        xhr.send();
    });
  });
