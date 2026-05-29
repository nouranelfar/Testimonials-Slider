const prevBtn = document.getElementsByClassName("prevBtn")[0];
const nextBtn = document.getElementsByClassName("nextBtn")[0];
const userImg = document.getElementsByClassName("userImg")[0];
const userParagraph = document.getElementsByClassName("userParagraph")[0];
const userName = document.getElementsByClassName("userName")[0];
const userJob = document.getElementsByClassName("userJob")[0];
const data = [{
        imgSrc: "./assets/images/image-tanya.jpg",
        paragraph:  `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”` ,
        name: "Tanya Sinclair",
        jobTitle: "UX Engineer"
    },
    {
        imgSrc: "assets/images/image-john.jpg",
        paragraph: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name: "John Tarkpor",
        jobTitle: "Junior Front-end Developer"
    }
];
let current = 0;

function currentUser(){
    userImg.src = data[current].imgSrc;
    userParagraph.textContent = data[current].paragraph;
    userName.textContent = data[current].name;
    userJob.textContent = data[current].jobTitle;
}
currentUser();

function nextUser(){
    if(current>=1){
        return;
    }

    current++;
    currentUser();
}

function prevUser(){
    if(current<=0){
        return;
    }

    current--;
    currentUser();
}

nextBtn.addEventListener("click",nextUser);
document.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight"){
        nextUser();
    }

    if(e.key === "ArrowLeft"){
        prevUser();
    }
})

prevBtn.addEventListener("click",prevUser);
