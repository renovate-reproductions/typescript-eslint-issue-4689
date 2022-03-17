export function getFutureVersion(baseVersion?: string): number[] {
  const toRelease: number[] = [];
  const baseRelease: number[] = [];
  return baseRelease.map((_, index) => {
    const toPart = toRelease[index] ?? 0;
    if (index < 1) {
      return toPart;
    }
    if (index === 1) {
      return toPart + (baseVersion === undefined ? 0 : 1);
    }
    return 0;
  });
}

const PREFIX_DOT = 'PREFIX_DOT';

const TYPE_NUMBER = 'TYPE_NUMBER';
const TYPE_QUALIFIER = 'TYPE_QUALIFIER';

export interface BaseToken {
  prefix: string;
  type: typeof TYPE_NUMBER | typeof TYPE_QUALIFIER;
  val: number | string;
  isTransition?: boolean;
}

export interface NumberToken extends BaseToken {
  type: typeof TYPE_NUMBER;
  val: number;
}

export interface QualifierToken extends BaseToken {
  type: typeof TYPE_QUALIFIER;
  val: string;
}

export type Token = NumberToken | QualifierToken;

export function tokensToStr(tokens: Token[]): string {
  return tokens.reduce((result, token, idx) => {
    const prefix = token.prefix === PREFIX_DOT ? '.' : '-';
    return `${result}${idx !== 0 && token.val !== '' ? prefix : ''}${
      token.val
    }`;
  }, '');
}
