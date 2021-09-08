import axios from "axios"


  const URL = 'http://localhost:5000'

  let token = null
  const userData = JSON.parse(localStorage.getItem('userData'))
  if (userData) {
    token = userData.token
  }

  let headers = {}

  if(userData && userData.token) {
    headers.Authorization = `Bearer ${token}`
  }

  const AxiosInstance = axios.create({
    baseURL: URL
  });

  AxiosInstance.interceptors.request.use((config) => {
    config.headers = headers
    return config;
  })

export default AxiosInstance





имя: Дастан
возраст: 25
телефон: 0553680761
опыт использования: 
  1) Frontend: HTML, CSS, JS, React
  2) Backend: NodeJS, expreess, mongoose
образование: непрофильное, не окончивал никаких курсов,
  обучался по видеурокам и интернет ресурсам 
проекты: Есть небольшой проект, аналог интернет магазина,
  на React и NodeJS, могу показать только вживую,
  т.к скоро запускаю в продашкн
Есть большое желание обучаться и работать в данной сфере,
более углубленно изучить NodeJS, NestJS

  

  