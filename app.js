const inputCollection = document.querySelector(".input-collect")
const btnAddCollection = document.querySelector(".add-item")

const deleteCollection = document.querySelector(".delete-collection a")


let items = [];
btnAddCollection.addEventListener('click', ()=> {
    const addItem = document.querySelector(".content-items")
    // creer un div container qui aura deux enfants , un span et un div class='btn'
                //     <div>
                //         <span>Modu</span>
                //         <div class="btn">-</div>
                //    </div>
    const div = document.createElement('div')
    const span = document.createElement('span')
    const btnInsideDivContainer = document.createElement('div')
    // Ajout de la class btn au div
    btnInsideDivContainer.classList.add('btn')
    btnInsideDivContainer.innerHTML = '-'

    // ajouter la valeur de input dans le tableau items s'il n'est pas vide
    if(inputCollection.value.trim() !== '') {
        items.push(inputCollection.value)
    } else {
        console.log("WTF")
    }

    // Remplir des balises span
    for(let i =0; i<items.length; i++) {
        span.innerHTML = items[i]

    }
    addItem.appendChild(span)

    // Ajouter les elements dans le div
    div.appendChild(span)
    div.appendChild(btnInsideDivContainer)
    // Enfin Push les elements dans addItems
    addItem.appendChild(div)

    // Effacer les données de l'input'
    inputCollection.value = '';
    // Effacer toute la collection
    deleteCollection.addEventListener("click", ()=> {
        addItem.removeChild(div)
    })

    // #Recuperer l'item avec le button moins afin de suprimer l'element

    addItem.addEventListener("click", (e) => {
      // Je recherche la classe btn afin que suprimer son parent
          if (e.target.classList.contains("btn")) {
            e.target.parentElement.remove();
          }
    });


})

// Ajout des category
const containerCategory = document.querySelector('.category div')

const categoryInput = document.querySelector('.add-category input')
const categoryBtn = document.querySelector('.add-category .btn')

itemsCategory = []
categoryBtn.addEventListener('click', ()=>{
    if(categoryInput.value.trim() !== ''){
        itemsCategory.push(categoryInput.value)

    }

    // Creer un div avec une class all-span et un enfant span
    //     <div className="all-span">
    //         <span>1.Défaut</span>
    //     </div>
    const divAllSpan = document.createElement('div')
    divAllSpan.classList.add('all-span')
    const span = document.createElement('span')
    divAllSpan.appendChild(span)

    for(let i=0; i<itemsCategory.length; i++) {
        // span.innerHTML = `${i}.${itemsCategory[i]}`
        span.innerHTML = `${i+2}.${itemsCategory[i]}`


    }
    containerCategory.appendChild(divAllSpan)
    // effacer le input
    categoryInput.value = '';
})
