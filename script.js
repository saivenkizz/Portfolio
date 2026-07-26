/*=========================================
        IBM MAINFRAME PORTFOLIO
        SCRIPT.JS PART 3A
=========================================*/

/*==========================
      LOADER
===========================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },800);

    },3500);

});

/*==========================
      TYPING EFFECT
===========================*/

const words = [

"IBM Mainframe Developer",

"Python Automation Engineer",

"COBOL Programmer",

"DB2 Developer",

"JCL & VSAM Specialist"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 40 : 90);

}

typeEffect();

/*==========================
      TERMINAL BOOT
===========================*/

const terminal = document.getElementById("terminal");

const bootLines=[

"> IBM Z/OS Enterprise",

"> Initializing System...",

"> Loading COBOL Runtime",

"> Connecting DB2",

"> Loading VSAM Files",

"> Initializing Batch Jobs",

"> Starting Python Automation",

"> Enterprise Services Online",

"> Welcome Pavuluri Sai Narayana"

];

let bootIndex=0;

function bootAnimation(){

    if(bootIndex<bootLines.length){

        terminal.innerHTML += bootLines[bootIndex] + "<br>";

        terminal.scrollTop=terminal.scrollHeight;

        bootIndex++;

        setTimeout(bootAnimation,500);

    }

}

bootAnimation();

/*==========================
      MOBILE MENU
===========================*/

const menu=document.getElementById("menu");

const nav=document.querySelector("nav");

menu.onclick=function(){

    nav.classList.toggle("active");

}

/*==========================
      CLOSE MENU
===========================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.onclick=function(){

        nav.classList.remove("active");

    }

});

/*==========================
      SCROLL REVEAL
===========================*/

const reveals=document.querySelectorAll("section");

function reveal(){

    reveals.forEach(sec=>{

        const top=sec.getBoundingClientRect().top;

        const visible=window.innerHeight-120;

        if(top<visible){

            sec.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================
      SKILL BAR
===========================*/

const skills=document.querySelectorAll(".progress div");

function animateSkills(){

    skills.forEach(bar=>{

        const value=bar.style.width;

        bar.style.width="0";

        setTimeout(()=>{

            bar.style.width=value;

        },300);

    });

}

window.addEventListener("load",animateSkills);

/*==========================
      BUTTON EFFECT
===========================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/*==========================
      CARD HOVER
===========================*/

document.querySelectorAll(

".card,.skill,.project-card,.cert"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*==========================
      SMOOTH LINKS
===========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
/*=========================================
        SCRIPT.JS PART 3B
=========================================*/

/*==========================
    INTERACTIVE TERMINAL
===========================*/

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

const commands = {

help:`
Available Commands

help
about
skills
projects
certifications
contact
github
clear
resume
`,

about:`
Pavuluri Sai Narayana

IBM Mainframe Developer

Python Automation Engineer

Specialized in COBOL, JCL,
DB2, VSAM and Automation.
`,

skills:`
Mainframe
------------
COBOL
JCL
DB2
VSAM
TSO/ISPF

Programming
------------
Python
HTML
CSS
JavaScript
MySQL
`,

projects:`
1. Python Rule Validation Automation

2. Enterprise Reporting

3. COBOL Batch Processing

4. DB2 Database Applications
`,

certifications:`
IBM Mainframe

Cisco PCAP Python

Data Science with Python
`,

contact:`
Email

sainarayanapavuluri@gmail.com

Phone

9705897281

Location

Bangalore
`,

github:`
https://github.com/saivenkizz
`,

resume:`
Resume Download Coming Soon
`
};

terminalInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let cmd=this.value.trim().toLowerCase();

terminalOutput.innerHTML+="<br><span style='color:white;'>></span> "+cmd+"<br>";

if(cmd==="clear"){

terminalOutput.innerHTML="";

}

else if(commands[cmd]){

terminalOutput.innerHTML+=commands[cmd]+"<br>";

}

else{

terminalOutput.innerHTML+="Unknown Command<br>";

}

terminalOutput.scrollTop=terminalOutput.scrollHeight;

this.value="";

}

});

/*==========================
    BINARY RAIN
===========================*/

const binary=document.querySelector(".binary");

setInterval(()=>{

const span=document.createElement("span");

span.innerHTML=Math.random()>0.5?"1":"0";

span.style.position="absolute";

span.style.left=Math.random()*100+"%";

span.style.top="-20px";

span.style.fontSize=(10+Math.random()*25)+"px";

span.style.color="rgba(255,255,255,.08)";

span.style.fontFamily="Consolas";

binary.appendChild(span);

let y=-20;

const fall=setInterval(()=>{

y+=5;

span.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(fall);

span.remove();

}

},30);

},120);

/*==========================
    COUNTERS
===========================*/

document.querySelectorAll(".card h2").forEach(card=>{

const text=card.innerText;

if(!isNaN(text)){

let start=0;

const end=parseInt(text);

const timer=setInterval(()=>{

start++;

card.innerText=start;

if(start>=end){

clearInterval(timer);

}

},20);

}

});

/*==========================
    SCROLL PROGRESS
===========================*/

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="4px";
progress.style.background="white";
progress.style.zIndex="999999";
progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let scroll=window.scrollY;

let height=document.body.scrollHeight-window.innerHeight;

progress.style.width=(scroll/height)*100+"%";

});

/*==========================
    BACK TO TOP
===========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.right="30px";
topBtn.style.bottom="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="white";
topBtn.style.color="black";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==========================
    PARALLAX
===========================*/

window.addEventListener("scroll",()=>{

let value=window.scrollY;

const frame=document.querySelector(".mainframe");

if(frame){

frame.style.transform=`translateY(${value*0.08}px)`;

}

});

/*==========================
    CURRENT YEAR
===========================*/

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

"© "+new Date().getFullYear()+

" Pavuluri Sai Narayana | IBM Mainframe Developer | Python Automation Engineer";

}

/*==========================
    CONTACT FORM
===========================*/

emailjs.init("x60Go7BapMCthKp9-");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.send(
        "service_iw4vexe",
        "template_o8oz8h4",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    )
    .then(function () {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch(function (error) {

        alert("Failed to send message.");

        console.log(error);

    });

});