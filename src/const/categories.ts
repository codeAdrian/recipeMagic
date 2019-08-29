import breakfast from 'assets/c-breakfast.jpg';
import lunch from 'assets/c-lunch.jpg';
import dinner from 'assets/c-dinner.jpg';
import dessert from 'assets/c-dessert.jpg';
import vegan from 'assets/c-vegan.jpg';
import vegeterian from 'assets/c-vegeterian.jpg';
import lowsugar from 'assets/c-low-sugar.jpg';
import nutsfree from 'assets/c-nuts-free.jpg';

const categoryBreakfast = {
    data: 'breakfast',
    image: breakfast,
    category: 'Breakfast'
};

const categoryLunch = {
    data: 'lunch',
    image: lunch,
    category: 'Lunch'
};

const categoryDinner = {
    data: 'dinner',
    image: dinner,
    category: 'Dinner'
};

const categoryDesserts = {
    data: 'desserts',
    image: dessert,
    category: 'Desserts'
};

const categoryVegan = {
    data: ['vegan'],
    image: vegan,
    category: 'Vegan'
};

const categoryVegeterian = {
    data: ['vegeterian'],
    image: vegeterian,
    category: 'Vegeterian'
};

const categoryLowSugar = {
    data: ['sugar-conscious'],
    image: lowsugar,
    category: 'Low Sugar'
};

const categoryNutsFree = {
    data: ['tree-nut-free'],
    image: nutsfree,
    category: 'Nut Free'
};

export const categories = [
    {
        title: 'Meals of the day',
        key: 'searchQuery',
        items: [
            categoryBreakfast,
            categoryLunch,
            categoryDinner,
            categoryDesserts
        ]
    },
    {
        title: 'Healthy meals',
        key: 'healthLabels',
        items: [
            categoryVegan,
            categoryVegeterian,
            categoryLowSugar,
            categoryNutsFree
        ]
    },
    {
        title: 'On a diet?',
        key: 'dietLabels',
        items: [
            categoryVegan,
            categoryVegeterian,
            categoryLowSugar,
            categoryNutsFree
        ]
    }
];
