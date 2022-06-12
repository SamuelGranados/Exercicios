let EventoDeScrol = () => {
    console.log('Rolando na funçao')
}

console.log('window.innerWidth')
console.log('screen.width')

window.onresize = function() {
    console.log('window.innerWidth')
    window.scroll(0, 'window.innerWidth')
}

document.onscroll = EventoDeScrol

