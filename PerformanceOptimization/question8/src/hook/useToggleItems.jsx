import { useState } from 'react';

function useToggleItems(initialValue, initialPosition = 0) {
  const [index, setIndex] = useState(initialPosition);

  const toggleItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  return [initialValue[index], toggleItem];
}

export default useToggleItems;
