import { shallow } from "enzyme";
import { GifGrid } from "../../component/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock( '../../hooks/useFetchGif' );

describe('Pruebas GifGrid', () => {
    
    const catg = 'Kimetsu No Yaiba';
    
    test('Renderizar GifGrid', () => {
        
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid value = { catg }/> ) ;

        expect( wrapper ).toMatchSnapshot();
    });
    

    test('Debe mostrar img con UseFetch', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }];
        
        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid value = { catg }/> ) ;

        expect( wrapper ).toMatchSnapshot();
        expect ( wrapper.find( 'p' ).exists() ).toBe( false );
        // console.log( wrapper.find( 'GifGridItem' ).length );
        expect ( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length ); 
    });
    
});
