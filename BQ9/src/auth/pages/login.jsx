import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/Pedidos', {
            replace: true //permite remplazar el historial para no poder dar atras
        });
    }
    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr/>

            <button className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>


        </div>
    )
}