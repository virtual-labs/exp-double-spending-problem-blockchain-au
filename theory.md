<u><h3>Theory</h3></u>
<b><p><center>Double Spending </center></p></b>

 <p>Double spending is a fraudulent act where an individual attempts to spend the same digital currency or asset multiple times by taking advantage of delays or weaknesses in transaction validation. It poses a significant risk in both centralized databases and blockchain systems. Preventing double spending in centralized systems involves transaction verification, concurrency control, logging, auditing, atomicity, and unique transaction identifiers, relying on trust in a central authority. In contrast, blockchain systems secure against it through decentralized consensus mechanisms, such as proof-of-work or proof-of-stake.</p><br>
 <p>

<b><p><center>Double Spending in centralized database</center></p></b>

<p>Double spending in a centralized database system occurs when a user attempts to spend the same funds multiple times by exploiting delays or flaws in transaction validation. For example, in a banking system, this could happen if someone withdraws the same funds from two ATMs before the balance updates, or in the case of demand drafts, if a single draft is presented to multiple entities for payment. Centralized systems prevent this through real-time balance checks, unique transaction identifiers, and logging by a trusted authority.</p>
 <!-- <center><div><img src="images/centrailized.jpg"  alt="centralized"></div></center> -->

<b><p><center>Double Spending in Blockchain </center></p></b>

<p>In a blockchain, transactions are grouped into blocks, which are linked in a chronological chain through cryptographic hashes. When a user initiates a cryptocurrency transaction, the network verifies its validity through a consensus mechanism. However, a malicious actor might attempt double spending by simultaneously broadcasting conflicting transactions—e.g., sending the same cryptocurrency to two different recipients. If the network fails to quickly reach consensus (e.g., due to slow confirmation times or an attacker’s influence, such as in a 51% attack), this can increase the risk of double spending. Blockchain mitigates this through decentralized validation and consensus protocols like proof-of-work or proof-of-stake.</p>
 <!-- <center><div><img src="images/blockchain.png"  alt="blockchain"></div></center> -->
