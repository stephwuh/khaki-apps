import React from 'react';
import SideNav from './SideNav.js';
import {getByTestId, render} from '@testing-library/react';

let container = null;

beforeEach(() =>{

    container = render(<SideNav/>).container
});

it('should show logo', () => {

    expect(getByTestId(container, 'logo')).toBeTruthy();
})

it('should show menu', () => {
    expect(getByTestId(container, 'menu')).toBeTruthy();
})