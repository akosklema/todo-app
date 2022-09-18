function updateItemsLeftCounter(updateValue, reset = false) {
  const itemsLeftCountersList = document.querySelectorAll('.items-left-counter');

  itemsLeftCountersList.forEach(itemsLeftCounter => {
    if (reset) {
      itemsLeftCounter.innerText = '0';
    }
    
    const currentNumber = parseInt(itemsLeftCounter.innerText, 10);
    const updatedNumber = currentNumber + updateValue;
    itemsLeftCounter.innerText = `${updatedNumber}`;
  });

};

export default updateItemsLeftCounter;