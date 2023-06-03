let linkOne = document.getElementById('instagram');
let linkTwo = document.getElementById('linkedin');
let linkThree = doncument.getElementById('github');

function visitInstagram(){
    //window.open('https://www.google.co.uk/','_blank');
    linkOne.style.color = "black"
}

linkOne.addEventListener('click', visitInstagram);