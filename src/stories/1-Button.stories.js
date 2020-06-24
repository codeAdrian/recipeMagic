import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import 'stories/main.css';

export default {
    title: 'Button',
    component: Button,
};

export const Default = () => (
    <button
        onClick={action('click')}
        className="button button--control button--regular button--primary"
        type="reset"
    >
        Clear
    </button>
);

export const WithIcon = () => (
    <button
        className="button button--control button--regular button--primary"
        onClick={action('click')}
    >
        <FontAwesomeIcon icon={faPlus} /> Add to recipes
    </button>
);

export const Cta = () => (
    <button
        onClick={action('click')}
        className="button button--regular button--cta"
    >
        Preparation Instructions
    </button>
);

export const Icon = () => (
    <button
        onClick={action('click')}
        className="button button--regular button--cta button--icon"
        type="submit"
    >
        <FontAwesomeIcon icon={faPlus} />
    </button>
);
