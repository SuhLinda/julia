import {
  profileText,
  profileText1,
  profileText2,
  profileText3,
  profileText4,
} from '../../../utils/constants.jsx';

function Profile() {
  return(
    <section className="profile">
      <div className="profile__info">
        <h2 className="profile__info_title">
          {profileText}
        </h2>
        <p className="profile__info_text">
          {profileText1}
        </p>
        <p className="profile__info_text">
          {profileText2}
        </p>
        <p className="profile__info_text">
          {profileText3}
        </p>
        <p className="profile__info_text">
          {profileText4}
        </p>
      </div>
    </section>
  )
}

export default Profile;
