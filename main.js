let anchors = document.querySelectorAll('a[href*="#"]')


for(let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        let blockID = anchor.getAttribute('href') //#shop
        
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })

    })
}