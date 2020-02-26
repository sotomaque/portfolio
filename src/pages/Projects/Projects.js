import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {

  console.log(user)

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <a href={project.githubUrl} target="__blank"><ProjectTitle>{project.name}</ProjectTitle></a>
              <p>{project.summary}</p>
              {
                project.website && <Pill><a href={project.website} target="_blank" style={{color: "red"}}>View Demo</a></Pill>
              }
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, index) => (
                  <Pill key={index}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
