const Header = () => {
    return (
        <div>
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <ul>
                    <li to={'/'}><button class='btn' >01 - Home</button></li>
                    <li to={'/habilidade'}><button class='btn'>02 - Habilidades</button></li>
                    <li to={'/contato'}><button class='btn'>03 - Contato</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;