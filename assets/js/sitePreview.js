const url = 'vkmsebastian.github.io/valentine';
const link = 'https://api.opengraph.io/api/1.1/site/'+url;

// fetch(`https://api.opengraph.io/api/1.1/site/${encodeURIComponent(url)}`)
//     .then(response => response.json())
//     .then(data  => {
//         const siteImg = data.opengraph.image;   
//         console.log(siteImg);
//         const previewDiv = document.getElementsByClassName('project-header');
//         previewDiv.style.backgroundImge = siteImg;
//     })

document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Process response
        var responseData = xhr.responseText;
        console.log(responseData);
      }
    };
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specified HTTP methods
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specified headers
    xhr.send();
  });