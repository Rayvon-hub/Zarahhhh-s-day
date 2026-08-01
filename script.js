// =============================
// OPEN THE GIFT
// =============================

const startBtn = document.getElementById("startBtn");
const hero = document.querySelector(".hero");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    hero.style.display = "none";
    mainContent.classList.remove("hidden");

    if (music) {
        music.play().catch(() => {});
    }

    createConfetti();
});


// =============================
// QUESTIONS
// =============================

const questions = [

{
question:"Did Instagram know what it was doing when it brought us together? 📱",
yesReply:"I think fate had a little help. ❤️",
noReply:"Well... I'm still grateful it happened. ❤️"
},

{
question:"Have I ever made you smile when you least expected it? 😊",
yesReply:"That's my favorite answer. 🥹",
noReply:"Challenge accepted. 😄"
},

{
question:"Would you accept a warm hug if I were in Bulgaria right now? 🤗",
yesReply:"I wouldn't let go too quickly. ❤️",
noReply:"I'd still be happy just to see you. 🌹"
},

{
question:"Do you think we'd laugh a lot if we met tomorrow? 😂",
yesReply:"I don't think we'd stop talking.",
noReply:"I think we'd still have an amazing time."
},

{
question:"Do you know how beautiful you are? 💜",
yesReply:"Good... because it's true.",
noReply:"Then let me remind you... you're beautiful."
},

{
question:"Do you miss our calls sometimes? ☎️",
yesReply:"I miss them too... a lot. ❤️",
noReply:"That's okay... I still miss hearing your voice."
},

{
question:"Would you like us to keep making memories together? ✨",
yesReply:"That makes me really happy. ❤️",
noReply:"Whatever happens, I'm grateful we met."
},

{
question:"Final Question... 💖",
yesReply:"Ready!",
noReply:"Ready!"
}

];

let current = 0;

const question = document.getElementById("question");
const questionArea = document.getElementById("questionArea");

function loadQuestion(){

if(current >= questions.length){

questionArea.style.display = "none";

showSecret();

return;

}

question.innerHTML = questions[current].question;

}

loadQuestion();

document.getElementById("yesBtn").onclick = function(){

alert(questions[current].yesReply);

current++;

loadQuestion();

}

document.getElementById("noBtn").onclick = function(){

alert(questions[current].noReply);

current++;

loadQuestion();

}


// =============================
// SHOW SECRET LETTER
// =============================

function showSecret(){

document.getElementById("secret").classList.remove("hidden");

setTimeout(showFinal,8000);

}


// =============================
// SHOW FINAL MESSAGE
// =============================

function showFinal(){

document.getElementById("final").classList.remove("hidden");

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

createFireworks();

}


// =============================
// FLOATING HEARTS
// =============================

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

const emojis = ["❤️","💜","💕","💖","💗","✨"];

heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize = (18+Math.random()*28)+"px";

heart.style.animationDuration = (4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,250);


// =============================
// CONFETTI
// =============================

function createConfetti(){

for(let i=0;i<120;i++){

setTimeout(()=>{

const confetti=document.createElement("div");

confetti.className="heart";

const items=["✨","🎉","💖","🌸","🌹","❤️"];

confetti.innerHTML=items[Math.floor(Math.random()*items.length)];

confetti.style.left=Math.random()*100+"vw";

confetti.style.fontSize=(16+Math.random()*25)+"px";

confetti.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

},i*30);

}

}


// =============================
// FIREWORKS
// =============================

function createFireworks(){

for(let i=0;i<180;i++){

setTimeout(()=>{

const star=document.createElement("div");

star.className="heart";

const effects=["✨","💜","💖","❤️","🌟","💕"];

star.innerHTML=effects[Math.floor(Math.random()*effects.length)];

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*30+"vh";

star.style.fontSize=(20+Math.random()*18)+"px";

star.style.animationDuration=(2+Math.random()*2)+"s";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},4000);

},i*25);

}

}


// =============================
// GALLERY ANIMATION
// =============================

const photos=document.querySelectorAll(".gallery img");

let active=0;

setInterval(()=>{

photos.forEach(photo=>{

photo.style.transform="scale(.95)";
photo.style.opacity=".55";

});

photos[active].style.transform="scale(1.05)";
photos[active].style.opacity="1";

active++;

if(active>=photos.length){

active=0;

}

},2500);


// =============================
// RANDOM LOVE QUOTES
// =============================

const quotes=[

"🇧🇬 Every message from you makes my day better.",

"❤️ I still smile whenever I see your name pop up.",

"📱 Instagram gave me one of my favorite people.",

"💜 I miss hearing your voice.",

"🌍 Kenya and Bulgaria suddenly don't feel that far apart."

];

setInterval(()=>{

const bubble=document.createElement("div");

bubble.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

bubble.style.position="fixed";
bubble.style.bottom="20px";
bubble.style.left="50%";
bubble.style.transform="translateX(-50%)";

bubble.style.background="rgba(255,255,255,.15)";
bubble.style.backdropFilter="blur(12px)";
bubble.style.padding="12px 20px";
bubble.style.borderRadius="30px";
bubble.style.color="white";
bubble.style.zIndex="999";
bubble.style.animation="fadeUp 1s";

document.body.appendChild(bubble);

setTimeout(()=>{

bubble.remove();

},5000);

},18000);
