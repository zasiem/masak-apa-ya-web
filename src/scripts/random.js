import Axios from 'axios';

class Random {

    static getFood() {
        return Axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => {
                let data = {
                    name: response.data.meals[0].strMeal,
                    category: response.data.meals[0].strCategory,
                    origin: response.data.meals[0].strArea,
                    description: response.data.meals[0].strInstructions,
                    image: response.data.meals[0].strMealThumb,
                    youtube: response.data.meals[0].strYoutube,
                }
                return data;
            })
            .catch(error => {
                return error;
            })
    }

}

export default Random;