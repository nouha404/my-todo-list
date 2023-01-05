const inputCollection = document.querySelector(".input-collect")
const btnAddCollection = document.querySelector(".add-item")

const addItem = document.querySelector(".content-items")
const deleteCollection = document.querySelector(".delete-collection a")

let items = [];
btnAddCollection.addEventListener('click', ()=> {
    // creer un div container qui aura deux enfants , un span et un div class='btn' exemple
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
    } else {
        const input = document.querySelector(".line-input-btn input")
        input.classList.add("wrong-infos")
        console.log("WTF", input)
        let delayInput = setTimeout( ()=>{
               input.classList.add("wrong-infos")

        }, 100)
        setTimeout(()=>{
            // clearTimeout(delay) ne fonctionne pas
            input.classList.remove('wrong-infos')
        }, 1000)
    }

})

// Ajout des category
const containerCategory = document.querySelector('.category div')
const categoryInput = document.querySelector('.add-category input')
const categoryBtn = document.querySelector('.add-category .btn')

itemsCategory = []
categoryBtn.addEventListener('click', id=>{
    // J'ai tous mis dans le if pour bloquer le clique avec un champ
    if(categoryInput.value.trim() !== ''){
        itemsCategory.push(categoryInput.value)

        // Creer un div avec une class all-span et un enfant span exemple
    //     <div className="all-span">
    //         <span>1.Défaut</span>
    //     </div>
    const divAllSpan = document.createElement('div')
    divAllSpan.classList.add('all-span')
    const span = document.createElement('span')
    divAllSpan.appendChild(span)

    for(let i=0; i<itemsCategory.length; i++) {
        span.innerHTML = `${i+2}.${itemsCategory[i]}`
        // modifier les span en input lors du dbclick
        span.addEventListener('dblclick', ()=> {
            const input = document.createElement('input')
            input.value = span.innerHTML
            let inputParent = span.parentElement
            inputParent.classList.add('add-category')
            span.parentElement.replaceChild(input, span)

            // Quand on perds le focus je veux qu''il enregistre
            input.addEventListener('blur', ()=>{
                span.innerHTML = `${i+2}.${input.value}`
                // supprime la class precedant
                inputParent.classList.remove("add-category")
                // remplace le input par le span
                input.parentElement.replaceChild(span, input)
            })
        })

        // afficher la page add-collection concerner
        span.addEventListener('click', ()=>{
            console.log("hello")
        })
    }
    // fin du boucle for
    containerCategory.appendChild(divAllSpan)
    // effacer le input
    categoryInput.value = '';
    } else {

        const wrongMsg = document.querySelector('.wrong-text')
        const btnPlus = document.querySelector(".add-category .btn")
        const span = document.createElement('span')

        let delay = setTimeout( ()=>{
            span.innerHTML = "Impossible d'enregistrer un champ vide"
            wrongMsg.appendChild(span)
            btnPlus.classList.add('wrongColor')

        }, 100)

        setTimeout(()=>{
            // clearTimeout(delay) ne fonctionne pas
            span.parentElement.removeChild(span)
            btnPlus.classList.remove('wrongColor')
        }, 2000)























    }


})

