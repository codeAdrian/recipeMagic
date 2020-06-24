import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Header, Footer } from 'components';

import 'stories/main.css';

export default {
    title: 'Footer',
    component: Footer,
};

export const Default = () => <Footer />;
