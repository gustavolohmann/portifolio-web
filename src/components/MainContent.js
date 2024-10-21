const MainContent = () => {
    const skills = [
        { name: 'LinkedIn', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg', link: 'https://www.linkedin.com/in/gustavolohmannlinz/' },
        { name: 'GitHub', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', link: 'https://github.com/gustavolohmann' },
    ];

    return (
        <div className="main-content d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="main-content-apresentation w-100 h-50 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center mb-4 d-flex flex-column align-items-start">
                    <h5 className="font-weight-bold mb-0">Bem-vindo!</h5>
                    <h1 className="font-weight-bold mb-0">Eu me chamo <span style={{ color: "#483D8B" }}>Gustavo Lohmann Linz</span></h1>
                    <h5 className="font-weight-bold mb-3">Desenvolvedor Fullstack</h5>
                </div>
                <div className="d-flex justify-content-center">
                    {skills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px',
                                margin: '5px',
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            <img
                                src={skill.url}
                                alt={skill.name}
                                style={{ width: '30px', height: '30px', marginBottom: '5px' }}
                            />
                            <h6 style={{ margin: 0, fontSize: '12px' }}>{skill.name}</h6>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainContent; 