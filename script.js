const modal = document.getElementById('modal');
const btn = document.getElementById('modal-btn');
const quit = document.getElementsByClassName('close')[0];
const nav = document.getElementById('nav');
const container = document.getElementById('h-container');
const mContainer = document.getElementById('m-container');
const disappear1 = document.getElementById('menu-link1');
const disappear2 = document.getElementById('menu-link2');
const disappear3 = document.getElementById('menu-link3');
const disappear = [disappear1, disappear2, disappear3];

btn.onclick = () => {
  modal.style.display = 'block';
  nav.style.filter = 'blur(8px)';
  container.style.filter = 'blur(8px)';
  mContainer.style.filter = 'blur(8px)';
};

quit.onclick = () => {
  modal.style.display = 'none';
  nav.style.filter = 'none';
  container.style.filter = 'none';
  mContainer.style.filter = 'none';
};

for (let i = 0; i < disappear.length; i += 1) {
  disappear[i].onclick = () => {
    modal.style.display = 'none';
    nav.style.filter = 'none';
    container.style.filter = 'none';
    mContainer.style.filter = 'none';
  };
};