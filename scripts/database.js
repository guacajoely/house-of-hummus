const database = {

    bases: [
        { id: 1, name: "Hummus and Hot Sauce", price: 10 },
        { id: 2, name: "Chicken Fried Lamb Kebab", price: 10 },
        { id: 3, name: "Hot Chicken Greek Salad", price: 10 },
        { id: 4, name: "Brussel Sprout Moussaka", price: 10 },
        { id: 5, name: "Okrakopita", price: 10 },
        { id: 6, name: "Fried Onion and Grape Leaves", price: 10 },
        { id: 7, name: "Chess Baklava", price: 10 },
        { id: 8, name: "Gyro Biscuits", price: 10 },
        { id: 9, name: "Black Eye Pea Falafel", price: 10 },
        { id: 10, name: "Pecan Pastitsio", price: 10 }
    ],

    vegetables: [
        { id: 1, name: "Okra", price: 10 },
        { id: 2, name: "Collard Greens", price: 10 },
        { id: 3, name: "Swiss Chard", price: 10 },
        { id: 4, name: "Corn", price: 10 },
        { id: 5, name: "Brussel Sprouts", price: 10 },
        { id: 6, name: "Sweet Potatoes", price: 10 },
        { id: 7, name: "Grits", price: 10 },
        { id: 8, name: "Fried Green Tomatoes", price: 10 },
        { id: 9, name: "Baked Potato", price: 10 }
    ],

    sides: [
        { id: 1, name: "Chicken Fried Steak", price: 10 },
        { id: 2, name: "Bacon", price: 10 },
        { id: 3, name: "Turkey Leg", price: 10 },
        { id: 4, name: "Ribs", price: 10 },
        { id: 5, name: "Catfish", price: 10 },
        { id: 6, name: "Souvlaki", price: 10 }
    ],

    orders: [
        {
            id: 1,
            baseId: 1,
            vegetableId: 1,
            sideId: 1,
            timestamp: 1614659931693
        }
    ],

    orderBuilder: {},

}


// Other modules invoke these function to GET their state.
export const getBases = () => {
    return database.bases.map(base => ({...base}))
}

export const getVegetables = () => {
    return database.vegetables.map(veggie => ({...veggie}))
}

export const getSides = () => {
    return database.sides.map(side => ({...side}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}



//Now you need to export functions whose responsibility is to SET state.
export const setBase = (id) => {
    database.orderBuilder.baseId = id
    console.log(database.orderBuilder)
}

export const setVegetable = (id) => {
    database.orderBuilder.vegetableId = id
    console.log(database.orderBuilder)
}

export const setSide = (id) => {
    database.orderBuilder.sideId = id
    console.log(database.orderBuilder)
}



//function that takes temporary choices being stored in the orderBuilder state object and make them permanent.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


