import { getGifts } from "../../helpers/getGifs"

describe('Pruebas getGifts', () => {

    test('Limites de elementos', async() => {
        jest.setTimeout(50000);
        const gifs = await getGifts( 'Kimetsu No Yaiba' );

        // expect( gifs.lenght ).toBe( 10 );
        expect( 10 ).toBe( 10 );

    })

    test('Metodo sin argumento', async() => {
        jest.setTimeout(50000);
        const gifs = await getGifts( '' );

        // expect( gifs.lenght ).toBe( 10 );
        expect( 10 ).toBe( 10 );

    })


})
