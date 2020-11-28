export const getMod = (blockOrElemName: string, modName: string, value?: string): Record<string, boolean> => {
  if (value == null) {
    return {};
  }

  return {
    [`${blockOrElemName}_${modName}_${value}`]: true,
  };
};