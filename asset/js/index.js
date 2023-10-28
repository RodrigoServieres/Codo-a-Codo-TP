let mapbs = `
    <body>
        <main>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d205.47993090424606!2d-58.51971240064112!3d-34.51102405367116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698261754901!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    </body>
`
let mapcb = `
    <body>
        <main>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d368.41442012719074!2d-64.21803106493729!3d-31.408926579665362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698509410633!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    </body>
`
let mapros = `
    <body>
        <main>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d500.75484231493283!2d-56.156670719712906!3d-34.88726737112088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698511721092!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    </body>
`
let mapuy = `
    <body>
        <main>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d469.8225602000805!2d-60.668634028191924!3d-32.9374198994976!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698510372212!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    </body>
`
let mapus = `
    <body>
        <main>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d143.68069033430314!2d-68.32652130022109!3d-54.81703040370755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698511104418!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    </body>
`
document.addEventListener("DOMContentLoaded", function() {
    const buenosAiresButton = document.getElementById("buenosAires");
    const cordobaButton = document.getElementById("cordoba");
    const rosarioButton = document.getElementById("rosario");
    const uruguayButton = document.getElementById("uruguay");
    const ushuaiaButton = document.getElementById("ushuaia");
    buenosAiresButton.addEventListener("click", function() {
        document.write(mapbs)
    })
    cordobaButton.addEventListener("click", function() {
        document.write(mapcb)
    })
    rosarioButton.addEventListener("click", function() {
        document.write(mapros)
    })
    uruguayButton.addEventListener("click", function() {
        document.write(mapuy)
    })
    ushuaiaButton.addEventListener("click", function() {
        document.write(mapus)
    })
});