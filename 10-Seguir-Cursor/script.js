var cursor = document.getElementById( 'cursor' )


document.addEventListener('mousemove', function(e){
    
    cursor.style.opacity = '1';
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = (x - 25) + 'px';
    cursor.style.top = (y - 25) + 'px';
});

document.addEventListener('mouseleave', function(){
    cursor.style.opacity = '0.1';
})

