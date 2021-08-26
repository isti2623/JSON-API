function loadMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => showMeal(data.categories))
}
loadMeal();

function showMeal(meals) {
    const listItem = document.getElementById("list-item");
    for (const meal of meals) {
        const li = document.createElement('li');
        li.innerHTML = `
<h3>Meal Name : ${meal.strCategory}</h3>
<p>Meal Description : ${meal.strCategoryDescription}</p>
`
        listItem.appendChild(li);

    }
}