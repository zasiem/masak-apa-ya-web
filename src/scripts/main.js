import $ from 'jquery';

import Random from './random.js';

function main(){
    
    const cardRecommendation = $('card-recommendation')[0];
    const nextFood = $('#next-food');

    const randomFood = () => {
        Random.getFood()
        .then(response => {
            showRecommendation(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const showRecommendation = (data) => {
        cardRecommendation.foods = data;
    }

    randomFood();
    nextFood.on('click', randomFood);
}

export default main;