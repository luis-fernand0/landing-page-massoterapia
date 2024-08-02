function Animation() {
    const firstOne = document.querySelector('.first-one')
    
    const myObserve = new IntersectionObserver((entries)=> {
        console.log(entries)
    })

    myObserve.observe(firstOne)
}

export default  Animation