import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Header } from 'components';

import { store } from 'store';
import 'stories/main.css';

const withProvider = (story) => (
    <ReduxProvider store={store}>{story()}</ReduxProvider>
);

addDecorator(withProvider);
addDecorator(StoryRouter());

export default {
    title: 'Header',
    component: Header,
};

export const Default = () => <Header />;
