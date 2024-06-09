

class NavBar extends HTMLElement {
  constructor() {
    super();
    const style = document.createElement("style");
    style.textContent = `
      /* ** The Header Media Queries **
      ** Tweak as per your needs ** */
@import url('https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap')

      li {
          list-style: none;
      }
      
      a {
          text-decoration: none;
          color: #DCD1BF;
          font-size: 1rem;
          text-transform: uppercase;
      }

      .site-header__wrapper {
          position: relative;
          padding: 1.5rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1;
      }
      
    @media (max-width: 360px) {
      .site-header__wrapper{
        padding: 1.5rem 5%;
      }
    }
      .brand {
        text-decoration: none;
        font-size: 2.3rem;
        font-weight: bold;
        color: #DCD1BF;
        text-transform: uppercase;
        font-family: "Londrina Solid", sans-serif;
        font-weight: 700;
    }
    
    @media (max-width: 360px) {
        .brand {
            font-size: 1.3rem;
            
        }
    }
    
      .nav__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }
      
      @media (max-width: 599px) {
          .nav__wrapper {
              width: 360px;
              padding: 2rem 0;
              position: absolute;
              top: 50px;
              left: 0;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              z-index: 3;
              background-color: #334B35;
              visibility: hidden;
              opacity: 0;
              transform: translateY(-100%);
              transition: transform 0.3s ease-out, opacity 0.3s ease-out;
          }
      
          .nav__wrapper.active {
              visibility: visible;
              opacity: 1;
              transform: translateY(0);
          }
      }
      .nav__item {
        list-style: none;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
      }

    @media (max-width: 360px) {
        .nav__item {
            width: 100%;
            text-align: center;
            margin: 2rem auto;
          }
        }
      .nav__item a {
          display: block;
      }
      
      .menu {
          background-color: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          padding: 0;
          display: none;
      }
      
      @media (max-width: 599px) {
          .menu {
              position: absolute;
              right: 1rem;
              top: 0.5rem;
              display: block;
          }
      }
      
      .line {
          fill: none;
          stroke: #f0f0f0;
          stroke-width: 6;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
          stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          column-gap: 1rem;
          flex-wrap: wrap;
          padding-top: -2rem;
          padding-bottom: -2rem;
      }
      
      .line1 {
          stroke-dasharray: 60 207;
          stroke-width: 6;
      }
      
      .line2 {
          stroke-dasharray: 60 60;
          stroke-width: 6;
      }
      
      .line3 {
          stroke-dasharray: 60 207;
          stroke-width: 6;
      }
      
      .opened .line1 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
      }
      
      .opened .line2 {
          stroke-dasharray: 1 60;
          stroke-dashoffset: -30;
          stroke-width: 6;
      }
      
      .opened .line3 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
      }`;
    // untuk merender web commponentnya dalam shadowDOM agar tidak terpengaruh dengan styling di luar ini dan juga untuk menampilkan ini secara independent
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "site-header__wrapper");

    const brandLink = document.createElement("a");
    brandLink.setAttribute("href", "index.html");
    brandLink.setAttribute("class", "brand");
    brandLink.setAttribute("data-pgc-field", "epurenavbar");
    brandLink.textContent = "Hardi Harzi";

    const nav = document.createElement("nav");
    nav.setAttribute("class", "nav");

    const menuButton = document.createElement("button");
    menuButton.setAttribute("class", "menu");
    menuButton.setAttribute(
      "onclick",
      "this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'));"
    );

    // ini adalah menu hamburgernnya
    menuButton.setAttribute("aria-label", "Main Menu");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "50");
    svg.setAttribute("height", "50");
    svg.setAttribute("viewBox", "0 0 100 100");

    const path1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path1.setAttribute("class", "line line1");
    path1.setAttribute(
      "d",
      "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
    );

    const path2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path2.setAttribute("class", "line line2");
    path2.setAttribute("d", "M 20,50 H 80");

    const path3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path3.setAttribute("class", "line line3");
    path3.setAttribute(
      "d",
      "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
    );

    // kalau mau update nama dan link navbar di sini yah!
    const ul = document.createElement("ul");
    ul.setAttribute("class", "nav__wrapper");

    const items = [
      { href: "#about", text: "About me" },
      { href: "#resume", text: "Resume" },
      { href: "#works", text: "Work" },
      { href: "#contact", text: "Get in thouch!" },
    ];

    items.forEach((item) => {
      const li = document.createElement("li");
      li.setAttribute("class", "nav__item");
      const a = document.createElement("a");
      a.setAttribute("href", item.href);
      a.setAttribute("data-pgc-field", "epurenavbar");
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
    // di gunakan untuk mendefinisikan styling agar bisa mengunakan css di bagian atass dan tidak mempengaruhi element lain di luar ini
    shadow.appendChild(style);

    // metode untuk menseleksi apa yang di render dalam shadowDOM
    shadow.appendChild(wrapper);
    wrapper.appendChild(brandLink);
    wrapper.appendChild(nav);
    nav.appendChild(menuButton);
    menuButton.appendChild(svg);
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    nav.appendChild(ul);

    // function untuk buka tutup menu item dalam mode mobile
    const menuButtonToggle = this.shadowRoot.querySelector(".menu");
    const navWrapper = this.shadowRoot.querySelector(".nav__wrapper");

    menuButtonToggle.addEventListener("click", function () {
      if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
      } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
      }
    });
  }
}
// "nav-bar" nama web component yang bisa di gunakan untuk memangil commponent ini dalam index.html
// NavBar adalah nama fungsi web commponent ini yang akan di gantikan "nav-bar"
customElements.define("nav-bar", NavBar);
