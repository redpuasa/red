let pro1 = document.getElementById("pro1");
let pro2 = document.getElementById("pro2");
let pro3 = document.getElementById("pro3");
let pro4 = document.getElementById("pro4");
let pro5 = document.getElementById("pro5");
let pro6 = document.getElementById("pro6");
let pro7 = document.getElementById("pro7");
let pro8 = document.getElementById("pro8");
let back = document.getElementById("projects");
let head = document.getElementById("projectHead");
let line = document.getElementById("line");
back.style.backgroundSize = "100% 100%";
back.setAttribute("class","effect");

pro1.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/cafe.jpg") `

})

pro2.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/note.jpg") `
});

pro3.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/under.png")`
});


pro4.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/under1.png")`
head.style.color = "white";
line.style.backgroundColor = "white";
});

pro4.addEventListener('mouseleave', () =>{
back.style.backgroundImage = `url("img/under1.png")`
head.style.color = "black";
line.style.backgroundColor = null;
});

pro5.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/under.png")`
});

pro6.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/under1.png")`
head.style.color = "white";
line.style.backgroundColor = "white";
});

pro6.addEventListener('mouseleave', () =>{
back.style.backgroundImage = `url("img/under1.png")`
head.style.color = "black";
line.style.backgroundColor = null;
});

pro7.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/under.png")`
});

pro8.addEventListener('mouseover', () =>{
back.style.backgroundImage = `url("img/under1.png")`
head.style.color = "white";
line.style.backgroundColor = "white";
});

pro8.addEventListener('mouseleave', () =>{
back.style.backgroundImage = `url("img/under1.png")`
head.style.color = "black";
line.style.backgroundColor = null;
});