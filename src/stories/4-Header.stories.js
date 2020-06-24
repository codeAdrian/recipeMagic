import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { Header } from 'components';

import { store } from 'store';

import 'css/index.css';

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
