let addText = document.getElementById('addText');
let addSubmit = document.getElementById('addSubmit');
let addOutput = document.getElementById('addOutput');

addSubmit.addEventListener('click', function() {
    var paragraph= document.createElement('p');
    paragraph.innerText = addText.value;
    addOutput.appendChild(paragraph);
    addText.value='';
    paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        addOutput.removeChild(paragraph);
    })
    
})
