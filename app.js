const btn = document.querySelector('button')

let colors = ['blue','green','red','yellow','pink', 'purple']

btn.addEventListener('click', function(){
    const tick = document.querySelector('.tick')
    const tempColor = colors[0]
    const color = 'text-'+tempColor+'-400'
    colors.shift(); colors.push(tempColor)
    tick.classList.remove(tick.classList[5])
    tick.classList.add('fas','fa-2x','fa-check-double',color)
})
