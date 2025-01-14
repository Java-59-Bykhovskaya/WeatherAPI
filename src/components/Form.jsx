import { BASE_URL, API_KEY } from '../utils/constants';

const Form = () => {
  const handleClickGetWeather = (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleClickGetWeather}>
      <input type={'text'} name={'city'} />
      <button type={'submit'}>Get weather</button>
    </form>
  );
};

export default Form;
