var text = document.getElementById('text');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var newDom = '';
var newDom2 = '';
var newDom3 = '';
var newDom4 = '';
var newDom5 = '';
var animationDelay = 12;
var animationDelay2 = 18;
var animationDelay3 = 24;
var animationDelay4 = 30;
var animationDelay5 = 36;


for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

for(let i = 0; i < text2.innerText.length; i++)
{
    newDom2 += '<span class="char">' + (text2.innerText[i] == ' ' ? '&nbsp;' : text2.innerText[i])+ '</span>';
}

for(let i = 0; i < text3.innerText.length; i++)
{
    newDom3 += '<span class="char">' + (text3.innerText[i] == ' ' ? '&nbsp;' : text3.innerText[i])+ '</span>';
}

for(let i = 0; i < text4.innerText.length; i++)
{
    newDom4 += '<span class="char">' + (text4.innerText[i] == ' ' ? '&nbsp;' : text4.innerText[i])+ '</span>';
}

for(let i = 0; i < text5.innerText.length; i++)
{
    newDom5 += '<span class="char">' + (text5.innerText[i] == ' ' ? '&nbsp;' : text5.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

text2.innerHTML = newDom2;
var length2 = text2.children.length;

for(let i = 0; i < length2; i++)
{
    text2.children[i].style['animation-delay'] = animationDelay2 * i + 'ms';
}

text3.innerHTML = newDom3;
var length3 = text3.children.length;

for(let i = 0; i < length3; i++)
{
    text3.children[i].style['animation-delay'] = animationDelay3 * i + 'ms';
}

text4.innerHTML = newDom4;
var length4 = text4.children.length;

for(let i = 0; i < length4; i++)
{
    text4.children[i].style['animation-delay'] = animationDelay4 *  i + 'ms';
}

text5.innerHTML = newDom5;
var length5 = text5.children.length;

for(let i = 0; i < length5; i++)
{
    text5.children[i].style['animation-delay'] = animationDelay5 * i + 'ms';
}

const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

const init = function(){
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++){
        items[i].style.background = randomColor({luminosity: 'light'});
    }
    cssScrollSnapPolyfill()
}
init();

