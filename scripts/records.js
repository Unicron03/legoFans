function toggleVisibility(clickedItem) {
    // Hide all ag-courses_item elements
    var allItems = document.querySelectorAll('.ag-courses_item');
    allItems.forEach(function (item) {
        item.style.display = 'none';
    });

    clickedItem.style.display = 'block';

    clickedItem.classList.add("box-selected");

    var dateElement = clickedItem.querySelector('.ag-courses-item_date');
    dateElement.style.whiteSpace = 'normal';

    var savoirPlusElement = clickedItem.querySelector('.savoirPlus');
    savoirPlusElement.style.display = 'none';

    document.querySelector('.cancelArrow').style.display = 'block';
    // document.querySelector('.cancelArrow').style.position = 'absolute';
    // document.querySelector('.cancelArrow').style.left = '67%';
    // document.querySelector('.cancelArrow').style.top = '18%';
}