function countdown() {
    
    const targetDate = new Date('March 14, 2024 00:00:00').getTime();

    const timerInterval = setInterval(() => {
      
        const currentDate = new Date().getTime();

   
        const difference = targetDate - currentDate;


        if (difference <= 0) {
            clearInterval(timerInterval); 
            document.querySelector('.hours').innerHTML = "Le hackathon est en cours !";
            return;
        }

   
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelector('.hours').innerHTML = `<divEVENT WILL START IN:<br> ${days} days,<b style='background:green'>  ${hours} hours</b>,${minutes} minutes, <b style='background:green'>${seconds} seconds</b>`;
    }, 1000); 
}


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



// Sélectionnez le header
const header = document.querySelector('header');

// Fonction pour gérer le défilement
function handleScroll() {
    // Vérifiez la position de défilement
    if (window.scrollY > 0) {
        // Ajoutez une classe pour le style fixe et le fond noir
        header.classList.add('fixed-header');
    } else {
        // Supprimez la classe lorsque le défilement remonte en haut de la page
        header.classList.remove('fixed-header');
    }
}

// Ajoutez un écouteur d'événements pour le défilement
window.addEventListener('scroll', handleScroll);

