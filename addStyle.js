const bdy = document.querySelector('body');
bdy.classList.add(...'w-screen h-screen m-0'.split(' '));
const navbar = document.querySelector('nav');
navbar.classList.add(...'flex items-center justify-end w-1/2 h-40'.split(' '));

const header = document.querySelector('.header');
header.classList.add(
  ...'flex flex-row justify-between border-b-3 border-b-slate-500 items-center fixed top-0 w-screen h-1/8'.split(' '),
);
const ul = document.querySelector('ul');
ul.classList.add(...'h-full flex items-center flex-wrap ml-10 ps-0 my-0'.split(' '));
