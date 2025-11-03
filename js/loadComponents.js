async function loadComponent(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
