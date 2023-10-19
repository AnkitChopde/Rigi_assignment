

const communityBtn = document.querySelector(".community");
const coursesBtn=document.getElementById("course");
const consultationBtn = document.getElementById("consultation");

const community = document.getElementById("tab1");
const courses = document.getElementById("tab2");
const consultation = document.getElementById("tab3");

const handleTab =()=>{
    document.getElementById("tab1").style.display="block"
    document.querySelector(".community").style.backgroundColor="#275de6"
    document.getElementById("course").style.backgroundColor="white"
    document.getElementById("consultation").style.backgroundColor="white"
    document.getElementById("tab2").style.display="none"
    document.getElementById("tab3").style.display="none"
}

communityBtn.addEventListener("click",handleTab)

const handleTabCourse =()=>{
    document.getElementById("tab1").style.display="none"
    document.getElementById("tab2").style.display="block"
    document.getElementById("course").style.backgroundColor="#275de6"
    document.querySelector(".community").style.backgroundColor="white"
    document.getElementById("consultation").style.backgroundColor="white"
    document.getElementById("tab3").style.display="none"
}

coursesBtn.addEventListener("click",handleTabCourse)



consultationBtn.addEventListener("click",handleTabConsult)
const handleTabConsult =()=>{
    document.getElementById("community").style.display="none"
    document.querySelector(".course").style.display="none"
    document.querySelector(".consultation").style.display="flex"
    document.getElementById("consultation").style.display="#275de6"
    document.querySelector(".community").style.backgroundColor="white"
    document.getElementById("course").style.backgroundColor="white"
}