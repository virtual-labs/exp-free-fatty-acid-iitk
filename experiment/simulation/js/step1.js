var sampleImages = [
    './assets/Fresh Oil.png',
    './assets/1passoil.png',
    './assets/2passoil.png',
    './assets/3passoil.png',
]

var flaskSamples = [
    'Fresh Oil',
    '1 pass',
    '2 pass',
    '3 pass'
]

var selectedSample = null

function selectSample(sender, id) {
    if (selectedSample == null) {
        selectedSample = id

        gsap.to('.step1-tools .tooltiptext', { opacity: 0 })
        gsap.to(sender, {
            duration: 1, y: -100, ease: Back.easeOut.config(1.7)
        })

        document.querySelector('#sampleimage img').src = sampleImages[id]
        document.querySelector('#step3flask img').src = `./assets/${flaskSamples[id]}/3.png`
        document.querySelector('#step-4-flask img').src = `./assets/${flaskSamples[id]}/alcohol/2.png`
        document.querySelector('#step5flask img').src = `./assets/${flaskSamples[id]}/alcohol/2.png`
        document.querySelector('#step-6-flask').src = `./assets/${flaskSamples[id]}/alcohol/2.png`
        document.querySelector('#observationSample').innerHTML = `${flaskSamples[id]}`

        gsap.to('.question-1', { opacity: 1 })
        addTask('<b>Step 1</b> Sample selection')
    }
}