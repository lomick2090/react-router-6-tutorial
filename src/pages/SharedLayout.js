import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <section className='section'>

        <Outlet />
      </section>
    </div>
  );
};
export default SharedLayout;