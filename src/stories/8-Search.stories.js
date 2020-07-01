import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { Search } from 'modules';

import { store } from 'store';

import 'css/index.css';

const withProvider = (story) => (
    <ReduxProvider store={store}>{story()}</ReduxProvider>
);

addDecorator(withProvider);
addDecorator(StoryRouter());

export default {
    title: 'Search',
    component: Search,
};

export const Default = () => (
    <Search
        onSearchInputChange={action('click')}
        onSearchSubmit={action('click')}
        searchQuery="Search query"
    />
);
