const heading = document.getElementById('hello');

setTimeout( ()=>{
heading.textContent='Changed from JavaScript'
heading.style.color = 'red'
heading.style.textAlign = 'center'
heading.style.backgroundColor = 'black'
heading.style.padding = '2rem'


}, 1500);
const heading2 = h2List[0];
const heading3 = h2List[h2List.length-1]
console.log(heading3);

setTimeout(()=>{
  addStylesTo(heading, 'JavaScript')
}, 1500);

setTimeout(()=>{
  addStyleTo(heading2, 'практикуйся')
}, 3000);

setTimeout(()=>{
  addStyleTo(heading3, ' и всё получиться')
}, 4000);

function addStyleTo(node, text, color='red'){
 node.textContent = text
 node.style.color = color
node.style.textAlign ='center'
node.style.backgroundColor = 'black'
node.style.padding = '2rem'
};
