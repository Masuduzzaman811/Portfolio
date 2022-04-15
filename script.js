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
  technologies: ['HTML','CSS', 'JavaScript'],
  live_btn: '#',
  source_btn: '#'
},
{
  name: 'Multi-Post <br>Stories',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Front End Dev</li> <li class="card-list-item">2016</li>',
  Image: 'images/work-card2.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML','CSS', 'JavaScript'],
  live_btn: '#',
  source_btn: '#'
},
{
  name: 'Blog',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Front End Dev</li> <li class="card-list-item">2019</li> ',
  Image: 'images/work-card3.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML','CSS', 'JavaScript'],
  live_btn: '#',
  source_btn: '#'
},
{
  name: 'Multi-Post Stories',
  description: '<li class="card-list-first-child card-list-item">CANOPY</li> <li class="card-list-item">Front End Dev</li> <li class="card-list-item">2019</li> ', 
  Image: 'images/work-card4.svg',
  project_txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  technologies: ['HTML','CSS', 'Ruby'],
  live_btn: '#',
  source_btn: '#'
}];

const SEE_PROJECT1 = document.getElementById('see-btn1');
const SEE_PROJECT2 = document.getElementById('see-btn2');
const SEE_PROJECT3 = document.getElementById('see-btn3');
const SEE_PROJECT4 = document.getElementById('see-btn4');

SEE_PROJECT1.onclick = ()=> {
  const p1_name = document.getElementById('p1-name');
  p1_name.innerHTML = PROJECTS_LIST[0].name;
  const p1_description = document.getElementById('p1-description');
  p1_description.innerHTML = PROJECTS_LIST[0].description;
  const p1_img = document.getElementById('p1-img');
  p1_img.src = PROJECTS_LIST[0].Image;
  const p1_p = document.getElementById('p1-p');
  p1_p.innerHTML = PROJECTS_LIST[0].project_txt;
  const p1_lan1 = document.getElementById('p1-lan1');
  p1_lan1.innerHTML = PROJECTS_LIST[0].technologies[0];
  const p1_lan2 = document.getElementById('p1-lan2');
  p1_lan2.innerHTML = PROJECTS_LIST[0].technologies[1];
  const p1_lan3 = document.getElementById('p1-lan3');
  p1_lan3.innerHTML = PROJECTS_LIST[0].technologies[2];
}
SEE_PROJECT2.onclick = ()=> {
  const p2_name = document.getElementById('p2-name');
  p2_name.innerHTML = PROJECTS_LIST[1].name;
  const p2_description = document.getElementById('p2-description');
  p2_description.innerHTML = PROJECTS_LIST[1].description;
  const p2_img = document.getElementById('p2-img');
  p2_img.src = PROJECTS_LIST[1].Image;
  const p2_p = document.getElementById('p2-p');
  p2_p.innerHTML = PROJECTS_LIST[1].project_txt;
  const p2_lan1 = document.getElementById('p2-lan1');
  p2_lan1.innerHTML = PROJECTS_LIST[1].technologies[0];
  const p2_lan2 = document.getElementById('p2-lan2');
  p2_lan2.innerHTML = PROJECTS_LIST[1].technologies[1];
  const p2_lan3 = document.getElementById('p2-lan3');
  p2_lan3.innerHTML = PROJECTS_LIST[1].technologies[2];
}
SEE_PROJECT3.onclick = ()=> {
  const p3_name = document.getElementById('p3-name');
  p3_name.innerHTML = PROJECTS_LIST[2].name;
  const p3_description = document.getElementById('p3-description');
  p3_description.innerHTML = PROJECTS_LIST[2].description;
  const p3_img = document.getElementById('p3-img');
  p3_img.src = PROJECTS_LIST[2].Image;
  const p3_p = document.getElementById('p3-p');
  p3_p.innerHTML = PROJECTS_LIST[2].project_txt;
  const p3_lan1 = document.getElementById('p3-lan1');
  p3_lan1.innerHTML = PROJECTS_LIST[2].technologies[0];
  const p3_lan2 = document.getElementById('p3-lan2');
  p3_lan2.innerHTML = PROJECTS_LIST[2].technologies[1];
  const p3_lan3 = document.getElementById('p3-lan3');
  p3_lan3.innerHTML = PROJECTS_LIST[2].technologies[2];
}
SEE_PROJECT4.onclick = ()=> {
  const p4_name = document.getElementById('p4-name');
  p4_name.innerHTML = PROJECTS_LIST[3].name;
  const p4_description = document.getElementById('p4-description');
  p4_description.innerHTML = PROJECTS_LIST[3].description;
  const p4_img = document.getElementById('p4-img');
  p4_img.src = PROJECTS_LIST[3].Image;
  const p4_p = document.getElementById('p4-p');
  p4_p.innerHTML = PROJECTS_LIST[3].project_txt;
  const p4_lan1 = document.getElementById('p4-lan1');
  p4_lan1.innerHTML = PROJECTS_LIST[3].technologies[0];
  const p4_lan2 = document.getElementById('p4-lan2');
  p4_lan2.innerHTML = PROJECTS_LIST[3].technologies[1];
  const p4_lan3 = document.getElementById('p4-lan3');
  p4_lan3.innerHTML = PROJECTS_LIST[3].technologies[2];
}

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
  technologies: ['HTML', 'CSS', 'JavaScript','Runby on rails'],
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

