import { customAlphabet } from 'nanoid';

const alphabet = '01234567890abcdefghijklmnopqrstuvwxyz';

export class NanoId {
  static GenerateId(length = 10) {
    return customAlphabet(alphabet, length)();
  }
}
