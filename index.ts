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
