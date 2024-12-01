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
}
