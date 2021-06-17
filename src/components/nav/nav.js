import { Link, useLocation } from "react-router-dom";
import { Button, Nav as GDMNav } from '@capterra/arubaito';
import { NAV_ROUTES } from './nav.config';
import gartner_logo_white from '../../assets/svg/gartner_logo_white.svg';
import style from './nav.module.scss'


export default function Nav() {
  let loggedIn = false; // MAKE DYNAMIC
  let { pathname } = useLocation();

  // const returnAccount = () => {
  //   if (loggedIn) {
  //     return (
  //       <div>Account Name</div>
  //     )
  //   } else {
  //     return (
  //       <Button variant='primary'>
  //         Sign in
  //       </Button>
  //     )
  //   }
  // };

  return (
    <header className={style.navWrapper}>
      <nav className={style.navInnerWrapper}>
        <div className={style['logo-wrapper']}>
          <Link to='/'>
            <img src={gartner_logo_white} className={style['app-logo']} alt="Gartner Logo" />
          </Link>
        </div>
        <div className={style['account-wrapper']}>
          {/* {returnAccount()} */}
        </div>
        <GDMNav className='gdm-m-bottom-sm gdm-m-top-xl'>
          {
            NAV_ROUTES.map(({ match, path, name, subNav }) => (
              <GDMNav.Item className='gdm-color-light' active={match(pathname)} key={path}>
                <Link to={path}>
                  {name}
                </Link>
                {subNav &&
                    <GDMNav.Dropdown>
                      {subNav.map(({ path, name }) => (
                        <GDMNav.SubItem key={path}>
                          <Link to={path}>{name}</Link>
                        </GDMNav.SubItem>
                      ))}
                    </GDMNav.Dropdown>
                  }
              </GDMNav.Item>
            ))
          }
        </GDMNav>
      </nav>
    </header>
  )
};