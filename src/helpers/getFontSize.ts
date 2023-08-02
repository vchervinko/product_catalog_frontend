export interface FontSize {
  fontSize: string;
}

export function getFontSize(count: number): FontSize {
  if (count > 99) {
    return { fontSize: '0.65rem' };
  }

  if (count > 9) {
    return { fontSize: '0.75rem' };
  }

  return { fontSize: '0.85rem' };
}
