let arr = document.getElementsByTagName("li").length;
let arr2 = document.getElementsByClassName("btn");
let arr3 = document.getElementById("title");
let qs = document.querySelector('h1');
let qa = document.querySelectorAll('#list .item');
document.querySelector('li a').style.color = "red";
document.querySelector('button').style.backgroundColor = "yellow"
document.querySelector('button').classList.add('invisible');
document.querySelector('button').classList.remove('invisible');
document.querySelector('button').classList.toggle('invisible');

document.querySelector("h1").classList.add('huge');

document.getElementById('title').textContent;

document.querySelector('a').attributes;
document.querySelector('a').getAttribute('href');
document.querySelector('a').setAttribute('href', "https://www.bing.com");
