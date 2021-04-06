import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas GifExpertApp', () => {
    
    test('Renderizar GifExpertApp', () => {
        
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Cagi', () => {
        const cateogries = [ 'Kimetsu No Yaiba', 'Darling in the Franxx' ];
        const wrapper = shallow( <GifExpertApp defaultCategories = { cateogries }/> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( cateogries.length );  
    })
    
});
