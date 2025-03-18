import './ProfileImage.css';
import { FunctionComponent, useEffect } from 'react';
import { getUser } from '../../services/userService';
import { addDefaultImg } from '../../utils/addDefaultImg';
import useUser from '../../context/UserContext';
import { decodeToken } from '../../services/tokenService';

interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
  const { user, setUser } = useUser();
  let token: any = sessionStorage.getItem("token");
  let decodedToken: any = token ? decodeToken(token) : null;
  
  useEffect(() => {
    getUser(decodedToken._id, token)
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => console.log(err));
  }), [];

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
