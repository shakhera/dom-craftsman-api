document.addEventListener("DOMContentLoaded", function () {
    // Array of items
    const items = ['Natural language processing', 'Contextual understanding', 'Text generation'];

    // Get the ordered list container
    const orderedList = document.getElementById('item-list');

    // Loop through the items and create list items
    items.forEach((itemText) => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        orderedList.appendChild(listItem);
    });
});
