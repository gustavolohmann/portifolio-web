import React from 'react';

const Habilidades = () => {
    const skills = [
        { name: 'Vue.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
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
        <div className="habilidade-main-content container  d-flex flex-row justify-content-center p-5" style={{ height: "100vh" }}>
            {skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', width: '150px', height: '50px', padding: '10px', alignItems: 'center', marginBottom: '10px', border: '2px solid #E0E0E0', borderRadius: '30px' }}>
                    <img src={skill.url} alt={skill.name} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Habilidades;