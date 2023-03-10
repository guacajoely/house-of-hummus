import { getVegetables, setVegetable } from "./database.js"
const arrayOfVegetables = getVegetables()

document.addEventListener("change", (event) => {
        if (event.target.name === "vegetable") {
            setVegetable(parseInt(event.target.value))
        }
    }
)

export const vegetables = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfVegetables.map(veggie => {
        return `<li>
            <input type="radio" name="vegetable" value="${veggie.id}" /> ${veggie.name}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}
