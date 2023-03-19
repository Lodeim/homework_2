import s from './index.module.css';
import cn from 'classnames';
import {ReactComponent as FavoriteIcon} from './img/favorites.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CardContext } from '../../context/cardContext';
import { UserActionModal } from '../UserActionModal';


function Header({children, onUpdateUser}) {
  const { favorites } = useContext(CardContext);

 

  const [isUserActionModalVisible, setIsUserActionModalVisible] = useState(false);
  const onCloseUserActionModal = (e) => {
    e.stopPropagation()
    setIsUserActionModalVisible(false);

  };
  const onOpenUserActionModal = () => {
    setIsUserActionModalVisible(true);
   
  };
  return (
    <header className={cn(s.header,'cover')}>
      <div className="container">
        <div className={s.header__wrapper}>
          {children}
          <div className={s.iconsMenu}>
            <Link className={s.favoritesLink} to={{pathname:"/favorites", state: 'sfsdfsdf'}}>
              <FavoriteIcon/>
              {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
            </Link>

            <button onClick={onOpenUserActionModal}>Open User</button>
            <UserActionModal         
              isOpen={isUserActionModalVisible}
              onClose={onCloseUserActionModal}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
