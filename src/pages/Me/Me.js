import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';

const HobbiesAndInterests = [
  "drones", "photoshop", "web design", "web development", "app design",
  "sketch", "adobe xd", "traveling"
]

const SpokenLanguages = [
  "English - 10/10 reading, 10/10 writing",
  "Spanish - Native - 10/10 reading, 10/10 writing"
]

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Hobbies &amp; Interests</SectionTitle>
        <div>
          {HobbiesAndInterests.map(poi => (
            <Pill key={poi}>{poi}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Spoken Languages</SectionTitle>
        <div>
          {SpokenLanguages.map(poi => (
            <Pill key={poi}>{poi}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
