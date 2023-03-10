import { getSides, setSide } from "./database.js"
const arrayOfSides = getSides()

document.addEventListener("change", (event) => {
        if (event.target.name === "side") {
            setSide(parseInt(event.target.value))
        }
    }
)

export const sides = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfSides.map(side => {
        return `<li>
            <input type="radio" name="side" value="${side.id}" /> ${side.name}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}
