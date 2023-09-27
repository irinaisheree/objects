function storeProvision(curStock, orderedProducts){

    let localStoreStorage = {}

  for(let index = 0; index < curStock.length; index += 2){

    let product = curStock[index]
    let quantity = Number(curStock[index + 1])
    localStoreStorage[product] = quantity
  }

   for(let index = 0; index < orderedProducts.length; index += 2){
    let product = orderedProducts[index]

    if(!localStoreStorage.hasOwnProperty(product)){
        localStoreStorage[product] = 0
    }

    localStoreStorage[product] += Number(orderedProducts[index + 1])
  }


for (let productKey in localStoreStorage) {
   
    console.log(`${productKey} -> ${localStoreStorage[productKey]}`)
    }
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )