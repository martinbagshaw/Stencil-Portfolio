// handles lazyloading
'use strict';

// remove no-js class from body
document.getElementsByClassName('home')[0].classList.remove('no-js');


// callback when loaded - remove loading-icon class?
// let images = document.querySelectorAll('img');
// let lazy = lazyload();
// lazy => loadImages(images);
// lazyload(images);

lazyload();
