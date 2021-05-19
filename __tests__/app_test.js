import React from 'react';
import App from '../App.js';
import 'react-native';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import AppText from '../app/components/AppText';


describe('appScreenTest',() => {
    let tree, treeInstance;
    beforeAll(() => {tree = renderer.create(<App/>)
    treeInstance = tree.root
    })

    it('App Screen Test',async() => {
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('Login Button Test', async() => {
        let text = treeInstance.findByProps({testID:'TID1'})
        expect(text).toBeTruthy()
    })

    it('Welcome Text Test', async() => {
        let text = treeInstance.findByType(AppText)
        expect(text).toBeTruthy()
    })

    it('Testing with testing library', async() => {
        const {getByTestId, getByText} = render(<App/>);
        
        let output1 = await getByText('Login');
        let output2 = await getByTestId('TID2');
        expect(output1).toBeTruthy()
        expect(output2).toBeTruthy()
    })

    it('Navigation testing', async() => {
        const {getByTestId, getByText} = render(<App/>);
        let output2 = await getByTestId('TID2');
        fireEvent(output2, 'press')
        let newScreen = await getByTestId('TID3');
        expect(newScreen).toBeTruthy()
    })

    it('Register page navigation', async() => {
        const {getByTestId, getByText} = render(<App/>);
        let output2 = await getByTestId('TID2');
        fireEvent(output2, 'press')
        let name = await getByTestId('TID4');
        let email = await getByTestId('TID5');
        let password = await getByTestId('TID6');
        fireEvent.changeText(name, qwe)
        fireEvent.changeText(email, 'qwe@g.com')
        fireEvent.changeText(password, qwer)
        expect(newScreen).toBeTruthy()
    })
})


