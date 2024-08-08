function Animation(elementos) {
    const myObserve = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        });
    })

    elementos.forEach((element) => {
        myObserve.observe(element)
    });
}

export default  Animation