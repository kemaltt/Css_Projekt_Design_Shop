const sideNav = document.getElementById('slide-in-nav')
const mobilNav = document.getElementById('mobil-nav')


const showNav = () => {

    // mobilNav.style.display = 'none'
    sideNav.style.visibility = 'visible'
    sideNav.style.right = 0
    sideNav.style.left = 0

}
const closeNav = () => {

    mobilNav.style.display = 'block'
    sideNav.style.visibility = 'hidden'
    sideNav.style.right = '-100%'
    sideNav.style.left = '100%'
}