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
import AppCard from '../app/components/AppCard.js';
describe('accountScreen test', () => {
    let tree, treeInstance;
    let userInfo = {"email":"a@a.com","username":"a"}
    beforeAll(async () => {

        tree = await renderer.create( 
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
    });

    it('Adding New Place', async() => {
        let imageText = treeInstance.findByProps({testID: 'imageText'})
        let title = treeInstance.findByProps({testID: 'accountTitleText'})
        let subTitle = treeInstance.findByProps({testID: 'accountSubTitleText'})
        let btn =  treeInstance.findByProps({testID: 'AddPlace'});
        let originalCards = treeInstance.findAllByType(AppCard);
        await act(async ()=>{
            await fireEvent.changeText(imageText,'../../assets/bora-bora.jpg');
            await fireEvent.changeText(title,'New Place');
            await fireEvent.changeText(subTitle,'new Palce Sub title');
            await fireEvent(btn,'press');
        });

        let newCards = treeInstance.findAllByType(AppCard);
        expect(newCards.length).toEqual(originalCards.length+1);
    })

})


