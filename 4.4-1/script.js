let btn = document.querySelectorAll(".center button");
let inp = document.querySelector("input");
let text = document.querySelector('.bottom');
let child = document.querySelector('.bottom span');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click" , function () {
        inp.value = '';
        if(btn[i].className !== "active" ){
            btn[i].className = "active";
        }
        if(btn[i].className === 'active'){
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.remove('active');
            }
            btn[i].classList.add('active');
            child.textContent = btn[i].textContent + ' content';
        }
    })
}


function change() {
    if(inp.value > 3 && inp.value < 1){
        inp.value = 1;
        alert('soningiz 3 dan katta');
    }
    for (let i = 0; i < inp.value; i++) {
        if(btn[i].className !== "active" ){
            btn[i].className = "active";
        }
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active');
        }
        btn[i].classList.add('active');
        child.textContent = btn[i].textContent + ' content';
    }
}
