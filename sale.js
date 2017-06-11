var cssId1 = 'sales';  // you could encode the css path itself to generate id..
var cssId2 = 'top-bar';  // you could encode the css path itself to generate id..
var cssId3 = 'slideUp';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId1,cssId2))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId1,cssId2,cssId3;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://rawgit.com/nusad/git/master/confirmed.css';
    link.media = 'all';
    head.appendChild(link);
}
