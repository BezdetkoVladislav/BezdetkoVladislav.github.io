function getGridElemSize() {
    let elem = document.querySelector('#films');
    let count = elem.children.length;
    if (count < 3){
      elem.style.justifyContent  = "flex-start";
      elem.style.gridGap = '0 7%';
    }
}



