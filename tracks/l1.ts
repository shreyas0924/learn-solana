import { Keypair } from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import 'dotenv/config';
//Create a random keypair
const keypair = Keypair.generate();
console.log(typeof keypair);
const key = process.env.SECRET_KEY;
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);

const keypairFromEnv = getKeypairFromEnvironment(key!);
console.log(keypairFromEnv.publicKey);
