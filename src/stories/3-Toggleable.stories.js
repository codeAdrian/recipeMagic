import React from 'react';
import { Toggleable } from 'components';

import 'css/index.css';

export default {
    title: 'Toggleable',
    component: Toggleable,
};

export const Default = () => <Toggleable title="Title">Content</Toggleable>;

export const Long = () => (
    <Toggleable title="Longer Title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam earum
        dolorem optio itaque illum minima iure nobis dignissimos architecto
        autem nesciunt eveniet similique, tempore impedit distinctio omnis eum?
        Culpa, sapiente!
    </Toggleable>
);
