import s from './index.module.css';
import cn from 'classnames';


function Header({children, user, onUpdateUser}) {

  // const handleClickButtonEdit = (e)=> {
  //   e.preventDefault();
  //   onUpdateUser({name: 'Екатерина', about: 'человек'})
  // }

  return (
    <header className={cn(s.header,'cover')}>
      <div className={s.container}>
        <div className={s.userWrap}>
        {user?.email && <span>{user?.email}</span>}
        {user?.name && <span>{user?.name}</span>}
       
        {/* <button className='btn' onClick={handleClickButtonEdit}>Изменить</button> */}
        </div>
        <div className={s.wrapper}>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header;
