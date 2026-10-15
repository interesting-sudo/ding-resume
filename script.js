const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  links?.classList.toggle('is-open', open);
});

links?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', '打开菜单');
  });
});

document.getElementById('year').textContent = String(new Date().getFullYear());
