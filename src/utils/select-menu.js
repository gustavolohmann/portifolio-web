const SelectMenu = (button) => {
    
    const home = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const habilidade = () => {
        window.scrollTo({
            top: document.querySelector(".habilidade-main-content").offsetTop,
            behavior: 'smooth',
        });
    };

    const trajetoria = () => {
        window.scrollTo({
            top: document.querySelector(".main-content-trajetoria").offsetTop,
            behavior: 'smooth',
        });
    };

    const projeto = () => {
        window.scrollTo({
            top: document.querySelector(".main-content-projeto").offsetTop,
            behavior: 'smooth',
        });
    };

    const contato = () => {
        window.scrollTo({
            top: document.querySelector(".main-content-contato").offsetTop,
            behavior: 'smooth',
        });
    };

    const menuOption = {
        "home": home,
        "habilidade": habilidade,
        "trajetoria": trajetoria,
        "projeto": projeto,
        "contato": contato,
    };

    if (menuOption[button]) {
        menuOption[button]();
    }
};

export default SelectMenu; 