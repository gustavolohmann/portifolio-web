import Habilidades from "../components/Habilidades";
import MainContent from "../components/MainContent";
import Contato from "../components/Contato";
import Projetos from "../components/Projetos";
import Trajetoria from "../components/Trajetoria";
const Main = () => {
    return (
        <div>
            <MainContent />
            <div className="text-center m-2">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Habilidades</h1>
            </div>
            <Habilidades />
            <div className="text-center m-2">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Minha Trajetoria</h1>
            </div>
            <Trajetoria />
            <div className="text-center m-2">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Projetos</h1>
            </div>
            <Projetos />
            <div className="text-center m-2">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Entre em contato comigo</h1>
            </div>
            <Contato/>
        </div>

    );
}
export default Main;
