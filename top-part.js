let cover_window = document.getElementById('root')
let city_drop = document.getElementById('city-drop')
let for_city = document.getElementById('for_city')
let top_bar_left = document.querySelector('#field-bar')
let top_bar_right = document.querySelector('#user-bar')
let for_city_bar = document.getElementById('for_city2')
let for_city_drop = document.getElementById('city-drop2')

let top_bar_left_children = document.querySelectorAll('#field-bar > *')
let top_bar_right_children = document.querySelectorAll('#user-bar > *')

let side_menu = document.querySelector('#field-bar > img')
let side_menu_second = document.querySelector('#side-nav-bar > div > img')
let side_bar = document.getElementById('side-nav-bar')

function drop_city(elem){
  if (elem.style.display != 'block'){
    elem.style.display = 'block';
  }
}

function for_check(width, elem_list) {
    let sum = 0;
    let sty;
    const arr = [];
    if(elem_list == top_bar_right_children) {
        elem_list.forEach(element => {
            arr.unshift(element)
        });
    } else {
        elem_list.forEach(element => {
            arr.push(element);
        });
    }
    for(let elem of arr){
        sty = window.getComputedStyle(elem);
        sum = sum + elem.scrollWidth + parseInt(sty.marginLeft) + parseInt(sty.marginRight);
        if(sum > width) {
            elem.style.opacity = 0;
        } else {
            elem.style.opacity = 100;
        }
    }  
}
function check_for_overflow() {
  if (top_bar_left.scrollWidth >= top_bar_left.clientWidth) {
    for_check(top_bar_left.clientWidth, top_bar_left_children);
  } 
  if (top_bar_right.scrollWidth >= top_bar_right.clientWidth) {
    for_check(top_bar_right.clientWidth, top_bar_right_children);
  }
}

function open_side() {
  side_bar.style.transform =  'translateX(0%)';
}
function close_side() {
  side_bar.style.transform =  'translateX(-100%)';
}
cover_window.addEventListener('click', function(){city_drop.style.display = 'none';for_city_drop.style.display = 'none'; } )
for_city.addEventListener('click', function(ev){ev.stopPropagation(); drop_city(city_drop);})
window.addEventListener('load', check_for_overflow)
window.addEventListener('resize', check_for_overflow)
side_menu.addEventListener('click', open_side)
side_menu_second.addEventListener('click', close_side)
for_city_bar.addEventListener('click', function(eva){eva.stopPropagation(); drop_city(for_city_drop);})
