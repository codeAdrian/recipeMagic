import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { Tooltip } from 'components';

import { store } from 'store';

import 'css/index.css';

const withProvider = (story) => (
    <ReduxProvider store={store}>{story()}</ReduxProvider>
);

addDecorator(withProvider);
addDecorator(StoryRouter());

export default {
    title: 'Tooltip',
    component: Tooltip,
};

export const Default = () => (
    <div style={{ padding: '1em 5em' }}>
        Click the icon{' '}
        <Tooltip>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis
            adipisci dolor distinctio molestias! Dicta voluptatum distinctio
            atque aliquid, fugiat veritatis, officia temporibus totam eveniet
            ipsa ut nemo velit ratione.
        </Tooltip>
    </div>
);
