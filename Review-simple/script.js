//creating content

console.log("hello");
const reviews = [
{
    id:1,
    name:"arya",
    job:"Play",
    text:"Eating,drinking,sleeping,playing,crying,dancing,yoga",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    
},
{
    id:2,
    name:"nonty",
    job:"school",
    text:"Studying,using mobile,playing,sleeping,eating,drinking",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
},
];
// creating variables

const name1 =  document.getElementById("personName");
const job1 = document.getElementById("jobTitle");
const info = document.getElementById("feedback");
const img1 = document.getElementById("personImage");


const moveLeft = document.querySelector(".goLeft");
const moveRight = document.querySelector(".goRight");

// loading the page

let currentItem = 0;


window.addEventListener("DOMContentLoaded",function(){

    console.log("start");
    const item = reviews[currentItem];
    img1.src = item.img;
    name1.textContent = item.name;
    job1.textContent = item.job;
    info.textContent = item.text;
    

    console.log(img1.textContent);

});

function showPerson(person){
    const item = reviews[currentItem];

    name1.textContent = item.name;
    job1.textContent = item.job;
    info.textContent = item.text;
    img1.src = item.img;
}


moveLeft.addEventListener("click",function() {
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }

    showPerson(currentItem);
});

moveRight.addEventListener("click",function() {
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})