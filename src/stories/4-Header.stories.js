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
    parameters: {
        chromatic: { viewports: [320, 768, 1280], delay: 5000 },
    },
};

export const Default = () => <Header />;
