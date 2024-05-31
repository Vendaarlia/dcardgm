const links = [
    { icon: "fa-link", link: "https://", name: "Coming Soon" },

  ]
  
  const linkHtml = links.map((link) => {
    return `<a href="${link.link}" target="_blank" rel="noopener noreferrer" class="custom-link">`
      + `<i class="fa ${link.icon}"></i> ${link.name}`
      + `</a>`;
  });
  
  document.getElementById("social-media-links").innerHTML = linkHtml.join("");