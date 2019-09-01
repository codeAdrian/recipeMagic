import breakfast from 'assets/c-breakfast.jpg';
import lunch from 'assets/c-lunch.jpg';
import dinner from 'assets/c-dinner.jpg';
import dessert from 'assets/c-dessert.jpg';
import vegan from 'assets/c-vegan.jpg';
import vegeterian from 'assets/c-vegeterian.jpg';
import lowsugar from 'assets/c-low-sugar.jpg';
import nutsfree from 'assets/c-nuts-free.jpg';
import balanced from 'assets/c-balanced.jpg';
import highProtein from 'assets/c-high-protein.jpg';
import lowCarb from 'assets/c-low-carbs.jpg';
import lowFat from 'assets/c-low-fat.jpg';

import american from 'assets/c-american.jpg';
import asian from 'assets/c-asian.jpg';
import french from 'assets/c-french.jpg';
import hungarian from 'assets/c-hungarian.jpg';
import indian from 'assets/c-indian.jpg';
import italian from 'assets/c-italian.jpg';
import mexican from 'assets/c-mexican.png';
import persian from 'assets/c-persian.jpg';

const categoryAmerican = {
    data: 'american',
    image: american,
    category: 'American'
};

const categoryAsian = {
    data: 'asian',
    image: asian,
    category: 'Asian'
};

const categoryFrench = {
    data: 'french',
    image: french,
    category: 'French'
};

const categoryHungarian = {
    data: 'hungarian',
    image: hungarian,
    category: 'Hungarian'
};

const categoryIndian = {
    data: 'indian',
    image: indian,
    category: 'Indian'
};

const categoryMexican = {
    data: 'mexican',
    image: mexican,
    category: 'Mexican'
};

const categoryPersian = {
    data: 'persian',
    image: persian,
    category: 'Persian'
};

const categoryItalian = {
    data: 'italian',
    image: italian,
    category: 'Italian'
};

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

const categoryBalanced = {
    data: 'balanced',
    image: balanced,
    category: 'Balanced'
};

const categoryHighProtein = {
    data: 'high-protein',
    image: highProtein,
    category: 'High-Protein'
};

const categoryLowCarb = {
    data: 'low-carb',
    image: lowCarb,
    category: 'Low-Carb'
};

const categoryLowFat = {
    data: 'low-fat',
    image: lowFat,
    category: 'Low-Fat'
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
        title: 'Diet meals',
        key: 'dietLabels',
        items: [
            categoryBalanced,
            categoryHighProtein,
            categoryLowCarb,
            categoryLowFat
        ]
    },
    {
        title: 'Around the world',
        key: 'searchQuery',
        items: [
            categoryAmerican,
            categoryAsian,
            categoryFrench,
            categoryHungarian,
            categoryIndian,
            categoryItalian,
            categoryMexican,
            categoryPersian
        ]
    }
];
