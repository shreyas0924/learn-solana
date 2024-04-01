//Transactions
import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  Keypair,
  PublicKey,
} from "@solana/web3.js";
import "dotenv/config";

async function f1() {
  let fromPubKey: string = process.argv[2];

  if (!fromPubKey) {
    console.log(`Wrong public key`);
  }

  const keypair = Keypair.generate();
  const toPubkey = keypair.publicKey;

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed",
  );

  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
  );

  const transaction = new Transaction();

  const LAMPORTS_TO_SEND = 5000;

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: new PublicKey(fromPubKey),
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });

  transaction.add(sendSolInstruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    keypair,
  ]);

  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
  );
  console.log(`Transaction signature is ${signature}!`);
}

f1();
