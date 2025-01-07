/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`,{delay:700, origin: 'buttom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`,{interval: 100})
sr.reveal(`.choose__img, .calculate__content`,{origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`,{origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
    
    if (calculateCm.value === '' || calculateKg.value === '') {
        // Mostrar mensaje de error si faltan campos
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        calculateMessage.textContent = 'Complete la Altura y el Peso ✍️'
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        // Realizar el cálculo de BMI
        const cm = calculateCm.value / 100, // Convertir cm a metros
              kg = calculateKg.value,      // Obtener peso en kg
              bmi = Math.round(kg / (cm * cm)) // Calcular BMI redondeado
        
        // Limpiar clases previas para evitar conflictos
        calculateMessage.classList.remove('color-red', 'color-green')

        // Mostrar resultados según el valor de BMI
        if (bmi < 18.5) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu peso es ${bmi} y estás bajo de peso.`
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu peso es ${bmi} y tienes un peso normal.`
        } else if (bmi >= 25 && bmi <= 29.9) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu peso es ${bmi} y tienes sobrepeso.`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu peso es ${bmi} y tienes obesidad.`
        }

        // Opcional: Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 8000)
    }
}

// Agregar evento al formulario
calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage =document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')
const sendEmail =(e) =>{
    e.preventDefault()
    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Debes ingresar tu Email'
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    } else{
        emailjs.sendForm('service_a3zi7wy','template_ivdmulk','#contact-form','DREWIh5FGGyrcNCEh')
            .then(() =>{
                contactMessage.classList.add('color-green')
                contactMessage.textContent ='Te has registrado exitosamente'
                setTimeout(() =>{
                    contactMessage.textContent = ''

                },3000)
            }, (error) =>{
                alert('OOPS! algo ah fallado', error)
            })
        
    }
}

contactForm.addEventListener('submit', sendEmail)
// saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
function openModal(id) {
    document.getElementById(id).classList.add('show');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    closeModal('login-modal');
    
});

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    closeModal('register-modal');
    
});

// inisio de sesion aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// Función para verificar el estado de autenticación al cargar la página
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const profileBtn = document.getElementById('profile-btn');

    if (isAuthenticated === 'true') {
        // Usuario autenticado
        loginBtn.classList.add('hidden');
        registerBtn.classList.add('hidden');
        profileBtn.classList.remove('hidden');
    } else {
        // Usuario no autenticado
        loginBtn.classList.remove('hidden');
        registerBtn.classList.remove('hidden');
        profileBtn.classList.add('hidden');
    }
}

// Función para manejar el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simular autenticación exitosa
    localStorage.setItem('isAuthenticated', 'true');
    
    checkAuth();
    closeModal('login-modal');
});

// Función para manejar el registro
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simular registro exitoso
    localStorage.setItem('isAuthenticated', 'true');
    
    checkAuth();
    closeModal('register-modal');
});

// Llamar a checkAuth al cargar la página
window.onload = checkAuth;
function logout() {
    localStorage.removeItem('isAuthenticated');
    
    window.location.href = 'index.html'; // Redirige al inicio
}

