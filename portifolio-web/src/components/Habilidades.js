import React from 'react';

const Habilidades = () => {
    const skills = [
        { name: 'Vue.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
        { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'MySQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
        { name: 'PHP', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
        { name: 'Express', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
        { name: 'Node.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'JavaScript', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'Git', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
        { name: 'NestJS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg' },
        { name: 'Postman', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg' },
    ];

    return (
        <div className="habilidade-main-content container d-flex flex-wrap justify-content-center align-items-center p-5 " style={{ minHeight: "100vh" }}>
            <div className="text-center w-100 m-2">
                <h1 className='font-weight-bold mb-0' style={{ color: "#483D8B" }}>Habilidades</h1>
            </div>
            {skills.map((skill, index) => (
                <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '150px',
                    height: '150px',
                    padding: '20px',
                    margin: '10px',
                    border: '1px solid #E0E0E0',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                    
                }}
                    className="skill-card"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src={skill.url} alt={skill.name} style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
                    <h5 style={{ margin: 0 }}>{skill.name}</h5>
                </div>
            ))}
        </div>
    );
};

export default Habilidades;