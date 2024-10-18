const Projetos = () => {
    const projetos = [
        { nome: "Silimed", empresa: "Cluster tech", descricao: "Criação de ERP para gestão de lockers, relatório, cadastro de produtos e controle de estoque.", tecnologia: "VueJS, Express, MySql, AWS" },
        { nome: "Silimed", empresa: "Cluster tech", descricao: "Criação de app embarcado em lockers para um modelo de negocio 'ASH'.", tecnologia: "Python, Kivy, MySql, RFID" },
        { nome: "Silimed", empresa: "Cluster tech", descricao: "Criação de app embarcado em lockers para um modelo de negocio 'ASC'.", tecnologia: "Python, Kivy, MySql, RFID" },
        { nome: "Laudry", empresa: "Cluster tech", descricao: "Criação de um ERP para a gestão de lockers e lavanderia, incluindo o cadastro de terceiros, o registro de lockers e o acompanhamento em tempo real da disponibilidade dos armários.", tecnologia: "VueJS, NestJs, MySql" },
        { nome: "CRM Consignado Rápido", empresa: "Smart In Tech", descricao: "Manutenção no CRM da empresa, integração com API de terceiros.", tecnologia: "jQuery, PHP, MySql" },
        { nome: "ERP Titan", empresa: "Titan Software", descricao: "Manutenção de ERP, correção de bugs, e acompanhamento com devs mais experientes.", tecnologia: "jQuery, PHP, MySql" },
    ];

    return (
        <div class="container d-flex flex-row align-items-center" style={{ height: "100vh" }}>
            <div class="row">
                <div className="text-center p-5">
                    <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Projetos</h1>
                </div>
                {projetos.map((projeto, index) => (
                    <div key={index} class="col-md-4 mb-4" >
                        <div class="card h-100 d-flex flex-column">
                            <div class="card-body" style={{ backgroundColor: "white" }}>
                                <h5 class="card-title" style={{ backgroundColor: "white" }}>Projeto: {projeto.nome}</h5>
                                <h6 class="card-subtitle mb-2 text-muted" style={{ backgroundColor: "white" }}>Empresa Contratante: {projeto.empresa}</h6>
                                <p class="card-text" style={{ backgroundColor: "white" }}>{projeto.descricao}</p>
                                <small class="text-muted" style={{ backgroundColor: "white" }}>Tecnologia: {projeto.tecnologia}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projetos;
