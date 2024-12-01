import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PinataSDK } from 'pinata-web3';

let storeImages = [];

@Injectable()
export class PinataService {
  private client: PinataSDK;

  constructor() {
    this.client = new PinataSDK({
      pinataJwt: process.env.PINATA_JWT!,
      pinataGateway: process.env.PINATA_GATEWAY!,
    });
  }
  async fetchFiles(take: number) {
    if (storeImages.length > 0 && storeImages.length === take)
      return storeImages;
    const files = (await this.client.listFiles().pageLimit(100)).reverse();
    storeImages = files.slice(0, take);
    return storeImages;
  }
}
