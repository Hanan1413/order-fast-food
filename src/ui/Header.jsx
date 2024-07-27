import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza Compay</Link>
      <SearchOrder />

      <p>All right reserved</p>
    </header>
  )
}

export default Header
