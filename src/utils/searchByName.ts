const hasNameField = (item: unknown): item is { name: string } => (
  typeof item === 'object'
  && item !== null
  && 'name' in item
);

export const searchByName = (item: unknown, value: string) => {
  if (!hasNameField(item)) {
    return false;
  }

  return item.name.toLowerCase().includes(value.toLowerCase());
}
