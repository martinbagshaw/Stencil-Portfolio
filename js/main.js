// handles lazyloading
'use strict';

// remove no-js class from body
document.getElementsByClassName('home')[0].classList.remove('no-js');
const date = new Date;
const year = date.getFullYear();
document.getElementById('year').textContent = year;

// run lazyload
lazyload();
