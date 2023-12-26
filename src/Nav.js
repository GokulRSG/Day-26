import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <div className='top-section'>
        <nav>
          <ul className='ul-items'>
            <li className='list-items'><NavLink className='link-item' to="/">ALL</NavLink></li>
            <li className='list-items'><NavLink className='link-item' to="/fullstack">FULL STACK DEVELOPMENT</NavLink></li>
            <li className='list-items'><NavLink className='link-item' to="/datascience">DATA SCIENCE</NavLink></li>
            <li className='list-items'><NavLink className='link-item' to="/cypersec">CYBER SECURITY</NavLink></li>
            <li className='list-items'><NavLink className='link-item' to="/career">CAREER</NavLink></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
