import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ContributionsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContributionItem = styled.li`
  background-color: #e6e6ff; /* Light Blue-White */
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
  color: #001f3f; /* Navy Blue */
  font-size: 1.2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function DashboardPage() {
  // Mock contribution data
  const contributions = [
    { id: 1, campaign: 'Innovative Tech Project', amount: 5 },
    { id: 2, campaign: 'Community Art Initiative', amount: 10 },
  ];

  return (
    <DashboardContainer>
      <Title>Your Contributions</Title>
      <ContributionsList>
        {contributions.map((contribution) => (
          <ContributionItem key={contribution.id}>
            You contributed {contribution.amount} ETH to {contribution.campaign}
          </ContributionItem>
        ))}
      </ContributionsList>
    </DashboardContainer>
  );
}

export default DashboardPage;
