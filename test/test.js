// admin.js

// Sample functionality to add new food items
function addFood() {
    const foodName = prompt('Enter food name:');
    if (foodName) {
        const foodList = document.getElementById('food-list');
        const listItem = document.createElement('li');
        listItem.textContent = foodName;
        foodList.appendChild(listItem);
    }
}

// Sample functionality to add new categories
function addCategory() {
    const categoryName = prompt('Enter category name:');
    if (categoryName) {
        const categoryList = document.getElementById('category-list');
        const listItem = document.createElement('li');
        listItem.textContent = categoryName;
        categoryList.appendChild(listItem);
    }
}

// Sample form submission handler
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully!');
});
