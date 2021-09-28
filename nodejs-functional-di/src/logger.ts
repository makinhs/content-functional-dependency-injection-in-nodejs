const logger = () => {
  const info = (context, message) => console.log(`${context}: ${message}`);

  return {
    info,
  };
};

export default logger;
