export const getMod = (blockOrElemName: string, modName: string, value?: string | boolean): Record<string, boolean> => {
  if (value === true) {
    return {
      [`${blockOrElemName}_${modName}`]: true,
    };
  }

  return {
    [`${blockOrElemName}_${modName}_${value}`]: true,
  };
};