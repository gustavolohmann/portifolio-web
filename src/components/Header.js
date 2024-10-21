import  SelectMenu  from '../utils/select-menu';

const Header = () => {
    return (
        <div className='header d-flex justify-content-around align-items-center border' style={{ height: '100px' }}>
            <ul className='d-flex align-items-center list-unstyled mb-0'>
                <li className='me-3'><button onClick={() => SelectMenu("home")} className='btn border home'>01 - Home</button></li>
                <li className='me-3'><button onClick={() => SelectMenu("habilidade")} className='btn border habilidade'>02 - Habilidades</button></li>
                <li className='me-3'><button onClick={() => SelectMenu("trajetoria")} className='btn border trajetoria'>03 - Trajetoria</button></li>
                <li className='me-3'><button onClick={() => SelectMenu("projeto")} className='btn border projeto'>04 - Projetos</button></li>
                <li className='me-3'><button onClick={() => SelectMenu("contato")} className='btn border contato'>05 - Contato</button></li>
            </ul>
        </div>
    );
}

export default Header;