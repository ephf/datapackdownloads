const list = document.getElementById("datapacks");

for (const pack of datapacks) {
  list.innerHTML += `${pack.name}, <a href="${pack.path}" download="${pack.name}">Download (Version ${pack.version})</a><br>`;
}
