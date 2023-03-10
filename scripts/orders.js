import { getBases, getVegetables, getSides, getOrders } from "./database.js"
const arrayOfBases = getBases()
const arrayOfVegetables = getVegetables()
const arrayOfSides = getSides()



const buildOrderListItem = (order) => {

    // Remember that the function you pass to find() must return true/false
    const foundBase = arrayOfBases.find((base) => {
        return base.id === order.baseId
    })

    const foundVeggie = arrayOfVegetables.find((veggie) => {
        return veggie.id === order.vegetableId
    })

    const foundSide = arrayOfSides.find((side) => {
        return side.id === order.sideId
    })

    let totalCost = 0
    if(foundBase !== undefined){totalCost += foundBase.price}
    if(foundVeggie !== undefined){totalCost += foundVeggie.price }
    if(foundSide !== undefined){totalCost += foundSide.price}

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
                Order #${order.id} cost ${costString}
            </li>`

}




export const orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

