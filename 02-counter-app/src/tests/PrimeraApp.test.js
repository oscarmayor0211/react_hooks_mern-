import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme'
import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
describe('Pruebas en <PrimeraApp></PrimeraApp>', () => {
    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const value = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp value={value}/>);

        expect( wrapper ).toMatchSnapshot();
    }),
    
    test('debe de mostrar el subtitullo enviado por props ', () => {
        const value = 'Hola, soy Goku';
        const subTitulo = 'soy un subtitulo'
        const wrapper = shallow(<PrimeraApp value={value} 
                                   subtitulo = {subTitulo}/>);
         
         const textoParrafo = wrapper.find('p').text();

         expect( textoParrafo ).toBe( subTitulo );
                            
    })
    
});
