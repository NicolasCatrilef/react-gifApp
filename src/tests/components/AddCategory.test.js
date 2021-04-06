import { shallow } from "enzyme"
import { AddCategory } from "../../component/AddCategory"
import '@testing-library/jest-dom'

describe('Pruebas AddCategory', () => {
    
    const setCategory = jest.fn();
    let wrapper = shallow( <AddCategory setCategories = { setCategory } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategory } /> );
    } );

    test('Mostrar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Prueba sobre Input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate( 'change', { 
            target:  {
                value: value
            }
        } );

        expect( wrapper.find('h2').text().trim() ).toBe( value );
    });
    
    test('Prueba Submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategory ).not.toHaveBeenCalled();
    });

    test('Llamar setCateogries', () => {
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        
        input.simulate( 'change', { 
            target:  {
                value: value
            }
        } );

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledTimes(1);
        expect( setCategory ).toHaveBeenCalledWith( expect.any( Function ) );
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
    
})
