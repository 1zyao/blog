function loadScript(src,cb){
var HEAD=document.getElementsByTagName('head')[0]||document.documentElement;
var script=document.createElement('script');
script.setAttribute('type','text/javascript');
if(cb)script.onload=cb;
script.setAttribute('src',src);
HEAD.appendChild(script)};
loadScript('https://cdn.jsdelivr.net/npm/minivaline@latest')