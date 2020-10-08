export default () => {
  const now = new Date().toISOString().substring(0, 10);
  return now;
};
