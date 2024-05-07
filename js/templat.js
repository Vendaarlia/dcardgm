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
    <li>Speed Optimalis</li>
    <li>Lifetime Support</li>
    <li>Integration Chat WA or Telegram</li>
    <li>I Will Handle Deployment</li>
</ul>
    <div class="line-feat"></div>
`;

const mainFeat = `
<ul>
    <li>Free Hosting</li>
    <li>Free 500.000kb Storage</li>
    <li>Free Subdomain</li>
    <li>Speed Optimalis</li>
    <li>Lifetime Support</li>
    <li>Integration Chat WA or Telegram</li>
    <li>I Will Handle Deployment</li>
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

