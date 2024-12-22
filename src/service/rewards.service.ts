import { Injectable } from '@nestjs/common';
import akira from 'src/tokens/akira';
import awebo from 'src/tokens/awebo';
import coffee from 'src/tokens/coffee';
import cream from 'src/tokens/cream';
import floki from 'src/tokens/floki';
import mrsMiggles from 'src/tokens/mrsMiggles';
// import probe from 'src/tokens/probe';
import saca from 'src/tokens/saca';
import coffeeNFT from 'src/tokens/coffeeNft';

export interface Reward {
  name: string;
  contract: string;
  decimals: number;
  rewards: {
    [x: number]: number | any;
  };
  nftRewards?: {
    [x: number]: string;
  };
}

@Injectable()
export class RewardService {
  private items = new Map<string, Reward>();
  constructor() {
    this.bootstrap();
  }

  pickARewardRandomly(): [Reward, any] {
    const keys = Array.from(this.items.keys());
    const randomIndex = Math.floor(Math.random() * keys.length);
    const reward = this.items.get(keys[randomIndex]);
    const randomTier =
      Math.floor(Math.random() * (reward.name === 'coffeeNft' ? 3 : 3)) + 1;
    return [reward, reward.rewards[randomTier]];
  }

  getReward(name: string): Reward {
    return this.items.get(name);
  }

  bootstrap() {
    this.items.set(akira.name, akira);
    this.items.set(awebo.name, awebo);
    this.items.set(coffee.name, coffee);
    this.items.set(cream.name, cream);
    this.items.set(floki.name, floki);
    this.items.set(mrsMiggles.name, mrsMiggles);
    // this.items.set(probe.name, probe);
    this.items.set(saca.name, saca);
    this.items.set(coffeeNFT.name, coffeeNFT);
  }
}
