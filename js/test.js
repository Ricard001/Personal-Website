function $(element){
    return document.querySelector(element)
}
function $$(element){
    return document.querySelectorAll(element)
}

var nav=$('#nav')
var navMod=#('#nav-mod')
for(var i=0;i<nav.children.length;i++){
    console.log(navMod.children[i])
    navMod.children[i]=nav.children[i]
}
