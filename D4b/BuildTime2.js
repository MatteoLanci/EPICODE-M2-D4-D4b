// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/
const prices = [34, 5, 2];
const shippingCost = 50;
const minDiscount = 100;
let totalCost;
let ambassadorDiscount = 0.7;

let user = [
  {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  },

  {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  },

  {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  },
];

const add = (prices) => prices.reduce((a, b) => a + b, 0);
let sum = add(prices);

console.log(sum + " : this is the value of the cart");

let n = 0;

if (sum > minDiscount && user[n].isAmbassador) {
  totalCost = (sum * ambassadorDiscount).toFixed(2);
} else if (sum <= minDiscount && user[n].isAmbassador) {
  totalCost = (sum * ambassadorDiscount + shippingCost).toFixed(2);
} else if (sum > minDiscount && !user[n].isAmbassador) {
  totalCost = sum.toFixed(2);
} else {
  totalCost = (sum + shippingCost).toFixed(2);
}
console.log(totalCost);
