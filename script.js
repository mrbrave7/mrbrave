const root = document.documentElement;
const themeChanger = document.querySelector('.theme-changer');
themeChanger.addEventListener('click', (e) => {
    console.log(e.target.name)
    if (e.target.name === "sunny-outline") {
        root.style.setProperty('---dark-color', '#f1f1f1');
        root.style.setProperty('---light-color', '#191919');
        e.target.name = 'moon-outline'
    }
    else {
        root.style.setProperty('---dark-color', '#191919');
        root.style.setProperty('---light-color', '#f1f1f1');
        e.target.name = 'sunny-outline'
    }
})
var typed = new Typed('.primary', {
    strings: ['Freelancer', 'Web Designer','Web Developer','Influencer'],
    typeSpeed: 100,
    smartBackspace: true,
    backDelay: 700,
  });
  const menu = document.querySelector('.menu')
  const navigations = document.querySelector('.navigations')
  menu.addEventListener('click' , (e) => {
    if (e.target.name === 'menu-outline') {
        navigations.style.top = '12%';
        e.target.name = 'close-outline'  
    }
    else{
        navigations.style.top = '-100%';
        e.target.name = 'menu-outline' 
    }
  })