const search = document.getElementById('search');
const searchIcon = document.getElementById('search-icon');
const random = document.getElementById('random');
const meals = document.getElementById('meals');
const result = document.getElementById('result');
const singleMeal = document.getElementById('single-meal');


// search meal and fetch from API
function searchMeals(e){
    e.preventDefault()
    // clear single meal 
    singleMeal.innerHTML='';

    // get search value
    const searchValue = search.value;
    if(searchValue.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(res=>res.json())
        .then(data=>{
            console.log('data', data)
            result.innerHTML= `<h2>Search result for "${searchValue}": </h2>`;
            if(data.meals===null){
                result.innerHTML= `<p> there are no search results. Try again! </p>`
            } else{
                meals.innerHTML= data.meals.map(meal=>`
                <div class='meal'>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class='meal-info'>
                <h3>${meal.strMeal}</h3>
                </div>

                
                </div>`).join('')
            }


        
        })

    }else{
    alert('Please enter a keyword')
    }




}

searchIcon.addEventListener('click',searchMeals)