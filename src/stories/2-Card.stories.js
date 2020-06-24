import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import StoryRouter from 'storybook-react-router';
import { RecipeCard } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import recipe from './recipe.json';
import 'stories/main.css';

import image from 'assets/c-hungarian.jpg';

addDecorator(StoryRouter());

export default {
    title: 'Recipe Card',
    component: RecipeCard,
};

export const Default = () => <RecipeCard {...recipe} image={image} />;
