const Form = ({ setCity }) => {
  const handleClickGetWeather = (e) => {
    e.preventDefault()
    const city = e.target.city.value.trim()
    setCity(city)
    e.target.city.value = ''
  }
  return (
    <form onSubmit={handleClickGetWeather}>
      <input type={'text'} name={'city'}/>
      <button type={'submit'}>Get weather</button>
    </form>
  )
}

export default Form
