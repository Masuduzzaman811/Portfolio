const modalm = document.getElementById('modalm');
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
  modalm.style.display = 'block';
  nav.style.filter = 'blur(8px)';
  container.style.filter = 'blur(8px)';
  mContainer.style.filter = 'blur(8px)';
};

quit.onclick = () => {
  modalm.style.display = 'none';
  nav.style.filter = 'none';
  container.style.filter = 'none';
  mContainer.style.filter = 'none';
};

for (let i = 0; i < disappear.length; i += 1) {
  disappear[i].onclick = () => {
    modalm.style.display = 'none';
    nav.style.filter = 'none';
    container.style.filter = 'none';
    mContainer.style.filter = 'none';
  };
}

// POPUP-WINDOW

const PROJECTS_LIST = [{
  name: 'Tonic',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Back End Dev</li> <li class="card-list-item">2015</li>',
  Image: 'images/work-card1.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  live_btn: '#',
  source_btn: '#',
},
{
  name: 'Multi-Post <br>Stories',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Front End Dev</li> <li class="card-list-item">2016</li>',
  Image: 'images/work-card2.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  live_btn: '#',
  source_btn: '#',
},
{
  name: 'Blog',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Front End Dev</li> <li class="card-list-item">2019</li> ',
  Image: 'images/work-card3.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  live_btn: '#',
  source_btn: '#',
},
{
  name: 'Multi-Post Stories',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Front End Dev</li> <li class="card-list-item">2019</li>',
  Image: 'images/work-card4.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML', 'CSS', 'Ruby'],
  live_btn: '#',
  source_btn: '#',
}];

const SEE_PROJECT1 = document.getElementById('see-btn1');
const SEE_PROJECT2 = document.getElementById('see-btn2');
const SEE_PROJECT3 = document.getElementById('see-btn3');
const SEE_PROJECT4 = document.getElementById('see-btn4');

SEE_PROJECT1.onclick = () => {
  const p1Name = document.getElementById('p1-name');
  p1Name.innerHTML = PROJECTS_LIST[0].name;
  const p1Description = document.getElementById('p1-description');
  p1Description.innerHTML = PROJECTS_LIST[0].description;
  const p1Img = document.getElementById('p1-img');
  p1Img.src = PROJECTS_LIST[0].Image;
  const p1Pa = document.getElementById('p1-p');
  p1Pa.innerHTML = PROJECTS_LIST[0].project_txt;
  const p1Lan1 = document.getElementById('p1-lan1');
  [p1Lan1.innerHTML] = [PROJECTS_LIST[0].technologies[0]];
  const p1Lan2 = document.getElementById('p1-lan2');
  [p1Lan2.innerHTML] = [PROJECTS_LIST[0].technologies[1]];
  const p1Lan3 = document.getElementById('p1-lan3');
  [p1Lan3.innerHTML] = [PROJECTS_LIST[0].technologies[2]];
};
SEE_PROJECT2.onclick = () => {
  const p2Name = document.getElementById('p2-name');
  p2Name.innerHTML = PROJECTS_LIST[1].name;
  const p2Description = document.getElementById('p2-description');
  p2Description.innerHTML = PROJECTS_LIST[1].description;
  const p2Img = document.getElementById('p2-img');
  p2Img.src = PROJECTS_LIST[1].Image;
  const p2Pa = document.getElementById('p2-p');
  p2Pa.innerHTML = PROJECTS_LIST[1].project_txt;
  const p2Lan1 = document.getElementById('p2-lan1');
  [p2Lan1.innerHTML] = [PROJECTS_LIST[1].technologies[0]];
  const p2Lan2 = document.getElementById('p2-lan2');
  [p2Lan2.innerHTML] = [PROJECTS_LIST[1].technologies[1]];
  const p2Lan3 = document.getElementById('p2-lan3');
  [p2Lan3.innerHTML] = [PROJECTS_LIST[1].technologies[2]];
};
SEE_PROJECT3.onclick = () => {
  const p3Name = document.getElementById('p3-name');
  p3Name.innerHTML = PROJECTS_LIST[2].name;
  const p3Description = document.getElementById('p3-description');
  p3Description.innerHTML = PROJECTS_LIST[2].description;
  const p3Img = document.getElementById('p3-img');
  p3Img.src = PROJECTS_LIST[2].Image;
  const p3Pa = document.getElementById('p3-p');
  p3Pa.innerHTML = PROJECTS_LIST[2].project_txt;
  const p3Lan1 = document.getElementById('p3-lan1');
  [p3Lan1.innerHTML] = [PROJECTS_LIST[2].technologies[0]];
  const p3Lan2 = document.getElementById('p3-lan2');
  [p3Lan2.innerHTML] = [PROJECTS_LIST[2].technologies[1]];
  const p3Lan3 = document.getElementById('p3-lan3');
  [p3Lan3.innerHTML] = [PROJECTS_LIST[2].technologies[2]];
};
SEE_PROJECT4.onclick = () => {
  const p4Name = document.getElementById('p4-name');
  p4Name.innerHTML = PROJECTS_LIST[3].name;
  const p4Description = document.getElementById('p4-description');
  p4Description.innerHTML = PROJECTS_LIST[3].description;
  const p4Img = document.getElementById('p4-img');
  p4Img.src = PROJECTS_LIST[3].Image;
  const p4Pa = document.getElementById('p4-p');
  p4Pa.innerHTML = PROJECTS_LIST[3].project_txt;
  const p4Lan1 = document.getElementById('p4-lan1');
  [p4Lan1.innerHTML] = [PROJECTS_LIST[3].technologies[0]];
  const p4Lan2 = document.getElementById('p4-lan2');
  [p4Lan2.innerHTML] = [PROJECTS_LIST[3].technologies[1]];
  const p4Lan3 = document.getElementById('p4-lan3');
  [p4Lan3.innerHTML] = [PROJECTS_LIST[3].technologies[2]];
};

