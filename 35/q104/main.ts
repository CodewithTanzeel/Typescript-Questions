const getRandomHexColor = (): string => {
  const getRandomHex = () => {
    const hex = Math.floor(Math.random() * 256).toString(16);

    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
};

console.log(getRandomHexColor());
