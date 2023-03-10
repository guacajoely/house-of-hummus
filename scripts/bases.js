import { getBases, setBase } from "./database.js"
const arrayOfBases = getBases()

document.addEventListener("change", (event) => {
        if (event.target.name === "base") {
            setBase(parseInt(event.target.value))
        }
    }
)

export const bases = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = arrayOfBases.map(base => {
        return `<li>
            <input type="radio" name="base" value="${base.id}" /> ${base.name}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}
