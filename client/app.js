const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
let show = false;

hamburger.addEventListener("click", () => {
  if (!show) {
    links.style.transform = 'scale(1)';
  } else {
    links.style.transform = 'scale(0)';
  }
  show = !show;
});

// Navbar Modern Design

const styles = {
  0: {
    "nav hr" : {
      borderColor: "#9a9a9a",
      borderRadius: "0 5px 5px 0",
      height: "5px",
      backgroundColor: "#9a9a9a",
      display: "block",
      left: "0",
      right: "0",
      position: "absolute",
    },
    header: {
      backgroundColor: "background-color: rgba(18, 38, 64, 1);",
      boxShadow: "none",
    },
    ".title-container .title .link": {
      color: "#fff",
    },
    ".item .link": {
      color: window.innerWidth < 768 ? '#fff' : "#fff",
    },
  },
  "non-0": {
    "nav": {
      backdropFilter: "blur(10px)",
    },
    // header: {
    //   boxShadow: "0 5px 6px rgba(0,0,0,0.3)",
    // },
    ".title-container .title .link": {
      color: "#fff",
    },
    ".item .link": {
      color: window.innerWidth < 768 ? '#fff' : "#fff",
    }
  },
};

const configNavbar = () => {
  let scrollPosition = document.documentElement.scrollTop;
  for (selector in styles[!scrollPosition ? "0" : "non-0"]){
    let elements = document.querySelectorAll(selector);
    for (element of elements){
      for (property in styles[!scrollPosition ? "0" : "non-0"][selector]){
        element.style[property] = styles[!scrollPosition ? "0" : "non-0"][selector][property];
      }
    }
  }
  document.querySelector("nav hr").style.width = `${scrollPosition / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100}%`;
};

// to initialize the styles
configNavbar();

document.addEventListener("scroll", configNavbar);