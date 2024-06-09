const links = [
    { icon: "fa-link", link: "https://dcardgm.com/", name: "Dungeon Card Guild Master" },
    { icon: "fa-link", link: "https://my-nextjs-dun.vercel.app/", name: "Solstafir Next.js Project" },
    { icon: "fa-link", link: "https://vendaarlia-nextjs.vercel.app/", name: "Vendaarlias" },
    { icon: "fa-link", link: "https://snapvision-reactmapdata.vercel.app/", name: "SnapVision" },
    { icon: "fa-link", link: "https://crypt.dcardgm.com/SMITC/", name: "SMITC" },
    { icon: "fa-link", link: "https://crypt.dcardgm.com/SANTAMONIC-STUDIO/", name: "SANTAMONIC STUDIO" },




  ]
  
  const linkHtml = links.map((link) => {
    return `<a href="${link.link}" target="_blank" rel="noopener noreferrer" class="custom-link">`
      // + `<i class="fa ${link.icon}"></i>`
      + `${link.name}`
      + `</a>`;
  });
  
  document.getElementById("social-media-links").innerHTML = linkHtml.join("");