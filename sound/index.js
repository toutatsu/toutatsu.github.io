const request = new XMLHttpRequest();
request.open('GET','https://gist.githubusercontent.com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md', true);

// request.open('GET', 'https://raw.githubusercontent.com/toutatsu/toutatsu.github.io/main/README.md', true);
request.send();

//読み込んでから
window.onload = function(){

    var article=document.getElementById('md');
    try {
        article.innerHTML = marked(request.responseText.split('\\`').join('`'));
    } catch (e) {
        article.innerHTML = 'Error<br>failed to read markdown';
    }
};

// setInterval('location.reload()', 10000);
