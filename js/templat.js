// Add stylesheet for components
document.head.appendChild(document.createElement('link'));
const link = document.head.lastChild;
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '/CSS/componentStyle.css';



// navbar component
const navbar = `
<div class="wrap-nav">
            <div class="menu">
                <a class="radius" href="guild.html">Guild</a>
                <a class="radius" href="work.html">Work</a>
            </div>
            <a class="logo" href="index.html">DCARDGM</a>
            <div class="menu">
                <a class="radius" href="service.html">Service</a>
                <a class="radius" href="https://docs.google.com/forms/d/e/1FAIpQLSdwkCGzPNN9ph-5o2pMRipAtBslUeJm9Us4NY18PNOpuJu2oQ/viewform?usp=sf_link" target="_blank">Contact</a>
            </div>
        </div>
`;

const navElement = document.getElementById("navbar");
navElement.innerHTML = navbar;


// footer component
const footer = `
<div class="wrap-nav footerz">
        <a class="radius" href="guild.html">Guild</a>
        <a class="radius" href="work.html">Work</a>

        <a class="radius" href="service.html">Service</a>
        <a
          class="radius"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdwkCGzPNN9ph-5o2pMRipAtBslUeJm9Us4NY18PNOpuJu2oQ/viewform?usp=sf_link"
          target="_blank"
          >Contact</a>

        <a class="radius" href="https://wa.me/881026849709" target="_blank">Chat now</a>
        <a class="radius" href="https://www.instagram.com/dcardgm/" target="_blank">Instagram</a>
      </div>
`;

const footElement = document.getElementById("footer");
footElement.innerHTML = footer;


// workslist
import { work } from './workData.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        const worksListElement = document.getElementById('worksList');
        
        if (!worksListElement) {
            throw new Error('Element with ID "worksList" not found.');
        }

        const workslistHTML = work.map(({ image, title, description, link }) => `
            <div class="wrap-work">
                <div class="col-work">
                    <div style="background-image:url(${image})" class="img-work">
                    </div>
                    <div class="work-ads">
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <a class="live-demo" href="${link}" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>
        `).join('');

        worksListElement.innerHTML = workslistHTML;
    } catch (error) {
        console.error('Error rendering works list:', error);
    }
});


// templat package price
const websiteFeat = `
<ul>
    <li>Up to 3 Page Website</li>
    <li>Free Portal Link (Like Linktree)</li>
    <li>Free Update content 1 Year</li>
    <li>extended 500.000kb Storage</li>
</ul>
    <div class="line-feat"></div>
`;

const onlineFeat = `
<ul>
    <li>Free Hosting</li>
    <li>Free 500.000kb Storage</li>
    <li>Free Subdomain</li>
    <li>Integration Chat WA or Telegram</li>
    <li>Speed Optimalis</li>
    <li>Lifetime Maintenance</li>
    <li>I Will Handle Deployment</li>
</ul>
    <div class="line-feat"></div>
`;

const mainFeat = `
<ul>
    <li>Custom Landing Page</li>
    <li>Not a Templates OR CMS</li>
    <li>Crafted for Your Personal Branding</li>
    <li>Responsive Design</li>
    <li>Conversion Design</li>
    <li>Ongoing Support</li>
</ul>
    <div class="line-feat"></div>
`;

// Pemanggilan getElementsByClassName dan penugasan innerHTML 3 class dalam 1 function
const websiteElements = document.getElementsByClassName("websiteFeat");
const onlineElements = document.getElementsByClassName("onlineFeat");
const mainElements = document.getElementsByClassName("mainFeat");

for (let i = 0; i < websiteElements.length; i++) {
    websiteElements[i].innerHTML = websiteFeat;
}
for (let i = 0; i < onlineElements.length; i++) {
    onlineElements[i].innerHTML = onlineFeat;
}
for (let i = 0; i < mainElements.length; i++) {
    mainElements[i].innerHTML = mainFeat;
}