SEE_DESK_PROJECT1.onclick = ()=> {
  const p1_name_d = document.getElementById('p1-name-d');
  p1_name_d.innerHTML = PROJECTS_LIST_DESK[0].name;
  const p1_description_d = document.getElementById('p1-description-d');
  p1_description_d.innerHTML = PROJECTS_LIST_DESK[0].description;
  const p1_img_d = document.getElementById('p1-img-d');
  p1_img_d.src = PROJECTS_LIST_DESK[0].image;
  const p1_p_d = document.getElementById('p1-p-d');
  p1_p_d.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p1_lan1_d = document.getElementById('p1-lan1-d');
  p1_lan1_d.innerHTML = PROJECTS_LIST_DESK[0].technologies[0];
  const p1_lan2_d = document.getElementById('p1-lan2-d');
  p1_lan2_d.innerHTML = PROJECTS_LIST_DESK[0].technologies[1];
  const p1_lan3_d = document.getElementById('p1-lan3-d');
  p1_lan3_d.innerHTML = PROJECTS_LIST_DESK[0].technologies[2];
}
SEE_DESK_PROJECT2.onclick = ()=> {
  const p2_name_d = document.getElementById('p2-name-d');
  p2_name_d.innerHTML = PROJECTS_LIST_DESK[1].name;
  const p2_description_d = document.getElementById('p2-description-d');
  p2_description_d.innerHTML = PROJECTS_LIST_DESK[1].description;
  const p2_img_d = document.getElementById('p2-img-d');
  p2_img_d.src = PROJECTS_LIST_DESK[1].image;
  const p2_p_d = document.getElementById('p2-p-d');
  p2_p_d.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p2_lan1_d = document.getElementById('p2-lan1-d');
  p2_lan1_d.innerHTML = PROJECTS_LIST_DESK[1].technologies[0];
  const p2_lan2_d = document.getElementById('p2-lan2-d');
  p2_lan2_d.innerHTML = PROJECTS_LIST_DESK[1].technologies[1];
  const p2_lan3_d = document.getElementById('p2-lan3-d');
  p2_lan3_d.innerHTML = PROJECTS_LIST_DESK[1].technologies[2];
}
SEE_DESK_PROJECT3.onclick = ()=> {
  const p3_name_d = document.getElementById('p3-name-d');
  p3_name_d.innerHTML = PROJECTS_LIST_DESK[2].name;
  const p3_description_d = document.getElementById('p3-description-d');
  p3_description_d.innerHTML = PROJECTS_LIST_DESK[2].description;
  const p3_img_d = document.getElementById('p3-img-d');
  p3_img_d.src = PROJECTS_LIST_DESK[2].image;
  const p3_p_d = document.getElementById('p3-p-d');
  p3_p_d.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p3_lan1_d = document.getElementById('p3-lan1-d');
  p3_lan1_d.innerHTML = PROJECTS_LIST_DESK[2].technologies[0];
  const p3_lan2_d = document.getElementById('p3-lan2-d');
  p3_lan2_d.innerHTML = PROJECTS_LIST_DESK[2].technologies[1];
  const p3_lan3_d = document.getElementById('p3-lan3-d');
  p3_lan3_d.innerHTML = PROJECTS_LIST_DESK[2].technologies[2];
}
SEE_DESK_PROJECT4.onclick = ()=> {
  const p4_name_d = document.getElementById('p4-name-d');
  p4_name_d.innerHTML = PROJECTS_LIST_DESK[3].name;
  const p4_description_d = document.getElementById('p4-description-d');
  p4_description_d.innerHTML = PROJECTS_LIST_DESK[3].description;
  const p4_img_d = document.getElementById('p4-img-d');
  p4_img_d.src = PROJECTS_LIST_DESK[3].image;
  const p4_p_d = document.getElementById('p4-p-d');
  p4_p_d.innerHTML = PROJECTS_LIST_DESK[0].project_text_d;
  const p4_lan1_d = document.getElementById('p4-lan1-d');
  p4_lan1_d.innerHTML = PROJECTS_LIST_DESK[3].technologies[0];
  const p4_lan2_d = document.getElementById('p4-lan2-d');
  p4_lan2_d.innerHTML = PROJECTS_LIST_DESK[3].technologies[1];
  const p4_lan3_d = document.getElementById('p4-lan3-d');
  p4_lan3_d.innerHTML = PROJECTS_LIST_DESK[3].technologies[2];
}