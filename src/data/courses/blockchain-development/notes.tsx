// Notes data for the Blockchain Development course
export const blockchainNotes = {
  // Module 1, Lesson 1
  '1-1': {
    title: 'Introduction to Blockchain',
    content: `
# Blockchain Fundamentals

## What is Blockchain?
Blockchain is a distributed, immutable ledger technology that allows data to be stored globally on thousands of servers. It enables a system of recording information that makes it difficult or impossible to change, hack, or cheat the system.

![Blockchain distributed network visualization](https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=1000)

### Key Characteristics of Blockchain
- **Decentralization**: No single entity has control over the entire network
- **Transparency**: All transactions are visible to anyone on the network
- **Immutability**: Once data is recorded, it cannot be altered
- **Security**: Cryptographic techniques secure the data
- **Consensus**: Network participants must agree on the validity of transactions

## How Blockchain Works

### Blocks and Chains
A blockchain consists of a chain of blocks, where each block contains:
- A list of transactions
- A timestamp
- A reference to the previous block (hash)
- A solution to a complex mathematical problem (proof of work)

![Blockchain blocks connected in a chain](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000)

The chain is formed by connecting blocks through cryptographic hashes. Each block contains the hash of the previous block, creating an unbreakable chain.

\`\`\`
Block 1 → Block 2 → Block 3 → ... → Block n
\`\`\`

### Hashing
Hashing is a fundamental process in blockchain technology. It converts input data of any size into a fixed-size output (hash).

\`\`\`
Input: "Hello, World!"
Hash (SHA-256): a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
\`\`\`

Properties of cryptographic hash functions:
1. Same input always produces the same output
2. Different inputs produce different outputs (collision-resistant)
3. Small changes in input produce completely different outputs
4. Computationally efficient to calculate
5. One-way function (cannot derive input from output)

## Consensus Mechanisms

![Mining farm with multiple computers](https://images.unsplash.com/photo-1640826514546-7d923e492cdb?auto=format&fit=crop&q=80&w=1000)

Consensus mechanisms ensure all nodes in the network agree on the state of the blockchain.

### Proof of Work (PoW)
- Used by Bitcoin and Ethereum (until its transition to PoS)
- Miners solve complex mathematical puzzles
- First to solve gets to add the next block and receive rewards
- Energy-intensive but proven secure

\`\`\`
// Example of a simple proof of work
function proofOfWork(previousHash, transactions, difficulty) {
  let nonce = 0;
  let hash = calculateHash(previousHash, transactions, nonce);
  
  while (hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
    nonce++;
    hash = calculateHash(previousHash, transactions, nonce);
  }
  
  return { nonce, hash };
}
\`\`\`

### Proof of Stake (PoS)
- Used by Ethereum 2.0, Cardano, and others
- Validators are selected based on the amount of cryptocurrency they hold and are willing to "stake"
- No complex puzzles to solve, more energy-efficient
- Validators can lose their stake if they validate fraudulent transactions

### Other Consensus Mechanisms
- **Delegated Proof of Stake (DPoS)**: Stakeholders elect delegates to validate transactions
- **Practical Byzantine Fault Tolerance (PBFT)**: Nodes vote on the validity of transactions
- **Proof of Authority (PoA)**: Transactions are validated by approved accounts

## Types of Blockchains

![Different blockchain networks visualization](https://images.unsplash.com/photo-1642403711604-3908e90960ce?auto=format&fit=crop&q=80&w=1000)

### Public Blockchains
- Open to anyone
- All participants have equal rights
- Completely decentralized
- Examples: Bitcoin, Ethereum

### Private Blockchains
- Restricted to specific participants
- Permissions are controlled by an organization
- More centralized
- Examples: Hyperledger Fabric, R3 Corda

### Consortium Blockchains
- Governed by a group of organizations
- Semi-decentralized
- Examples: Energy Web Foundation, Quorum

## Blockchain Applications

### Cryptocurrencies
The most well-known application of blockchain technology is cryptocurrencies like Bitcoin.

![Cryptocurrencies concept with coins and digital elements](https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&q=80&w=1000)

### Smart Contracts
Self-executing contracts with the terms directly written into code.

\`\`\`solidity
// Simple smart contract in Solidity
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private data;
    
    function set(uint256 x) public {
        data = x;
    }
    
    function get() public view returns (uint256) {
        return data;
    }
}
\`\`\`

### Beyond Cryptocurrencies
- **Supply Chain Management**: Tracking products from manufacturer to consumer
- **Digital Identity**: Secure and private identity verification
- **Voting Systems**: Transparent and tamper-proof elections
- **Healthcare**: Secure sharing of patient records
- **Real Estate**: Property records and transfers
- **Finance**: Cross-border payments, loans, and more

## Challenges and Limitations

### Scalability
Most public blockchains face challenges with transaction throughput.

### Energy Consumption
Proof of Work blockchains require significant computational power.

### Regulation
Unclear regulatory frameworks in many jurisdictions.

### Adoption Barriers
Technical complexity and integration with existing systems.

### The Future of Blockchain
Despite these challenges, blockchain technology continues to evolve with solutions like:
- Layer 2 scaling solutions
- New consensus mechanisms
- Interoperability protocols
- Improved user interfaces

![Futuristic blockchain technology concept](https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80&w=1000)

## Getting Started with Blockchain Development

To start developing for blockchain, you'll need:
1. Understanding of programming (JavaScript, Python, etc.)
2. Familiarity with cryptography concepts
3. Knowledge of specific blockchain platforms
4. Development tools and frameworks

In the next lesson, we'll explore Ethereum and smart contract development with Solidity.
    `,
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-yellow-600',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-yellow-500',
    accentColor: 'bg-orange-500',
    accentHoverColor: 'hover:bg-orange-600',
  },
  
  // Module 2, Lesson 1
  '2-1': {
    title: 'Smart Contracts and Ethereum',
    content: `
# Smart Contracts & Ethereum Development

## Introduction to Ethereum
Ethereum is a decentralized, open-source blockchain platform that enables the creation of smart contracts. It extends the functionality of blockchain beyond simple value transfer to become a global, programmable platform.

![Ethereum network visualization](https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80&w=1000)

### Key Components of Ethereum
- **Ether (ETH)**: The native cryptocurrency
- **Ethereum Virtual Machine (EVM)**: Runtime environment for smart contracts
- **Gas**: Unit for measuring computational effort
- **Accounts**: 
  - External Accounts (controlled by private keys)
  - Contract Accounts (controlled by code)

## Understanding Smart Contracts

Smart contracts are self-executing contracts with the terms directly written in code. They run exactly as programmed without possibility of downtime, censorship, fraud, or third-party interference.

![Code on screen representing smart contracts](https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1000)

### Benefits of Smart Contracts
- **Autonomy**: No need for intermediaries
- **Trust**: Encrypted transaction records shared across participants
- **Safety**: Cryptographically secured documents
- **Speed**: Automated processes save time
- **Accuracy**: Automated execution reduces human error
- **Cost Efficiency**: Elimination of intermediaries reduces costs

## Introduction to Solidity

Solidity is the primary programming language for writing smart contracts on Ethereum.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string private greeting;
    
    constructor() {
        greeting = "Hello, World!";
    }
    
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
\`\`\`

### Solidity Basics

#### Data Types
\`\`\`solidity
// Value Types
bool isActive = true;
int signedNumber = -10;
uint unsignedNumber = 10;
address walletAddress = 0x1234567890123456789012345678901234567890;
bytes32 hash = 0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0;

// Reference Types
string text = "Hello";
bytes dynamicBytes = "Hello";
uint[] array = [1, 2, 3];
mapping(address => uint) balances;

// User-defined Types
struct Person {
    string name;
    uint age;
}

enum State { Active, Inactive, Paused }
\`\`\`

![Developer working on blockchain code](https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000)

#### Functions
\`\`\`solidity
// Function visibility
function publicFunction() public { /* ... */ }
function externalFunction() external { /* ... */ }
function internalFunction() internal { /* ... */ }
function privateFunction() private { /* ... */ }

// View and pure functions
function viewFunction() public view returns (uint) { /* ... */ }
function pureFunction() public pure returns (uint) { /* ... */ }

// Function modifiers
modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner");
    _;
}

function restrictedFunction() public onlyOwner {
    // Only the owner can call this function
}
\`\`\`

#### Events
\`\`\`solidity
// Declaring an event
event Transfer(address indexed from, address indexed to, uint256 value);

// Emitting an event
function transfer(address to, uint256 value) public {
    // ... transfer logic
    emit Transfer(msg.sender, to, value);
}
\`\`\`

## Creating a Token on Ethereum

One of the most common applications of smart contracts is creating tokens. Here's a simple ERC-20 token implementation:

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _initialSupply) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _initialSupply * 10**uint256(_decimals);
        balanceOf[msg.sender] = totalSupply;
    }
    
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
    
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[_from] >= _value, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _value, "Allowance too low");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
\`\`\`

![Cryptocurrency token concept](https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000)

## Development Environment Setup

### Tools You'll Need
1. **Node.js and npm**: Required for most Ethereum development tools
2. **Truffle Suite** or **Hardhat**: Development frameworks for Ethereum
3. **Ganache**: Local Ethereum blockchain for testing
4. **MetaMask**: Browser extension wallet for interacting with dApps
5. **Solidity compiler**: For compiling smart contracts

### Setting Up a Project with Truffle
\`\`\`bash
# Install Truffle globally
npm install -g truffle

# Create a new project
mkdir my-dapp
cd my-dapp
truffle init

# Folder structure
# - contracts/: Solidity contracts
# - migrations/: Deployment scripts
# - test/: Tests for your contracts
# - truffle-config.js: Configuration file
\`\`\`

![Development environment for blockchain](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1000)

## Deploying Smart Contracts

### Compiling Contracts
\`\`\`bash
truffle compile
\`\`\`

### Writing Migration Scripts
\`\`\`javascript
// migrations/2_deploy_contracts.js
const SimpleToken = artifacts.require("SimpleToken");

module.exports = function(deployer) {
  // Deploy with constructor arguments: name, symbol, decimals, initial supply
  deployer.deploy(SimpleToken, "My Token", "MTK", 18, 1000000);
};
\`\`\`

### Deploying to a Local Network
\`\`\`bash
# Start Ganache (local blockchain)
ganache-cli

# Deploy contracts
truffle migrate
\`\`\`

### Deploying to Test Networks
\`\`\`bash
# Deploy to Ropsten test network
truffle migrate --network ropsten
\`\`\`

## Testing Smart Contracts

Writing tests for your smart contracts is crucial to ensure they work as expected.

\`\`\`javascript
// tests/SimpleToken.test.js
const SimpleToken = artifacts.require("SimpleToken");

contract("SimpleToken", accounts => {
  const [deployer, recipient] = accounts;
  let tokenInstance;
  
  beforeEach(async () => {
    tokenInstance = await SimpleToken.new("My Token", "MTK", 18, 1000000);
  });
  
  it("should set the correct token name and symbol", async () => {
    const name = await tokenInstance.name();
    const symbol = await tokenInstance.symbol();
    
    assert.equal(name, "My Token", "Token name is incorrect");
    assert.equal(symbol, "MTK", "Token symbol is incorrect");
  });
  
  it("should transfer tokens correctly", async () => {
    const amount = web3.utils.toWei("100", "ether");
    
    await tokenInstance.transfer(recipient, amount, { from: deployer });
    
    const recipientBalance = await tokenInstance.balanceOf(recipient);
    assert.equal(recipientBalance.toString(), amount, "Amount wasn't correctly transferred");
  });
});
\`\`\`

## Common Security Vulnerabilities

![Cybersecurity concept with lock](https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000)

When developing smart contracts, be aware of these common vulnerabilities:

1. **Reentrancy Attacks**: Always update state before external calls
2. **Integer Overflow/Underflow**: Use SafeMath library or Solidity 0.8.0+
3. **Timestamp Dependence**: Don't rely solely on block timestamps for critical logic
4. **Front-Running**: Be aware that transactions in the mempool are visible
5. **Denial of Service**: Avoid loops over unbounded arrays

## Best Practices for Smart Contract Development

1. **Keep contracts simple**: Complex contracts are harder to secure
2. **Use established patterns**: Don't reinvent the wheel
3. **Thoroughly test your contracts**: Include edge cases
4. **Use the latest compiler version**: Newer versions often include security improvements
5. **Audit your code**: Consider professional audits for important contracts
6. **Use OpenZeppelin contracts**: Leverage battle-tested implementations
7. **Implement emergency stops**: Add circuit breakers for emergencies

In the next lesson, we'll explore building complete decentralized applications (dApps) that interact with smart contracts.
    `,
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-yellow-600',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-yellow-500',
    accentColor: 'bg-orange-500',
    accentHoverColor: 'hover:bg-orange-600',
  },
  
  // Module 3, Lesson 1
  '3-1': {
    title: 'Decentralized Applications',
    content: `
# Building Decentralized Applications (dApps)

## What is a dApp?
A decentralized application (dApp) is an application that runs on a distributed computing system—typically a blockchain network. Unlike traditional applications, dApps operate without central control and connect users and providers directly.

![Decentralized application architecture](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000)

### Key Characteristics of dApps
- **Decentralized**: No single point of failure or control
- **Open Source**: Code is typically available for inspection
- **Incentivized**: Tokens or digital assets often reward participants
- **Protocol-based**: Consensus protocols ensure agreement on state

## dApp Architecture

### Frontend
The user interface of a dApp is typically built using standard web technologies:
- HTML, CSS, JavaScript
- Web frameworks (React, Vue, Angular)
- Mobile app frameworks

### Backend
Instead of centralized servers, dApps use blockchain for their backend:
- Smart contracts handle business logic and data storage
- Blockchain network provides decentralized computation
- IPFS or other decentralized storage for files and media

![Developer building a dApp interface](https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1000)

## Building the Frontend

### 1. Setting Up the Development Environment
\`\`\`bash
# Create a new React app
npx create-react-app my-dapp
cd my-dapp

# Install Web3 and other dependencies
npm install web3 @truffle/contract
\`\`\`

### 2. Connecting to Ethereum
\`\`\`javascript
// src/utils/web3.js
import Web3 from 'web3';

let web3;

if (window.ethereum) {
  // Modern dApp browsers
  web3 = new Web3(window.ethereum);
  try {
    // Request account access
    window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("User denied account access");
  }
} else if (window.web3) {
  // Legacy dApp browsers
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Fallback to a local provider
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
  console.log("No web3 instance detected, using local provider");
}

export default web3;
\`\`\`

### 3. Loading Smart Contract
\`\`\`javascript
// src/utils/contract.js
import web3 from './web3';
import TruffleContract from '@truffle/contract';

// Import contract JSON ABI
import TokenArtifact from '../contracts/SimpleToken.json';

const getContract = async () => {
  const Token = TruffleContract(TokenArtifact);
  Token.setProvider(web3.currentProvider);
  
  try {
    // Get deployed contract
    const token = await Token.deployed();
    return token;
  } catch (error) {
    console.error("Could not load contract:", error);
    return null;
  }
};

export default getContract;
\`\`\`

![Web3 dApp interface](https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1000)

### 4. Creating UI Components
\`\`\`jsx
// src/components/TokenBalance.jsx
import React, { useState, useEffect } from 'react';
import web3 from '../utils/web3';
import getContract from '../utils/contract';

function TokenBalance() {
  const [balance, setBalance] = useState('0');
  const [account, setAccount] = useState('');
  
  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        // Get current Ethereum account
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        
        // Load the contract
        const token = await getContract();
        if (token) {
          // Get token balance
          const balanceWei = await token.balanceOf(accounts[0]);
          // Convert from wei to tokens (assuming 18 decimals)
          const balanceToken = web3.utils.fromWei(balanceWei.toString());
          setBalance(balanceToken);
        }
      } catch (error) {
        console.error("Error loading blockchain data:", error);
      }
    };
    
    loadBlockchainData();
  }, []);
  
  return (
    <div className="token-balance">
      <h2>Your Token Balance</h2>
      <p>Account: {account}</p>
      <p>Balance: {balance} MTK</p>
    </div>
  );
}

export default TokenBalance;
\`\`\`

### 5. Implementing Token Transfer
\`\`\`jsx
// src/components/TokenTransfer.jsx
import React, { useState } from 'react';
import web3 from '../utils/web3';
import getContract from '../utils/contract';

function TokenTransfer() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  
  const handleTransfer = async (e) => {
    e.preventDefault();
    setStatus('Processing...');
    
    try {
      // Validate input
      if (!web3.utils.isAddress(recipient)) {
        throw new Error('Invalid recipient address');
      }
      
      // Get current account
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];
      
      // Load contract
      const token = await getContract();
      
      // Convert amount to wei (assuming 18 decimals)
      const amountWei = web3.utils.toWei(amount);
      
      // Send transaction
      await token.transfer(recipient, amountWei, { from: sender });
      
      setStatus('Transfer successful!');
      setAmount('');
      setRecipient('');
    } catch (error) {
      console.error("Transfer error:", error);
      setStatus(\`Transfer failed: \${error.message}\`);
    }
  };
  
  return (
    <div className="token-transfer">
      <h2>Transfer Tokens</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>Recipient Address:</label>
          <input 
            type="text" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            placeholder="0x..." 
            required 
          />
        </div>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            min="0.000001" 
            step="0.000001" 
            required 
          />
        </div>
        <button type="submit">Send Tokens</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default TokenTransfer;
\`\`\`

## User Experience Considerations

![User interacting with dApp on mobile](https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&q=80&w=1000)

### Handling Blockchain Latency
- Implement loading states for transactions
- Provide clear feedback during blockchain operations
- Consider optimistic UI updates with fallbacks

### Managing Gas Costs
- Display estimated gas costs to users
- Allow customization of gas price for advanced users
- Implement gas optimization strategies in your contracts

### Improving Onboarding
- Guide users through wallet setup
- Simplify complex blockchain concepts
- Provide clear error messages and recovery paths

## IPFS Integration for Decentralized Storage

InterPlanetary File System (IPFS) provides decentralized file storage that complements blockchain applications.

\`\`\`javascript
// Using IPFS in a React application
import { create } from 'ipfs-http-client';

// Connect to IPFS (using Infura or local node)
const ipfs = create({ 
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https' 
});

// Function to upload file to IPFS
async function uploadToIPFS(file) {
  try {
    const added = await ipfs.add(file, {
      progress: (prog) => console.log(\`Upload progress: \${prog}\`)
    });
    
    // Return IPFS URL
    const url = \`https://ipfs.infura.io/ipfs/\${added.path}\`;
    return url;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    return null;
  }
}
\`\`\`

![IPFS distributed storage visualization](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000)

## Creating a Complete dApp: NFT Marketplace Example

Here's a simplified example of how components might interact in an NFT marketplace dApp:

1. **Smart Contracts**:
   - NFT contract (implements ERC-721)
   - Marketplace contract (handles listings and sales)

2. **Frontend Pages**:
   - Home/Discovery page
   - NFT detail page
   - User profile/collection
   - Create/mint NFT page

3. **Key Functionalities**:
   - Mint new NFTs
   - List NFTs for sale
   - Buy NFTs
   - View transaction history

### NFT Display Component
\`\`\`jsx
// src/components/NFTCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NFTCard({ nft }) {
  return (
    <div className="nft-card">
      <div className="image-container">
        <img src={nft.imageUrl} alt={nft.name} />
      </div>
      <div className="details">
        <h3>{nft.name}</h3>
        <p className="creator">Created by {nft.creator}</p>
        {nft.forSale ? (
          <div className="price">
            <span>{nft.price} ETH</span>
            <button className="buy-btn">Buy Now</button>
          </div>
        ) : (
          <p className="not-for-sale">Not for sale</p>
        )}
      </div>
      <Link to={\`/nft/\${nft.id}\`} className="view-details">
        View Details
      </Link>
    </div>
  );
}

export default NFTCard;
\`\`\`

## Deploying Your dApp

![dApp deployment and hosting](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000)

### Hosting Options
1. **Traditional Web Hosting**:
   - GitHub Pages, Netlify, Vercel for frontend
   - Smart contracts already deployed on blockchain

2. **Decentralized Hosting**:
   - IPFS + ENS (Ethereum Name Service)
   - Fleek (builds and deploys to IPFS)

### Deployment Process
\`\`\`bash
# Build the React application
npm run build

# Deploy to IPFS using Fleek CLI
fleek sites:deploy
\`\`\`

## Challenges and Future Directions

### Current Challenges
- Scalability limitations
- High transaction costs on Ethereum
- Complex user experience
- Regulatory uncertainty

### Emerging Solutions
- Layer 2 scaling solutions (Optimistic Rollups, zkRollups)
- Cross-chain interoperability
- Improved developer tools and frameworks
- Mobile dApp browsers and wallets

## Best Practices for dApp Development

1. **Security First**: Always prioritize security in your smart contracts
2. **Progressive Decentralization**: Start with centralized components if needed
3. **Responsive Design**: Support mobile and desktop users
4. **Error Handling**: Provide clear feedback for transaction errors
5. **Testing**: Test across different networks and wallets
6. **Documentation**: Document your code and provide user guides

As you continue your blockchain development journey, you'll find that the skills you've learned can be applied to create innovative solutions across many industries.
`,
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-yellow-600',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-yellow-500',
    accentColor: 'bg-orange-500',
    accentHoverColor: 'hover:bg-orange-600',
  },
  
  // Template for adding new notes
  /*
  'module-lesson': {
    title: 'Note Title',
    content: `
# Main Heading

Content goes here...

## Subheading

More content...

\`\`\`solidity
// Code example
function example() public {
    // Implementation
}
\`\`\`
    `,
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-amber-500',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-amber-500'
  },
  */
};

// Helper function to get a note by module ID and lesson ID
export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return blockchainNotes[key as keyof typeof blockchainNotes];
} 