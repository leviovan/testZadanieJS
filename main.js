var data ={
    "language":{
        "United_States":"Icon_US.png",   
        "Netherlands":"Icon_NL.png",        
        "Беларусь":"Icon_BY.png",
        "Россия":"Icon_RU.png",
        "Казахстан":"Icon_KZ.png",
        "Türkiye":"Icon_TR.png",
    },
    "menu":{    
        "serveses":{
            "Облачные вычисления":{
                "Cloud consulting":"Relational database services for MySQL, PostgreSQL, and SQL server.",
                "Cloud infrastructure analytics":"Health-specific solutions to enhance the patient experience.",
                "Hybrid Cloud":"Data storage, AI, and analytics solutions for government agencies.",
                "Hybrid Cloud1":"Data storage, AI, and analytics solutions for government agencies.",
                "Hybrid Cloud2":"Data storage, AI, and analytics solutions for government agencies.",
                "Hybrid Cloud3":"Data storage, AI, and analytics solutions for government agencies.",
                "Hybrid Cloud4":"Data storage, AI, and analytics solutions for government agencies."
        },
            "Выделенные серверы":{},
            "Платформенные сервисы":{},
            "Информационная безопасность":{}
        },
        "Managed IT":{},
        "Telecom Solutions":{},
        "About Us":{}
    }
}

burger=document.querySelector(".burger_button")

burger.addEventListener('click',()=>{
    document.querySelector(".menu_burger").classList.toggle("menu_burger1");
})

let close=document.querySelector(".menu__close__img")

close.addEventListener('click',()=>{
    document.querySelector(".menu_burger").classList.toggle("menu_burger1");
})






let list = document.querySelector(".menu_burger__list");
let text = "";
let text1 = "";
let list2 = document.querySelector(".menu_burger__body");

let galochka=`<svg class="galochka"width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.64648 7.35348L3.35359 6.64637L7.00004 10.2928L13 4.29289L13.7071 5L7.00004 11.707L2.64648 7.35348Z" fill="#1D7DED"/>
</svg>`;

let language=Object.getOwnPropertyNames(data.language);
let menu=Object.getOwnPropertyNames(data.menu);


for(const country of Object.getOwnPropertyNames(data.language)) {
    text=text+`<li class="menu_burger__items">${country}</li>`;        
  }

list.innerHTML = text; 
let items= document.getElementsByClassName("menu_burger__items");

document.querySelector(".language").style.background =`url("img/language/Icon_RU.png") no-repeat`;
document.querySelector(".language").style.backgroundPosition="15px 50% ";
document.querySelector(".language").style.backgroundSize="24px 24px ";

language.map(id=(elem,i)=> {
    
    items[i].classList.add(elem);
    items[i].style.background =`url("img/language/${data.language[elem]}") no-repeat`;
    items[i].style.backgroundPosition="15px 50% ";
    items[i].style.backgroundSize="16px 16px ";
    items[i].addEventListener('click',()=>{

        document.querySelector(".galochka").remove();
        document.querySelector(".language").style.background =`url("img/language/${data.language[elem]}") 16px 16px no-repeat`;
        document.querySelector(".language").style.backgroundPosition="15px 50% ";
        document.querySelector(".language").style.backgroundSize="24px 24px ";
        items[i].innerHTML=items[i].innerHTML+galochka;
        if(items[i].childNodes[1]==Object.SVGSVGElement){
            items[i].innerHTML=items[i].innerHTML+galochka;
        }
      
    })

    items[i].addEventListener('mousemove',()=>{
        items[i].style.backgroundColor =`#F1F8FE`;
            // items[i].innerHTML=items[i].innerHTML+galochka;
    })

    items[i].addEventListener('mouseleave',()=>{
        items[i].style.backgroundColor =`#fff`;
    })
}
)

const addSecondMenu=(target,clas)=>{
    document.querySelector(`.${target}`).classList.toggle(`${clas}`);
}
burgerBnt=document.querySelector(".language");

burgerBnt.addEventListener('click',()=>{ addSecondMenu("menu_language","displayNone"),
                                         addSecondMenu("language_block","languagebtn");
                                         event.stopPropagation();
})
window.addEventListener('click',()=>{
    burgerBnt.classList.remove('languagebtn');
})

for(const menuItems of Object.getOwnPropertyNames(data.menu)) {
    text1=text1+`<div class="menu_items">${menuItems}</div>`;    
  }
list2.innerHTML = text1; 
document.querySelector(".Россия").innerHTML=document.querySelector(".Россия").innerHTML+galochka;


let menuit= document.getElementsByClassName("menu_items");
// console.log(menuit);
secondMenu="";


// console.log(data.menu["serveses"][undefined]);

let menuBurgerBodyTitle=document.querySelector(".menu_burger__body__title");

const qweqwe=(secondMenuData,qwe,name)=>{
    let textScndMn=""

        // console.log(secondMenuData);
    for(const menuItems of secondMenuData) {
        textScndMn=textScndMn+`<div class="menu_items">${menuItems}</div>`;    
    }
    list2.innerHTML=textScndMn;
    menuBurgerBodyTitle.innerHTML=name;
    menuBurgerBodyTitle.addEventListener('click',titleBtn)
    treeMenu(secondMenu,qwe,name)
}

const titleBtn=()=>{
    list2.innerHTML=text1;
    menuBurgerBodyTitle.classList.remove('displayblock');
    menu=Object.getOwnPropertyNames(data.menu)
    menuMap()
}


const treeqwe=(dta,secondMenuData1,name,ex)=>{
    let textScndMn=""
    console.log(dta)
    console.log(secondMenuData1)
    console.log(name)
    let secondMenu1=Object.getOwnPropertyNames(secondMenuData1[name]);
   
    for(const menuItems of secondMenu1) {
        textScndMn=textScndMn+`<div class="menu_items">${menuItems} </div>`;    
    }
    list2.innerHTML=textScndMn;
    menuBurgerBodyTitle.innerHTML=name;
    menuBurgerBodyTitle.removeEventListener('click',titleBtn)
   
    menuBurgerBodyTitle.addEventListener('click',()=>{qweqwe(dta,document.getElementsByClassName("menu_items"),ex)})
}

const treeMenu=(menuItm,qwe,treeName)=>{
    console.log(treeName)
    console.log(menuItm);
    menuItm.map(it=(itemstree,i)=>{
        qwe[i].addEventListener('click',()=>{
                addSecondMenu("menu_burger__body", "menubacl"),
                treeqwe(menuItm,data.menu[treeName], itemstree,treeName)
                addSecondMenu("menu_burger__body", "menubacl")        
        });
     })
}

const menuMap=()=>{
        menu.map(menuI=(menuIt,i)=>{     
            // console.log(menuit[i].textContent)
            menuit[i].addEventListener('click',()=>{ 
                addSecondMenu("menu_burger__body","menubacl"),
                secondMenu=Object.getOwnPropertyNames(data.menu[menuit[i].textContent]),
                document.querySelector(".menu_burger__body__title").classList.add('displayblock'), 
                qweqwe(secondMenu, document.getElementsByClassName("menu_items"),  menuIt),
                // treeMenu(secondMenu, 
                       
                //         menuIt),
                addSecondMenu("menu_burger__body","menubacl")
    })
    })
}

menuMap();

