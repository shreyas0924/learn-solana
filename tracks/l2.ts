import {
  LAMPORTS_PER_SOL,
  Connection,
  PublicKey,
  clusterApiUrl,
} from '@solana/web3.js';

//Accept address from "devnet" | "testnet" | "mainnet" according to specified cluster
const fn1 = async () => {
  const connection = new Connection(clusterApiUrl('devnet'));
  console.log('Connected');

  const address = new PublicKey('8Q8FgzNxvGd9PfYJgGwHcRLnAaUbqq3riHUAQEXbFZnv');
  console.log(`Address : ${address}`);
  const balance = await connection.getBalance(address);
  console.log(`Balance : ${balance}`);
  const balanceInSol = balance / LAMPORTS_PER_SOL;
  console.log(`Balance in SOL : ${balanceInSol}`);
};

// Provide a RPC url and second argument is the commitment (check types)
const fn2 = async () => {
  const suppliedPublicKey = process.argv[2];
  if (!suppliedPublicKey) {
    throw new Error('Provide a public key to check the balance of!');
  }

  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed'
  );

  const publicKey = new PublicKey(suppliedPublicKey);

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
};

const fn3 = async () => {
  const connection = new Connection(clusterApiUrl('mainnet-beta'));
  const balance = await connection.getBalance(
    new PublicKey(`shaq.sol`),
    'confirmed'
  );
  console.log(balance / LAMPORTS_PER_SOL);
};

fn1();