const PROJECTS_LIST_DESK = [{
  name: 'Tonic',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li><li class="card-list-item">Back End Dev</li><li class="card-list-item">2020</li>',
  image: 'images/desktop-bg/desk-card-1.svg',
  project_text_d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem',
  technologies: ['HTML', 'CSS', 'JavaScript'],
},
{
  name: 'Multi-Post Stories',
  description: '<li class="card-list-first-child card-list-item">FACEBOOK</li><li class="card-list-item">Full Stack Dev</li><li class="card-list-item">2015</li>',
  image: 'images/desktop-bg/desk-card-2.svg',
  technologies: ['HTML', 'CSS', 'JavaScript'],
},
{
  name: 'Facebook 360',
  description: '<li class="card-list-first-child card-list-item">FACEBOOK</li><li class="card-list-item">Full Stack Dev</li><li class="card-list-item">2018</li>',
  image: 'images/desktop-bg/desk-card-3.svg',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Runby on rails'],
},
{
  name: 'Uber Navigation',
  description: '<li class="card-list-first-child card-list-item">Uber</li><li class="card-list-item">Lead Developer</li><li class="card-list-item">2020</li>',
  image: 'images/desktop-bg/desk-card-4.svg',
  technologies: ['HTML', 'CSS', 'Ruby on rails', 'JavaScript'],
}];

const SEE_DESK_PROJECT1 = document.getElementById('see-btn1-desk');
const SEE_DESK_PROJECT2 = document.getElementById('see-btn2-desk');
const SEE_DESK_PROJECT3 = document.getElementById('see-btn3-desk');
const SEE_DESK_PROJECT4 = document.getElementById('see-btn4-desk');

