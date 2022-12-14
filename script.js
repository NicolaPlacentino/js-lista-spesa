/* Data una lista della spesa (inventatela), 
stampare in pagina gli elementi della lista individualmente con un ciclo while.  
(anche brutalmente, basta che si vedano)*/

const listArea = document.getElementById('shopping-list')

const shoppingList = ['uova', 'latte', 'pane', 'pomodori', 'mozzarella']

let shoppingElement = 0

while (shoppingElement < shoppingList.length) {

    const listItem = `<li>${shoppingList[shoppingElement]}</li>`

    shoppingElement += 1 

    listArea.innerHTML += listItem
}