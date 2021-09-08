import {useState, useEffect} from 'react';

export const useBasketCounter = () => {
  const [basketProducts, setBasketProducts] = useState(0);

  const refreshBasketCounter = () => {
    const data = {}
    Object.keys(localStorage).map(key => {                                   //записывает данные при первом рэндоре
      if (key.includes('userData')) {                                              //если в localStorage есть userData(token, id), то мы исключаем
        return null
      }
      data[key] = (JSON.parse(localStorage[key]))
    })

    setBasketProducts(data)
  }

  useEffect(() => {
    refreshBasketCounter()
  }, [])

  return {basketProducts, refreshBasketCounter, setBasketProducts}
}
