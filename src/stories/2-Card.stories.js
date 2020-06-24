import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { RecipeCard } from 'components';
import recipe from './recipe.json';

import 'css/index.css';

addDecorator(StoryRouter());

export default {
    title: 'Recipe Card',
    component: RecipeCard,
};

export const Default = () => <RecipeCard {...recipe} />;
