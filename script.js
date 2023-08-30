const btn = document.querySelector(".btn1");

let count;
btn.classList.remove("active");
// btn.style.

function init(){
    btn.classList.remove("active");
    count = 0;

    btn.classList = `btn1`;
}

init();

function tap(){
    if(count === 0){
        btn.classList.add("active");
        count = 1;
    }
    else{
        init();
    }
    
    // console.log('clicked');
}

btn.addEventListener('click', tap);
