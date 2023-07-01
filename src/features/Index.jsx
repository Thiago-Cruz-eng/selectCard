import { useNavigate } from "react-router-dom";
import './Index.css'

const Index = () => {
    const navigete = useNavigate()
    const nextPage = () => {
        navigete('/listagem')
    }
    return (
        <div className="box">
            <p>
            Para comemorar o final desse semestre vinhemos aqui relembrar nosso infancia com um anime muito conhecido!! 
            nele voce vai precisar poder selecionar varios personagens, equipamentos e acessorios para poder vencer sua luta
            ou seja, esteja obstinado pois seus oponentes sao fortes!!
            bora??
            </p>
            <button onClick={nextPage} className="button-57">
                <span className="text">BORA</span>
                <span>OBVIO</span>
            </button>

        </div>

    );
}

export default Index;