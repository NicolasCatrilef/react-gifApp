import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas useFetchGif',  () => {
    
    test('Estado Inicial', async () => {
        const { result, waitForNextUpdate }  = renderHook( () => useFetchGif( 'Kimetsu No Yaiba' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });
    

    test('Retornar Imagenes y loading: False', async () => {
        
        const { result, waitForNextUpdate }  = renderHook( () => useFetchGif( 'Kimetsu No Yaiba' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
});
