const Trajetoria = () => {
    return (
        <div className="main-content-trajetoria timeline" style={{ height: "100vh" }}>
            <div className="p-5 m-5 text-center">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Minha Trajetoria</h1>
            </div>
            <div className="container-content left">
                <div className="font-weight-bold mb-0 content">
                    <h2>Empresa: Cluster Tech</h2>
                    <p>Ano: 2023-atualmente</p>
                    <p>Modelo: CLT</p>
                </div>
            </div>
            <div className="container-content right">
                <div className="font-weight-bold mb-0 content">
                    <h2>Empresa: Smart In Tech</h2>
                    <p>Ano: 2022-2023</p>
                    <p>Modelo: CLT</p>
                </div>
            </div>
            <div className="container-content left">
                <div className="font-weight-bold mb-0 content">
                    <h2>Titan Software</h2>
                    <p>Ano:2022-2022</p>
                    <p>Modelo: Estágio</p>
                </div>
            </div>
            <div className="container-content right">
                <div className="font-weight-bold mb-0 content">
                    <h2>Faculdade</h2>
                    <p>Ano: 2022-2024</p>
                    <p>Curso: Análise e Desenvolvimento de Sistemas</p>
                </div>
            </div>
        </div>
    );
}

export default Trajetoria;