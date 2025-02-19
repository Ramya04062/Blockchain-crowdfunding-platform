import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  background-color: #e6e6ff; /* Light Blue-White */
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 600px;
  color: #001f3f; /* Navy Blue */

  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h2`
  color: #001f3f; /* Navy Blue */
  margin-bottom: 15px;
  font-size: 2em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  color: #333;
  margin-bottom: 25px;
  line-height: 1.7;
  font-size: 1.1em;
`;

const Goal = styled.p`
  color: #555;
  margin-bottom: 20px;
  font-size: 1.2em;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s, transform: scale(1);
  font-size: 1.2em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

function CampaignCard({ campaign }) {
  return (
    <CardContainer>
      <Title>{campaign.title}</Title>
      <Description>{campaign.description}</Description>
      <Goal>Goal: {campaign.goal} ETH</Goal>
      <LinkButton to={`/campaign/${campaign.id}`}>View Campaign</LinkButton>
    </CardContainer>
  );
}

export default CampaignCard;
