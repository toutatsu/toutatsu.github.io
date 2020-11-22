const request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/toutatsu/first_repository/master/README.md?token=ANSHFZG53KDA4RXRZNXI7A27XI47W', true);
request.send();

//読み込んでから
window.onload = function(){
    var article=document.getElementById('md');
    alert(article.innerHTML);
    try {
        article.innerHTML = marked(request.responseText.split('\\`').join('`'));
    } catch (e) {
        article.innerHTML = 'Error<br>failed to read markdown';
    }
};

// setInterval('location.reload()', 10000);
