import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en <PrivateRoute />', () => { 
    test('debe de mostrar el children si está autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'J C'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRoute initialEntries={['/marvel']}>
                  <PrivateRoute>
                      <h1>Ruta privada</h1>
                  </PrivateRoute>
                </MemoryRoute>
                
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith();
        
     })
 })