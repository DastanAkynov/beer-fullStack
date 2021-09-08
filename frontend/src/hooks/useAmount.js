import {useState, useEffect} from 'react';

export const useAmount = () => {
  const [amount, setAmount] = useState(0)

  const getAmount = () => {
    setAmount(localStorage.length - 1)
  }

  useEffect(() => {
    getAmount()
  }, [])

  return {amount, getAmount}
}