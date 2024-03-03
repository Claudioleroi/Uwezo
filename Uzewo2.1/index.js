function countdown() {
    // Date cible (14 mars 2024)
    const targetDate = new Date('March 14, 2024 00:00:00').getTime();

    // Mettre à jour le décompte toutes les secondes
    const timerInterval = setInterval(() => {
        // Obtenez la date et l'heure actuelles
        const currentDate = new Date().getTime();

        // Calculez la différence entre la date cible et la date actuelle
        const difference = targetDate - currentDate;

        // Vérifiez si la date cible est atteinte
        if (difference <= 0) {
            clearInterval(timerInterval); // Arrêter le décompte une fois que la date cible est atteinte
            document.querySelector('.hours').innerHTML = "Le hackathon est en cours !";
            return;
        }

        // Calcul du temps restant en jours, heures, minutes et secondes
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Affichage du temps restant sur la page HTML
        document.querySelector('.hours').innerHTML = `<divEVENT WILL START IN:<br> ${days} days,<b style='background:green'>  ${hours} hours</b>,${minutes} minutes, <b style='background:green'>${seconds} seconds</b>`;
    }, 1000); // Mettre à jour toutes les secondes
}

// Appel de la fonction pour démarrer le décompte
countdown();


//menu burger
const menu= document.querySelector(".menu")
const li= document.querySelectorAll(".menu li")
const  burger= document.querySelector('.burger')

burger.addEventListener('click',(e)=>
  {
    e.preventDefault;
    burger.classList.toggle("active");
    menu.classList.toggle("proactive");
     

    li.forEach((li)=>{li.addEventListener("click",(e)=>
    {

      e.preventDefault;

      burger.classList.remove("active");
      menu.classList.remove("proactive");
       
    })


  })})




  //move element

  // Fonction pour détecter le défilement vers le bas
function handleScroll() {
  const elements = document.querySelectorAll('.element');

  // Boucle sur chaque élément
  elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Vérifie si l'élément est dans la vue
      if (elementPosition < windowHeight * 0.8) {
          element.classList.add('active');
      }
  });
}

// Écouteur d'événements pour détecter le défilement
window.addEventListener('scroll', handleScroll);

// Appel initial pour vérifier les éléments visibles lors du chargement de la page
handleScroll();
