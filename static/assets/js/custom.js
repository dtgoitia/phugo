function handleClickLink(event) {
  document.getElementById('main').scrollIntoView({ behavior: 'smooth'});
}

document.querySelectorAll('.album-link').forEach((elem) => {
  elem.addEventListener('click', handleClickLink);
});
