import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import Web3 from 'web3';
import ERC20Singleton from './ERC20Singleton';
import HDWalletProvider from '@truffle/hdwallet-provider'
import GreenDAO from '../contracts/deployments/hedera/GreenDAO.json';


export default function useContract() {
	const [contractInstance, setContractInstance] = useState({
		contract: null,
		signerAddress: null,
		sendTransaction: sendTransaction,
		formatTemplate:formatTemplate,
		saveReadMessage:saveReadMessage
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (window.localStorage.getItem("login-type") === "metamask") {
					const provider = new ethers.providers.Web3Provider(window.ethereum);
					const signer = provider.getSigner();
					const contract = { contract: null, signerAddress: null, sendTransaction: sendTransaction,formatTemplate:formatTemplate,saveReadMessage:saveReadMessage };

					window.provider = provider;


					let contract2 = await ERC20Singleton();
					contract.contract = contract2;
					window.contract = contract2;


					window.sendTransaction = sendTransaction;
					window.signer = signer;
					contract.signerAddress = (await signer.getAddress())?.toString()?.toLocaleLowerCase();


					setContractInstance(contract);
					console.clear();
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])


	async function sendTransaction(methodWithSignature) {
		const tx = {
			...methodWithSignature,
			value: 0,
		}
		await window.signer.sendTransaction(tx);
		return ;
	}



	return contractInstance
}




export function formatTemplate(template,changings){
	


	for (let i = 0; i < changings.length; i++) {
		const element = changings[i];
		template =template.replaceAll("{{"+element.key+"}}",element.value);		
	}
	return template;

}


export async function saveReadMessage(messageid,ideasid,msg_type) {
	

}