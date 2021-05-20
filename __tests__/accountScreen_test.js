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
import User from '../app/context/userContext';

describe('accountScreen test', () => {
    let tree, treeInstance;
    let userInfo = {"email":"a@a.com","username":"a"}
    beforeAll(() => {

        tree = renderer.create( 
            <User.Provider value={{userInfo}} >
            <AccountScreen/> 
            </User.Provider>
        )
        treeInstance = tree.root
    })

    it('Account Screen Test', async () => {
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('Delete Test', async() => {
        let button = treeInstance.findByProps({testID: 'TID9'})
        expect(button).toBeTruthy();
        await act(async()=>{
            await button.props.onPress();
        })
        let updatedButtons = treeInstance.findAllByProps({testID: 'TID9'})
        expect(updatedButtons.length).toEqual(0);
    })

})


