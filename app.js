const sections = document.querySelectorAll('.section')
const controlsSection = document.querySelectorAll('.controls')
const controls = document.querySelectorAll('.control')
const allsections = document.querySelector('.main-content')

function addEventListenersToControlers(){
    // handle control click
    for(let i = 0; i < controls.length; i++){
        controls[i].addEventListener('click', function(){
            let activeController = document.querySelector('.active-btn')
            activeController.classList.remove('active-btn')
            this.classList.add('active-btn')            
        })
    }
    allsections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id
        if(id){
            //remove current selected controler
            controls.forEach(btn => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach(section =>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
    // controlsSection.forEach(section=>{})
}

function init(){
    addEventListenersToControlers()
}

init()

