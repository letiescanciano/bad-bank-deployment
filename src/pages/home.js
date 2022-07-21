import { Card } from '../components/card'
import bankImg from './bank.png'

const Home = () => {
  return (
    <Card
      txtcolor='white'
      bgcolor='primary'
      header='Bad Bank Landing Module'
      title='Welcome to the bank'
      text='You can move around using the navigation bar.'
      body={<img src={bankImg} className='img-fluid' alt='' />}
    />
  )
}

export default Home
