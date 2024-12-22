import { BadRequestException, Injectable } from '@nestjs/common';
import { Web3Service } from './web3.service';
import { ethers } from 'ethers';
import { Reward } from './rewards.service';

@Injectable()
export class WalletService {
  private wallets: ethers.Wallet;
  constructor(private readonly web3Service: Web3Service) {
    this.wallets = this.web3Service.getWalletWithProvider(
      process.env.PRIVATE_KEY!,
    );
  }

  async transformTokenToAddress(reward: Reward, to: string, amount: string) {
    try {
      const contract = this.web3Service.getContract(
        reward.contract,
        this.wallets,
      );
      const formattedAmount = ethers.parseUnits(amount, reward.decimals);
      const txResponse = await contract.transfer(to, formattedAmount);
      return txResponse;
    } catch (error) {
      throw new BadRequestException('Invalid token');
    }
  }

  async isHolderOfToken(
    contractAddress: string,
    tokenId: string,
  ): Promise<boolean> {
    try {
      const nftContract = this.web3Service.getContract(
        contractAddress,
        this.wallets,
      );
      const owner = await nftContract.ownerOf(tokenId);
      return owner.toLowerCase() === this.wallets.address.toLowerCase();
    } catch (error) {
      console.error('Error checking token ownership:', error);
      throw new BadRequestException('Failed to check token ownership');
    }
  }

  async transferNFT(contractAddress: string, tokenId: string, to: string) {
    try {
      // Check if the wallet is the holder of the token
      const isHolder = await this.isHolderOfToken(contractAddress, tokenId);
      if (!isHolder) {
        return null;
      }
      // Get the NFT contract instance
      const nftContract = this.web3Service.getContract(
        contractAddress,
        this.wallets,
      );

      // Call the transferFrom method (ERC-721 standard)
      const txResponse = await nftContract.transferFrom(
        this.wallets.address, // The current owner (sender)
        to, // The recipient address
        tokenId, // The ID of the NFT being transferred
      );

      return txResponse;
    } catch (error) {
      console.error('Error transferring NFT:', error);
      throw new BadRequestException('Failed to transfer NFT');
    }
  }
}
