export function calculatePrice(base, sauce, toppings, delivery) {
    const basePrice = base.price + sauce.price + calculateToppingsPrice(toppings)
    return basePrice + basePrice * delivery
}

export function calculateToppingsPrice(toppings) {
    return toppings.reduce((acc, curr) => acc + curr.price, 0)
}
