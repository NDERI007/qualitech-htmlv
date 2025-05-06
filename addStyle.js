const bdy = document.querySelector("body");
bdy.classList.add(..."w-screen h-screen m-0 flex items-center".split(" "));
const navbar = document.querySelector("nav");
navbar.classList.add(
  ..."flex items-center justify-end w-1/2 h-40 pr-5".split(" ")
);

const header = document.querySelector(".header");
header.classList.add(
  ..."flex flex-row justify-between border-b-3 border-b-slate-500 items-center fixed top-0 w-screen h-1/8".split(
    " "
  )
);
const ul = document.querySelector("ul");
ul.classList.add(
  ..."h-full flex items-center flex-wrap ml-10 ps-0 my-0".split(" ")
);

const fscetion = document.querySelector(".first-section");
fscetion.classList.add(
  ..."w-4xl min-w-sm max-w-5xl grid grid-cols-[500px_400px] gap-4".split(" ")
);

const viewbtn = document.querySelector(".viewbtn");
viewbtn.classList.add(
  ..."w-auto h-auto min-w-[137px] min-h-[30px] ml-5 p-5 border-2 border-slate-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 cursor-pointer".split(
    " "
  )
);

const Schedule = document.querySelector(".schbtn");
Schedule.classList.add(
  ..."w-auto h-auto min-w-[274px] min-h-[30px] p-5 bg-sky-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer".split(
    " "
  )
);

const jsec = document.querySelector(".card-holder");
jsec.classList.add(..."grid grid-cols-4 gap-5".split(" "));

const story = document.querySelector(".first-story");
story.classList.add(
  ..."bg-linear-270 from-green-700 to-emerald-500 max-w-[25vw] min-h-[30px] cursor-pointer rounded-sm".split(
    " "
  )
);

const hidenav = document.querySelector("hideOnMobile");
