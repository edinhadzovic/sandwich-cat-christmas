import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import AdventCollection from 'src/abi/AdventCollection';
import AdventFactory from 'src/abi/AdventFactory';
import IERC20 from 'src/abi/IERC20';

@Injectable()
export class Web3Service {
  private provider: ethers.JsonRpcApiProvider;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.API_TOKEN);
    // this.contract = new ethers.Contract(this.sacaToken, sacaAbi, this.provider);
    // this.sacaNft = new ethers.Contract(
    //   this.sacaNftContract,
    //   saca_factory_advent,
    //   this.provider,
    // );
  }

  getCollectionContract(contract: string) {
    return new ethers.Contract(contract, AdventCollection, this.provider);
  }

  getFactoryContract(contract: string) {
    return new ethers.Contract(contract, AdventFactory, this.provider);
  }

  getContract(contract: string, runner: ethers.ContractRunner) {
    return new ethers.Contract(contract, IERC20, runner);
  }

  getWalletWithProvider(privateKey: string) {
    return new ethers.Wallet(privateKey, this.provider);
  }
}
