const { render, screen } = require("react-dom");
const { AuthContext } = require("../../../src/auth/context/AuthContext");
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react.router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => { 

    const contextValue = {
        logged: true,
        use: {
            name: 'JC'
        },
        logout: jest.fn()
    }
    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('JC')).toBeTruthy();
     });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replaced": true});
     });
 });