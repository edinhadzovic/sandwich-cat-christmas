import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryService {
  private dataStore: Map<string, boolean>;

  constructor() {
    this.dataStore = new Map();
  }

  // Set data
  set(key: string, value: boolean): void {
    this.dataStore.set(key, value);
  }

  // Get data
  get<T>(key: string): boolean {
    return this.dataStore.get(key);
  }

  // Check if key exists
  has(key: string): boolean {
    return this.dataStore.has(key);
  }

  // Delete data
  delete(key: string): boolean {
    return this.dataStore.delete(key);
  }

  // Get all keys
  keys(): string[] {
    return Array.from(this.dataStore.keys());
  }

  // Clear all data
  clear(): void {
    this.dataStore.clear();
  }

  // create key
  createKey(
    address: string,
    day: number,
    tokenId: string,
    collectionContract: string,
  ) {
    return `${address}-${day}-${tokenId}-${collectionContract}`;
  }
}
