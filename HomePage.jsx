import React from 'react';
import styled from 'styled-components';
import CampaignCard from '../components/CampaignCard';

const HomePageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  color: #eee;
  margin-bottom: 20px;
  text-align: center;
`;

// Mock campaign data
const campaigns = [
  {
    id: '1',
    title: 'Innovative Tech Project',
    description: 'Developing a cutting-edge AI solution for sustainable energy.',
    goal: 100,
  },
  {
    id: '2',
    title: 'Community Art Initiative',
    description: 'Creating a public art installation to revitalize the local community.',
    goal: 50,
  },
];

function HomePage() {
  return (
    <HomePageContainer>
      <Title>Featured Campaigns</Title>
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </HomePageContainer>
  );
}

export default HomePage;
