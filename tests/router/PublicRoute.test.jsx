import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';

describe('Pruebas en <PublicRoute />', () => { 
    test('si no está autenticado debe de mostrar el children', () => { 

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta pública')).toBeTruthy();
        //screen.debug()
     });

     test('debe de navegar si está autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                  <Routes>
                    <Route path='login' element={
                        <PublicRoute>
                          <h1>Ruta pública</h1>
                        </PublicRoute>
                    } />
                    <Route path='marvel' element={<h1>Página Marvel</h1>} />
                  </Routes>
                  
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Página Marvel')).toBeTruthy();
      });
 });