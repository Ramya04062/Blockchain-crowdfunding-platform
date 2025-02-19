import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CreateCampaignContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.3em;
`;

const Input = styled.input`
  padding: 18px;
  border: 1px solid #6698FF; /* Light Blue */
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2em;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 18px;
  border: 1px solid #6698FF; /* Light Blue */
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  resize: vertical;
  font-size: 1.2em;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

const Button = styled.button`
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

function CreateCampaignPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate campaign creation
    alert('Campaign created!');
    navigate('/');
  };

  return (
    <CreateCampaignContainer>
      <Title>Create a New Campaign</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Label htmlFor="description">Description:</Label>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="6"
          required
        />

        <Label htmlFor="goal">Goal Amount (ETH):</Label>
        <Input
          type="number"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />

        <Label htmlFor="deadline">Deadline:</Label>
        <Input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <Label htmlFor="image">Image Upload:</Label>
        <Input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <Button type="submit">Create Campaign</Button>
      </Form>
    </CreateCampaignContainer>
  );
}

export default CreateCampaignPage;
