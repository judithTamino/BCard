import './ProfileImage.css';
import { FunctionComponent, useEffect } from 'react';
import { getUser } from '../../services/userService';
import { addDefaultImg } from '../../utils/addDefaultImg';
import useUser from '../../context/UserContext';
import { decodeToken } from '../../services/tokenService';

interface ProfileImageProps {
  decodedToken: any;
}

const ProfileImage: FunctionComponent<ProfileImageProps> = ({
  decodedToken,
}) => {
  const { user, setUser } = useUser();

  useEffect(() => {
    if (decodedToken !== null) {
      getUser(decodedToken._id)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

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
