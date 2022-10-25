/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
Wayne Barnett	Founder & CEO			wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor			        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager			walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	        angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer				scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer		        barbara-ramos-graphic-designer.jpg
**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card

*/

// -------------------------------------------------------------------------------------------

const partners = [

  {
    nome:'Wayne Barnett',
    ruolo:'Founder & CEO',
    foto:'wayne-barnett-founder-ceo.jpg',
  },

  {
    nome:'Angela Caroll',
    ruolo:'Chief Editor',
    foto:'angela-caroll-chief-editor.jpg'
  },

  {
    nome:'Walter Gordon',
    ruolo:'Office Manager',
    foto:'walter-gordon-office-manager.jpg'

  },

  {
    nome:'Angela Lopez',
    ruolo:'Social Media Manager',
    foto:'angela-lopez-social-media-manager.jpg'

  },

  {
    nome:'Scott Estrada',
    ruolo:'Developer',
    foto:'scott-estrada-developer.jpg'
  },

  {
    nome:'Barbara Ramos',
    ruolo:'Graphic Designer',
    foto:'barbara-ramos-graphic-designer.jpg'
  }
]
// ----------------------


partners[0].carettere = 'Simpaticone , Intelligente'
partners[1].carettere = 'Gentile, Educata'
partners[2].carettere = 'Serio , Composto'
partners[3].carettere = 'Allegra , Intelligente'
partners[4].carettere = 'Vivace , Mago dei Computer'
partners[5].carettere = 'Piena di Idee , Solare'


console.log(partners);


// ----------------------

let contAll = document.querySelector('.container-all') ;

let par = document.createElement('p')

par.classList.add('desc')

par.innerHTML = `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus cum vitae mollitia quae magni aliquid soluta! Consequuntur nemo, voluptatem, reprehenderi totam`

contAll.prepend(par)

for(let key of partners ){

  
  let all = `
  
  <div class="cont-card">
  
  <div class="cont-img">
  <img src="img/${key.foto}" alt="">
  </div>
  <div class="cont-text">
  
  <h2 class="name">${key.nome}</h2>
  
  <p class="ruolo">${key.ruolo}</p>
  
  <p class="carat">${key.carettere}</p>

  </div>
  
  `
  contAll.innerHTML += all;
  
}

// -----------------------------------------


