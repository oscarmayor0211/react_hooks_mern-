import { shallow } from 'enzyme'
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas para el <CounterApp />', () => {

    beforeEach(() =>{
        console.log('beforeEach');
    });

    test('debe de mostrar <CounterApp /> correctamente ', () => {
        
        const value = 0;
        const wrapper = shallow(<CounterApp value ={value}/>);
        expect( wrapper ).toMatchSnapshot();
    }),

    test('debe de mostrar el valor  por defecto de 100 ', () => {
       
        const wrapper = shallow(<CounterApp value ={100}/>);

         
         const valor = wrapper.find('h2').text().trim();

         expect( valor ).toBe( '100' );
                            
    }),

    test('Debe de incrementar contador +1 ', () => {
        const wrapper = shallow(<CounterApp value ={10}/>);
      
            wrapper.find('button').at(0).simulate('click');
            const valor = wrapper.find('h2').text().trim();
            expect( valor ).toBe( '11' );
    }),

    test('Debe de desminuir contador -1 ', () => {
        const wrapper = shallow(<CounterApp value ={10}/>);
      
            wrapper.find('button').at(2).simulate('click');
            const valor = wrapper.find('h2').text().trim();
            expect( valor ).toBe( '9' );
        
    }),

    test('debes de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value ={100}/>);
        wrapper.find('button').at(1).simulate('click');
        const valor = wrapper.find('h2').text().trim();
        expect( valor ).toBe( '100' );
    })
    
    
    
})
