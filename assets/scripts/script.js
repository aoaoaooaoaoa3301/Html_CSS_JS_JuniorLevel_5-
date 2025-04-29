const but_disign = document.querySelector(".but_disign");
const icon_disign = but_disign.querySelector("img");
var theme = "light";

const body = document.querySelector("body");
const nav_container = document.querySelector(".nav-container");
const container = document.querySelectorAll(".container-item");
const buts = document.querySelectorAll(".but_light");
const text = document.querySelectorAll(".text");

const but_toggle = document.querySelectorAll("#toggle-but");
console.log(but_toggle);

but_disign.addEventListener('click', function(){
    if(theme == "dark"){
        icon_disign.src = "assets/images/icon-moon.svg";
        theme = "light";

        changeTheme("light");
    }
    else if(theme == "light"){
        icon_disign.src = "assets/images/icon-sun.svg";
        theme = "dark";

        changeTheme("dark");
    }

});

but_toggle.forEach(el =>{
    el.addEventListener('click', function(){
        if(el.className == "but_toggle_active"){
            el.classList.add("but_toggle_inactive");
            el.classList.remove("but_toggle_active");
            
        }
        else if(el.className == "but_toggle_inactive"){
            el.classList.add("but_toggle_active");
            el.classList.remove("but_toggle_inactive")
            
        }
    });
});


function changeTheme(color){
    if(color == "dark"){
        body.style.background = 'linear-gradient(180deg, #040918 0%, #091540 100%)';
        body.style.color = 'white';

        container.forEach(el => {
            el.style.background = 'hsl(226, 25%, 17%)';
            el.style.border = '1px solid rgba(255, 255, 255, 0.137)';
        });

        text.forEach(el => {
            el.style.color ='rgba(255, 255, 255, 0.57)';
        });

        buts.forEach(el => {
            el.classList.add('but_dark');
            el.classList.remove('but_light');
        });
        but_disign.id = 'disign-but_dark';

        nav_container.style.background = 'hsl(226, 25%, 17%)';
    }
    else if(color == "light"){
        body.style.background = 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)';
        body.style.color = 'black';

        container.forEach(el => {
            el.style.background = 'white';
            el.style.border = '';
        });

        text.forEach(el => {
            el.style.color ='rgba(0, 0, 0, 0.568)';
        });
        
        buts.forEach(el => {
            el.classList.add('but_light');
            el.classList.remove('but_dark');
        });
        but_disign.id = 'disign-but_light';

        nav_container.style.background = 'white'
    }
}