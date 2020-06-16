// Crear elementos con atributos e hijo
const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement,attributes);
    return customElement;
  };

  // Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
  };

//   funcion para imprimir modal

const printModal = content =>
{
    //crear contenedor interno
 const modalContenElement =createCustomElement('div',{
     id: 'ed-modal-conten',
     class: 'ed-modal-container'

 },[content]);
 // crear contenedor principal
 const modalContainerElement =createCustomElement('div',{
    id: 'ed-modal-container',
    class: 'ed-modal-container'

},[modalContenElement]);

document.body.appendChild(modalContainerElement);

const remoberModal = ()=> document.body.removeChild(modalContainerElement);

modalContainerElement.addEventListener('click',e =>
{
    if(e.target === modalContainerElement) remoberModal();
});
}
// funcion donde se crea la modal
// document.querySelector('#show-modal').addEventListener('click',()=>{
 
//   printModal("<object data=https://pelisplus.me/>");
// });


//Funcion con la cual se cambia el color del boton
const buttons =document.querySelectorAll('.boton');

buttons.forEach(element => {
  element.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let riples = document.createElement('span');
    riples.style.left = x + 'px';
    riples.style.top = y + 'px';
    this.appendChild(riples);

    setTimeout(()=>{
      riples.remove()
    },1000);
  });
});

//Funcion de scroll para que baje la pantalla con cun smooth

let ubicacionPrincipal= window.pageYOffset;
window.onscroll = function(){
  let desplazamiento = window.pageYOffset;
  if(ubicacionPrincipal >= desplazamiento){
    document.querySelector('nav').style.top= '0'
  }
  else{
    document.querySelector('nav').style.top= '-100px'
  }

  ubicacionPrincipal=desplazamiento;
}




