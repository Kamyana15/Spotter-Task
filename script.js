const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });

    const menu = link.nextElementSibling;
    menu.style.display = 'block';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
