function Animation(firstOne) {
    const myObserve = new IntersectionObserver((entries) => {
        console.log(entries)
    })

    myObserve.observe(firstOne)
}

export default  Animation