SEE_DESK_PROJECT1.onclick = () => {
  const p1Named = document.getElementById('p1-name-d');
  p1Named.innerHTML = PROJECTS_LIST_DESK[0].name;
  const p1Descriptiond = document.getElementById('p1-description-d');
  p1Descriptiond.innerHTML = PROJECTS_LIST_DESK[0].description;
  const p1Imgd = document.getElementById('p1-img-d');
  p1Imgd.src = PROJECTS_LIST_DESK[0].image;
  const p1Pd = document.getElementById('p1-p-d');
  p1Pd.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p1Lan1d = document.getElementById('p1-lan1-d');
  [p1Lan1d.innerHTML] = [PROJECTS_LIST_DESK[0].technologies[0]];
  const p1Lan2d = document.getElementById('p1-lan2-d');
  [p1Lan2d.innerHTML] = [PROJECTS_LIST_DESK[0].technologies[1]];
  const p1Lan3d = document.getElementById('p1-lan3-d');
  [p1Lan3d.innerHTML] = [PROJECTS_LIST_DESK[0].technologies[2]];
};
SEE_DESK_PROJECT2.onclick = () => {
  const p2Named = document.getElementById('p2-name-d');
  p2Named.innerHTML = PROJECTS_LIST_DESK[1].name;
  const p2Descriptiond = document.getElementById('p2-description-d');
  p2Descriptiond.innerHTML = PROJECTS_LIST_DESK[1].description;
  const p2Imgd = document.getElementById('p2-img-d');
  p2Imgd.src = PROJECTS_LIST_DESK[1].image;
  const p2Pd = document.getElementById('p2-p-d');
  p2Pd.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p2Lan1d = document.getElementById('p2-lan1-d');
  [p2Lan1d.innerHTML] = [PROJECTS_LIST_DESK[1].technologies[0]];
  const p2Lan2d = document.getElementById('p2-lan2-d');
  [p2Lan2d.innerHTML] = [PROJECTS_LIST_DESK[1].technologies[1]];
  const p2Lan3d = document.getElementById('p2-lan3-d');
  [p2Lan3d.innerHTML] = [PROJECTS_LIST_DESK[1].technologies[2]];
};
SEE_DESK_PROJECT3.onclick = () => {
  const p3Named = document.getElementById('p3-name-d');
  p3Named.innerHTML = PROJECTS_LIST_DESK[2].name;
  const p3Descriptiond = document.getElementById('p3-description-d');
  p3Descriptiond.innerHTML = PROJECTS_LIST_DESK[2].description;
  const p3Imgd = document.getElementById('p3-img-d');
  p3Imgd.src = PROJECTS_LIST_DESK[2].image;
  const p3Pd = document.getElementById('p3-p-d');
  p3Pd.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p3Lan1d = document.getElementById('p3-lan1-d');
  [p3Lan1d.innerHTML] = [PROJECTS_LIST_DESK[2].technologies[0]];
  const p3Lan2d = document.getElementById('p3-lan2-d');
  [p3Lan2d.innerHTML] = [PROJECTS_LIST_DESK[2].technologies[1]];
  const p3Lan3d = document.getElementById('p3-lan3-d');
  [p3Lan3d.innerHTML] = [PROJECTS_LIST_DESK[2].technologies[2]];
};
SEE_DESK_PROJECT4.onclick = () => {
  const p4Named = document.getElementById('p4-name-d');
  p4Named.innerHTML = PROJECTS_LIST_DESK[3].name;
  const p4Descriptiond = document.getElementById('p4-description-d');
  p4Descriptiond.innerHTML = PROJECTS_LIST_DESK[3].description;
  const p4Imgd = document.getElementById('p4-img-d');
  p4Imgd.src = PROJECTS_LIST_DESK[3].image;
  const p4Pd = document.getElementById('p4-p-d');
  p4Pd.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p4Lan1d = document.getElementById('p4-lan1-d');
  [p4Lan1d.innerHTML] = [PROJECTS_LIST_DESK[3].technologies[0]];
  const p4Lan2d = document.getElementById('p4-lan2-d');
  [p4Lan2d.innerHTML] = [PROJECTS_LIST_DESK[3].technologies[1]];
  const p4Lan3d = document.getElementById('p4-lan3-d');
  [p4Lan3d.innerHTML] = [PROJECTS_LIST_DESK[3].technologies[2]];
};