import './ProfileImage.css';
import { FunctionComponent, useEffect } from 'react';
import { getUser } from '../../services/userService';
import { addDefaultImg } from '../../utils/addDefaultImg';
import useUser from '../../context/UserContext';

interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
  const { user } = useUser();


 
  return (
    <>
      {user === undefined ? null : (
        <div className='profile-container'>
          <img
            src={user.image.url}
            alt={user.image.alt}
            className='profile-img'
            onError={addDefaultImg}
          />
        </div>
      )}
    </>
  );
};

export default ProfileImage;
