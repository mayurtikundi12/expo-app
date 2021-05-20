import React from 'react';
import App from '../App.js';
import 'react-native';
import renderer from 'react-test-renderer';
import {
    render,
    fireEvent,
    act
} from '@testing-library/react-native';
import AppText from '../app/components/AppText';
import AccountScreen from '../app/screens/AccountScreen.js';

describe('accountScreen test', () => {
    let tree, treeInstance;
    beforeAll(() => {
        renderer.create( <App/> )
        tree = renderer.create( <AccountScreen/> )

        treeInstance = tree.root
    })

    it('Account Screen Test', async () => {
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('Delete Test', async() => {
        let button = treeInstance.findByProps({testID: 'TID9'})
        console.log(button)

        expect(button).toBeTruthy();
    })

})


