import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import HomePage from './pages/HomePage';
import CampaignPage from './pages/CampaignPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import DashboardPage from './pages/DashboardPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to bottom,rgb(16, 16, 16),rgb(16, 16, 16)); /* Navy Blue Gradient */
    color: #fff;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  padding: 30px 0;
  text-align: center;
  border-bottom: 1px solid #6698FF; /* Light Blue */
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #fff;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 15px 30px;
  border: 1px solid #6698FF; /* Light Blue */
  border-radius: 10px;
  transition: background-color 0.3s, color: 0.3s, transform: scale(1);
  font-size: 1.2em;

  &:hover {
    background-color: #6698FF; /* Light Blue */
    color: #001f3f; /* Navy Blue */
    transform: scale(1.05);
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 20px;
`;

const WalletButton = styled.button`
  background-color: ${props => props.isConnected ? '#4CAF50' : '#6698FF'}; /* Green or Light Blue */
  color: ${props => props.isConnected ? '#001f3f' : 'white'}; /* Navy Blue or White */
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color: 0.3s, transform: scale(1);
  font-size: 1.2em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${props => props.isConnected ? '#367c39' : '#516ca3'}; /* Darker Green or Darker Light Blue */
    color: white;
    transform: scale(1.05);
  }
`;

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate wallet connection check
    const walletConnected = localStorage.getItem('walletConnected');
    if (walletConnected === 'true') {
      setIsConnected(true);
    }
  }, []);

  const connectWallet = () => {
    // Simulate connecting to MetaMask or WalletConnect
    localStorage.setItem('walletConnected', 'true');
    setIsConnected(true);
    alert('Wallet connected!');
    navigate('/dashboard');
  };

  const disconnectWallet = () => {
    // Simulate disconnecting the wallet
    localStorage.removeItem('walletConnected');
    setIsConnected(false);
    alert('Wallet disconnected!');
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>Futuristic Crowdfunding Marketplace</Title>
        </Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          {isConnected && <NavLink to="/campaign/create">Create Campaign</NavLink>}
          {isConnected && <NavLink to="/dashboard">Dashboard</NavLink>}
          <WalletButton isConnected={isConnected} onClick={isConnected ? disconnectWallet : connectWallet}>
            {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
          </WalletButton>
        </Nav>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campaign/:id" element={<CampaignPage />} />
            <Route path="/campaign/create" element={<CreateCampaignPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Main>
      </AppContainer>
    </>
  );
}

export default App;
