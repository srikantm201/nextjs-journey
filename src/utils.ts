export function capitalize(text: string): string {
  if (text.length === 0) return text;
  return text[0]!.toUpperCase() + text.slice(1);
}

export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new Error("min must be <= max");
  return Math.min(Math.max(value, min), max);
}

export function average(nums: number[]): number | undefined {
  if (nums.length === 0) return undefined;
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}