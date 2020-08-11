let id = parseInt(localStorage.getItem('idMax') || '0');

const createId = (): number => {
  localStorage.setItem('idMax', (id += 1).toString());
  return id += 1;
};

export {
  createId
};