/*
headタグ内に <script src="template.js"></script>　でテンプレート
*/

//head template
document.head.insertAdjacentHTML('beforeEnd', '<!-- ------------------------------template.js------------------------------ -->');

document.head.insertAdjacentHTML('beforeEnd', ' <!--日本語-->');

document.head.insertAdjacentHTML('beforeEnd', '<!--文字エンコーディングの指定--><meta charset="UTF-8">');
document.head.insertAdjacentHTML('beforeEnd', '<!--ビューポートの初期サイズ--><meta name="viewport" content="width=device-width, initial-scale=1.0">');
//document.head.insertAdjacentHTML('beforeEnd', '<!--タイトル--><title>toutatsu Gihub Pages template</title>');

document.head.insertAdjacentHTML('beforeEnd', '<!--href:外部ソースのURL rel:現在のファイルとの関係-->');


document.head.insertAdjacentHTML('beforeEnd', '<!--favico--><link rel="shortcut icon" href="/favicon.ico">');
document.head.insertAdjacentHTML('beforeEnd', '<!--jquery--><script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>');

//TODO:template.jsから外部jsの読み込み
// document.head.insertAdjacentHTML('beforeEnd', '<!--mathjax--><script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script><script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js"></script>');

document.head.insertAdjacentHTML('beforeEnd', '<!--css--><link rel="stylesheet" href="/template/template.css">');

document.head.insertAdjacentHTML('beforeEnd', '<!-- fontawesome --><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">');

document.head.insertAdjacentHTML('beforeEnd', '<!-- ------------------------------template.js------------------------------ -->');


window.onload = function() {
    //body template
    document.body.insertAdjacentHTML('afterbegin','<header class="site-header"><h1>notes</h1></header>')

    document.body.getElementsByTagName('main')[0].insertAdjacentHTML('beforeBegin','<nav class="gnav"><ul class="gnav__menu"><li class="gnav__menu__item"><a href="/links/">links</a></li><li class="gnav__menu__item"><a href="/notes/markdown.html">markdown</a></li></ul></nav>')
    document.body.getElementsByTagName('main')[0].insertAdjacentHTML('afterBegin','<aside class="left-sidebar">左メニュー</aside>')
    document.body.getElementsByTagName('main')[0].insertAdjacentHTML('beforeEnd','<aside class="right-sidebar">右メニュー</aside>')
    document.body.insertAdjacentHTML('beforeEnd','<footer class="site-footer">github pages<a href="https://github.com/toutatsu/"><i class="fab fa-github"></i></a><br><p class="copyright">toutatsu</p></footer>')
}