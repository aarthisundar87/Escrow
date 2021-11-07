require('dotenv').config() ;

const Web3 = require('web3');

const infuraKey = process.env.INFURA_KEY;

const web3 = new Web3(new Web3.providers.HttpProvider( `http://127.0.0.1:7545`));

const Escrow = new web3.eth.Contract([
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "payee",
        "type": "address"
      "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address payable",
        "name": "payee",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
], '0x4c60e0615Dd1e5f6aEf1a771c6749feD7d0ec3A0');

helloWorld.methods.output().call({from: '0x71347Ac1DEd6E357DFcd7124334Ed36419DF82fd'}, function(error, result) {
    console.log(result);
});

