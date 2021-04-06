import { shallow } from "enzyme";
import { GifGridItem } from "../../component/GifGridItem";

describe('Pruebas en Gif Grid Item', () => {

    const title = 'Prueba Apps';
    const url = 'http://localhost/prueba.png';
    const wrapper = shallow( <GifGridItem title = { title } url = { url } /> );
    
    test('Renderizar el GifGridItem', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    

    test('Parrafo debe tener un valor', () => {
        const p = wrapper.find( 'p' );
        
        expect( p.text().trim() ).toBe( title );
    })
    

    test('Pruebas sobre imagenes', () => {
        const img = wrapper.find( 'img' );
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('Debe tener la clase CSS', () => {
        const div = wrapper.find( 'div' );
        const cn = div.prop('className');
        
        expect( cn.includes( 'animate__bounce' ) ).toBe( true );
    })
    
    
});
 