/*===== SHOW NAVBAR  =====*/ 
function showNavbar() {
    const $toggle = document.querySelector('#header-toggle')
    const $nav = document.querySelector('#nav-bar')
    const $bodypd = document.querySelector('body')
    const $headerpd = document.querySelector('#header')

    // Validate that all variables exist
    if($toggle && $nav && $bodypd && $headerpd){
        $toggle.addEventListener('click', () => {
            // show navbar
            $nav.classList.toggle('show')
            // change icon
            $toggle.classList.toggle('bx-x')
            // add padding to body
            $bodypd.classList.toggle('body-pd')
            // add padding to header
            $headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar()

/*===== LINK ACTIVE  =====*/ 
const $linkColor = document.querySelectorAll('.nav__link')

$linkColor.forEach(link => link.addEventListener('click', colorLink))

function colorLink(){
    if($linkColor){
        $linkColor.forEach(link => link.classList.remove('active'))
        this.classList.add('active')
    }
}
