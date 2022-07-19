window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
    const footer = document.querySelector('footer')
    footer.classList.toggle('teste', window.scrollY > 0)
})

const navigation = document.querySelector('nav')

document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active')
    navigation.classList.toggle('active');
}