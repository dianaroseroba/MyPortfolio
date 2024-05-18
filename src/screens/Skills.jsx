import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsUbuntu } from "react-icons/bs";
import { DiCss3, DiGit, DiHtml5, DiJava, DiJavascript, DiMysql, DiPython, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiAzuredevops, SiVirtualbox } from "react-icons/si";

const Skills = () => {
    const { t } = useTranslation();
    
    const [skillHovered, setSkillHovered] = useState(null);

    const handleSkillHover = (skill) => {
        setSkillHovered(skill);
    };
    
    const handleSkillLeave = () => {
        setSkillHovered(null);
    };

    const skillList = [
        {name: 'Python', icon: DiPython},
        {name: 'Java', icon: DiJava},
        {name: 'JavaScript', icon: DiJavascript},
        {name: 'mySQL', icon: DiMysql},
        {name: 'Git', icon: DiGit},
        {name: 'Figma', icon: FiFigma},
        {name: 'HTML', icon: DiHtml5},
        {name: 'CSS', icon: DiCss3},
        {name: 'React', icon: DiReact},
        {name: 'Azure', icon: SiAzuredevops},
        {name: 'Ubuntu', icon: BsUbuntu},
        {name: 'VirtualBox', icon: SiVirtualbox},
    ];

    return (
        <section className="text-colorText text-xl md:px-8 px-12">
            <h1 className="text-colorLetter text-center justify-center text-2xl font-bold">{t('skillsTitle')}</h1>
            <section className="group m-2 grid md:grid-cols-4 md:gap-4 grid-cols-1 gap-2 gap-y-4">
                {skillList.map((skill)=> (
                    <section
                        key={skill.name}
                        className="flex w-40 border-2 rounded-lg gap-4 border-colorLetter p-1"
                        onMouseEnter={()=> handleSkillHover(skill.name)}
                        onMouseLeave={handleSkillLeave}
                    >
                        <div className="text-colorLetter">
                            {React.createElement(skill.icon, { className: "h-6 w-6" })}
                        </div>
                        <span>{skill.name}</span>
                        {skillHovered === skill.name && (
                            <section className="absolute bg-colorText p-4 rounded-md shadow-lg">
                                <p className="text-colorLetter ">{t('descSkill')}</p>
                            </section>
                        )}
                    </section>
                ))}
            </section>
        </section>
    );
};

export default Skills;
