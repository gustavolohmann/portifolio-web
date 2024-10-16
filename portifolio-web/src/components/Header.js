const Header = () => {
    return (
        <div class='d-flex justify-content-around align-items-center border' style={{ height: '100px' }}>
            <h1 class='me-3'>logo</h1>
            <ul class='d-flex align-items-center list-unstyled mb-0'>
                <li class='me-3'><button class='btn border'>01 - Home</button></li>
                <li class='me-3'><button class='btn border'>02 - Habilidades</button></li>
                <li><button class='btn border'>03 - Contato</button></li>
            </ul>
        </div>
    );
}

export default Header;