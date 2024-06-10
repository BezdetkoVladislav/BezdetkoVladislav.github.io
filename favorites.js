let add_button = document.getElementById('add-button')
let add_window = document.getElementById('add-screen')

function button_add() {
    if (add_window.style.display != 'flex') {
      add_window.style.display = 'flex';
    } 
}

cover_window.removeEventListener('click', function(){city_drop.style.display = 'none'; } )
cover_window.addEventListener('click', function(){add_window.style.display = 'none'; city_drop.style.display = 'none'; } )
add_button.addEventListener('click', function(ev){ev.stopPropagation(); button_add(); })
add_window.addEventListener('click', function(ev){ev.stopPropagation();})