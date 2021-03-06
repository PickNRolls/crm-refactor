export const compose = (...functions: Function[]): Function => {
  if (functions.length === 0) {
    return () => {};
  }

  if (functions.length === 1) {
    return functions[0];
  }

  return functions.reduce((a, b) => (...args: any) => a(b(...args)));
};
