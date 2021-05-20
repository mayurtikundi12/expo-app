import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import TravelScreen from '../app/screens/TravelScreen.js';
import {act} from '@testing-library/react-native';
import AppCard from '../app/components/AppCard.js';
describe('Travel Screen test', () => {
    let tree, treeInstance;
    beforeAll(async () => {
       tree = await renderer.create( 
            <TravelScreen/> 
        )
        treeInstance = tree.root
    });

    it('Account Screen Test', async () => {
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('Update Cards List', async() => {
        let showMoreButton = treeInstance.findByProps({testID: 'showMore'});
        expect(showMoreButton).toBeTruthy();
        let cards = treeInstance.findAllByType(AppCard);
        expect(cards).toBeTruthy()
        let originalLength = cards.length;
        await act(async()=>{
            await showMoreButton.props.onPress();
        })
        let updatedCards = treeInstance.findAllByType(AppCard);
        expect(updatedCards.length).toEqual(originalLength+1);
    })

})


