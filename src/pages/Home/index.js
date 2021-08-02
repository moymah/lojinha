import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HomeContainer } from '../../containers'
import { getHero, getProducts } from '../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getHero())
  }, [])

  return (
    <>
      <HomeContainer />
    </>
  )
}

export default Home
