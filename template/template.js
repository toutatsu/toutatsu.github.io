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

    document.body.innerHTML='<main><article>'+document.body.innerHTML+'</article></main>'

    //header
    const header = document.createElement("header");
    header.id='header';
    const header_title = document.createElement('h1');
    header_title.textContent='notes';
    header.appendChild(header_title);
    document.body.insertAdjacentElement('afterbegin',header);

    //crumbs
    const nav=document.createElement("p");
    nav.className='crumbs'

    const ul=document.createElement('ul')
    //home
    var crumb=document.createElement('li')
    crumb.className='crumb'
    var link=document.createElement('a')
    link.href=window.location.origin
    link.textContent='home'
    crumb.appendChild(link)
    ul.appendChild(crumb)

    var path=window.location.pathname.split('/')
    //console.log(path)
    if(path[path.length-1]==''||path[path.length-1]=='index.html')path.pop();//index.html
    path[path.length-1]=path[path.length-1].replace('.html','')//拡張子削除

    for(var i=1;i<path.length;i++){
        var crumb=document.createElement('li')
        crumb.className='crumb'
        var link=document.createElement('a')
        link.href=window.location.origin+path.slice(0,i+1).join('/')
        link.textContent=path[i]
        // console.log(path[i])
        //window.location.origin+window.location.pathname
        crumb.appendChild(link)
        ul.appendChild(crumb)
    }
    nav.appendChild(ul)
    header.insertAdjacentElement('afterEnd',nav)

    const main=document.body.getElementsByTagName('main')[0];
    //sidebar
    const left_sidebar = document.createElement("aside");
    left_sidebar.id='left-sidebar';
    left_sidebar.textContent='左';
    main.insertAdjacentElement('afterBegin',left_sidebar);

    const right_sidebar = document.createElement("aside");
    right_sidebar.id='right-sidebar';
    right_sidebar.textContent='目次';
    let table_of_contents=document.createElement('div')
    table_of_contents.id='table_of_contents'
    right_sidebar.appendChild(table_of_contents)
    main.insertAdjacentElement('beforeEnd',right_sidebar);

    //table of contents
    //https://qiita.com/RYO_nami/items/10cb1db00b200e1288ca

    function make_table_of_contents(element){
        const heads = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
        // if (!heads || !heads.length) return
        let contents = '';
        heads.forEach((head, i) => {
            let className = '';
            switch(head.localName) {
                case "h1":className=`contents1`;break;
                case "h2":className=`contents2`;break;
                case "h3":className=`contents3`;break;
                case "h4":className=`contents4`;break;
                case "h5":className=`contents5`;break;
                case "h6":className=`contents6`;break;
            }
            contents += `<ul><a class="${className}" href="#${head.id}">${head.textContent}</a></ul>`;
            //head.innerHTML += `<a id="head${i}"></a>`;
        })
        document.getElementById('table_of_contents').innerHTML += `<ol>${contents}</ol>`;
    }

    if (document.readyState === 'loading') {  // Loading hasn't finished yet
        document.addEventListener('DOMContentLoaded', make_table_of_contents(main));
    } else {  // `DOMContentLoaded` has already fired
        make_table_of_contents(main);
    }


    //footer
    const footer = document.createElement("footer");
    footer.id='footer';

    const footer_title = document.createElement('h4');
    footer_title.textContent='github pages';
    footer.appendChild(footer_title);

    const copyright = document.createElement("p");
    copyright.id='copyright'
    copyright.textContent='toutatsu'
    footer.appendChild(copyright)

    const github_link=document.createElement('a');
    github_link.href='https://github.com/toutatsu/'

    const github_icon = document.createElement("i");
    github_icon.className='fab fa-github'
    github_link.appendChild(github_icon)
    footer.appendChild(github_link)

    document.body.insertAdjacentElement('beforeEnd',footer);
}