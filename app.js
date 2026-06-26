const btn = document.getElementById('loadBtn');
const img = document.getElementById('dogImg');

btn.addEventListener('click', async () => {
    try {
        btn.disabled = true;

        // Making an API request to TheMealDB to get random food image
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();

        // TheMealDB puts the image inside the first meal array, under "strMealThumb"
        img.src = data.meals[0].strMealThumb;
        img.style.display = 'block';
    } catch (err) {
        alert('Error loading image');
    } finally {
        btn.disabled = false;
    }
});