const but_disign = document.querySelector(".but_disign");
const icon_disign = but_disign.querySelector("img");
var theme = "light";
const body = document.querySelector("body");
const nav_container = document.querySelector(".nav-container");
const container = document.querySelectorAll(".container-item");
const but_remove = document.querySelectorAll(".but_light");
const but_filtr = document.querySelectorAll("#filtr-but");
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
but_filtr.forEach(el =>{
    el.addEventListener('click', function(){
        if(el.className == "but_light_disable"){
            el.classList.add("but_light_enable");
            el.classList.remove("but_light_disable");
            var but_used = el.dataset.filtr;
        }
        else if(el.className == "but_dark_disable"){
            el.classList.add("but_dark_enable");
            el.classList.remove("but_dark_disable");
            var but_used = el.dataset.filtr;
        }
        but_filtr.forEach(i =>{
            if(i.dataset.filtr != but_used){
                if(i.className == "but_light_enable"){
                    i.classList.add("but_light_disable");
                    i.classList.remove("but_light_enable");
                }
                else if(i.className == "but_dark_enable"){
                    i.classList.add("but_dark_disable");
                    i.classList.remove("but_dark_enable");
                }
            }
        });

        changeFiltr(el);
    });
});
but_toggle.forEach(el =>{
    el.addEventListener('click', function(){
        var parent = el.parentElement.parentElement.parentElement;
        if(el.className == "but_toggle_active_light"){
            el.classList.add("but_toggle_inactive_light");
            el.classList.remove("but_toggle_active_light");
            parent.dataset.vision = "disable";
        }
        else if(el.className == "but_toggle_inactive_light"){
            el.classList.add("but_toggle_active_light");
            el.classList.remove("but_toggle_inactive_light")
            parent.dataset.vision = "enable";
        }

        else if(el.className == "but_toggle_active_dark"){
            el.classList.add("but_toggle_inactive_dark");
            el.classList.remove("but_toggle_active_dark");
            parent.dataset.vision = "disable";
        }
        else if(el.className == "but_toggle_inactive_dark"){
            el.classList.add("but_toggle_active_dark");
            el.classList.remove("but_toggle_inactive_dark")
            parent.dataset.vision = "enable";
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

        but_filtr.forEach(el => {
            if(el.className == "but_light_enable"){
                el.classList.add('but_dark_enable');
                el.classList.remove('but_light_enable');
            }
            else if(el.className == "but_light_disable"){
                el.classList.add('but_dark_disable');
                el.classList.remove('but_light_disable');
            }
        });
        but_remove.forEach(el => {
            el.classList.add('but_dark');
            el.classList.remove('but_light');
        });
        but_toggle.forEach(el => {
            if(el.className == "but_toggle_inactive_light"){
                el.classList.add('but_toggle_inactive_dark');
                el.classList.remove('but_toggle_inactive_light');
            }
            else if(el.className == "but_toggle_active_light") {
                el.classList.add('but_toggle_active_dark');
                el.classList.remove('but_toggle_active_light');
            }
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
        
        but_remove.forEach(el => {
            el.classList.add('but_light');
            el.classList.remove('but_dark');
        });
        but_filtr.forEach(el => {
            if(el.className == "but_dark_enable"){
                el.classList.add('but_light_enable');
                el.classList.remove('but_dark_enable');
            }
            else if(el.className == "but_dark_disable"){
                el.classList.add('but_light_disable');
                el.classList.remove('but_dark_disable');
            }
        });

        but_toggle.forEach(el => {
            if(el.className == "but_toggle_inactive_dark"){
                el.classList.add('but_toggle_inactive_light');
                el.classList.remove('but_toggle_inactive_dark');
            }
            else if(el.className == "but_toggle_active_dark") {
                el.classList.add('but_toggle_active_light');
                el.classList.remove('but_toggle_active_dark');
            }
        });
        but_disign.id = 'disign-but_light';

        nav_container.style.background = 'white'
    }
}

function changeFiltr(el){
    if(el.dataset.filtr == "all"){
        container.forEach(i =>{
            i.style.display = "flex";
        });
    }
    else if(el.dataset.filtr == "active"){
        container.forEach(i =>{
            if(i.dataset.vision == "enable"){
                i.style.display = "flex";
            }
            else if(i.dataset.vision == "disable"){
                i.style.display = "none";
            }
        });
    }
    else if(el.dataset.filtr == "inactive"){
        container.forEach(i =>{
            if(i.dataset.vision == "disable"){
                i.style.display = "flex";
            }
            else if(i.dataset.vision == "enable"){
                i.style.display = "none";
            }
        });
    }
}

