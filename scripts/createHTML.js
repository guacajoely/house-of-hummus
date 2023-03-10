
import { bases } from "./bases.js"
import { vegetables } from "./vegetables.js"
import { sides } from "./sides.js"
import { orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id === "orderButton") {
        addCustomOrder()
    }
})

export const createHTML = () => {
    return `
        <h1>House of Hummus</h1>

        <article class="choices">
            <section class="choices__bases options">
                <h2>Bases</h2>
                ${bases()}
            </section>
            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${vegetables()}
            </section>
            <section class="choices__sides options">
                <h2>Sides</h2>
                ${sides()}
            </section>
        </article>

        <article>
            <button id="orderButton">Purchase Combo</button>
        </article>

        <article class="custom-orders">
            <h2>Orders</h2>
            ${orders()}
        </article>
    `
}
