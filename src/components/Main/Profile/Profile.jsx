function Profile() {
  return(
    <section className="profile" id="about-me">
      <div className="profile__info">
        <h2 className="profile__info_title">Привет!</h2>
        <p className="profile__info_text">Меня зовут Юлия, я фотограф и рада видеть Вас на своём сайте!</p>
        <p className="profile__info_text">В основном я работаю с людьми без профессионального опыта перед камерой,
          поэтому мои фотографии в первую очередь про индивидуальность
          каждого героя кадра.</p>
        <p className="profile__info_text">Так же я занимаюсь предметной съемкой и всегда открыта к новым
          интересным проектам!</p>
      </div>
      <div className="profile__img"></div>
    </section>
  )
}

export default Profile;
