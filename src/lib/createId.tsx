let id = 0;

const createId = (): number => {
  return id += 1;
};

export {
  createId
};