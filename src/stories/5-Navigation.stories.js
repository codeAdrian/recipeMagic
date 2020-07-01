import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { Navigation } from 'components';

import { store } from 'store';

import 'css/index.css';

const withProvider = (story) => (
    <ReduxProvider store={store}>{story()}</ReduxProvider>
);

addDecorator(withProvider);
addDecorator(StoryRouter());

export default {
    title: 'Navigation',
    component: Navigation,
    parameters: {
        chromatic: { viewports: [320, 768, 1280] },
    },
};

export const Default = () => <Navigation />;
