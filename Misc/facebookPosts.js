var userName = document.getElementById('fb-timeline-cover-name').textContent; 

var elementList = document.getElementsByClassName('userContent');

for(let x of elementList) { 
   if(x.parentNode.children[0].children[0].children[1].children[1].children[0].children[0].children[1].children[0].innerText === userName) { 
      console.log(x.innerText);

   } 



} 
