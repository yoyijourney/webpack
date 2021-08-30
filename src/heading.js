import './heading.css'

export default () => {
    const element = document.createElement('h2')

    element.textContent = 'hello'
    element.classList.add('heading')
    element.addEventListener('click', () => {
        alert('nihao webpack')
    })
    
    return element
}