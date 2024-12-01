import { Injectable } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Injectable()
export class AdventCollectionService {
  private readonly factoryContract: string = process.env.FACTORY_CONTRACT!;
  private readonly collectionContract: string;
  constructor(private readonly web3Service: Web3Service) {}

  async getCollectionContract(day: number) {
    const contract = this.web3Service.getFactoryContract(this.factoryContract);
    const collection = await contract.collections(day);
    return collection as string;
  }

  async checkNftRedeemed(day: number, tokenId: string) {
    const contract = this.web3Service.getFactoryContract(this.factoryContract);
    const collection = await contract.collections(day);
    const collectionContract =
      this.web3Service.getCollectionContract(collection);
    const redeemed = await collectionContract.checkNftRedeemed(tokenId);
    return redeemed;
  }

  async verifyCollection(day: number, tokenId: string, address: string) {
    const contract = this.web3Service.getFactoryContract(this.factoryContract);
    const collection = await contract.collections(day);
    const collectionContract =
      this.web3Service.getCollectionContract(collection);
    const ownerId = Number(await collectionContract.owner(address));

    if (+tokenId !== ownerId) return false;
    return true;
  }
}
