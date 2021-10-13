import React from 'react';
import Dashboard from './Dashboard';
import {getAllByTestId, render} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

let container = null;

beforeEach( async () =>{

    container = render(<Dashboard/>).container;

    // when testing, code that causes React state updates should be wrapped into act()
    await act(async() => {});
});

it('should show job applications submitted by the user', () => {

    const jobApps = getAllByTestId(container, 'job-app')
    expect(jobApps.length).toBeGreaterThan(0);
})
