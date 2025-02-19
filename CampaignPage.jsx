import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CampaignDetailsContainer = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  color: #ddd;
  margin-bottom: 40px;
  font-size: 1.3em;
  line-height: 1.7;
`;

const Goal = styled.p`
  color: #bbb;
  margin-bottom: 30px;
  font-size: 1.4em;
`;

const ContributeButton = styled.button`
  background-color: #6698FF; /* Light Blue */
  color: #001f3f; /* Navy Blue */
  padding: 18px 35px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform: scale(1);
  font-size: 1.3em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #516ca3; /* Darker Light Blue */
    color: #fff;
    transform: scale(1.05);
  }
`;

const ContributionInput = styled.input`
  padding: 18px;
  border: 1px solid #6698FF; /* Light Blue */
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2em;
  margin-right: 20px;
  width: 250px;
`;

function CampaignPage() {
  const { id } = useParams();
  const [contribution, setContribution] = useState('');

  // Mock campaign data (replace with actual data fetching)
  const campaign = {
    id: id,
    title: 'Innovative Tech Project',
    description: 'Developing a cutting-edge AI solution for sustainable energy.',
    goal: 100,
  };

  const handleContribution = () => {
    // Simulate contributing to the campaign
    alert(`Contributed ${contribution} ETH to campaign ${id}!`);
    setContribution('');
  };

  return (
    <CampaignDetailsContainer>
      <Title>{campaign.title}</Title>
      <Description>{campaign.description}</Description>
      <Goal>Goal: {campaign.goal} ETH</Goal>
      <div>
        <ContributionInput
          type="number"
          placeholder="Enter contribution amount"
          value={contribution}
          onChange={(e) => setContribution(e.target.value)}
        />
        <ContributeButton onClick={handleContribution}>Contribute</ContributeButton>
      </div>
    </CampaignDetailsContainer>
  );
}

export default CampaignPage;
