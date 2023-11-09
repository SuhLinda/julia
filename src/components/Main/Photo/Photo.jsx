import photoWedding9 from '../../../images/photo/__wedding/photo__wedding9.jpg';
import photoWedding20 from '../../../images/photo/__wedding/photo__wedding20.jpg';
import photoWedding25 from '../../../images/photo/__wedding/photo__wedding25.jpg';
import photoStreet4 from '../../../images/photo/__street/photo__street4.jpg';
import photoStreet12 from '../../../images/photo/__street/photo__street12.jpg';
import photoStreet17 from '../../../images/photo/__street/photo__street17.jpg';
import photoStudioShooting4 from '../../../images/photo/__studio-shooting/photo__studio-shooting4.jpg';
import photoStudioShooting9 from '../../../images/photo/__studio-shooting/photo__studio-shooting9.jpg';
import photoStudioShooting16 from '../../../images/photo/__studio-shooting/photo__studio-shooting16.jpg';
import photoSubjectShooting5 from '../../../images/photo/__subject-shooting/photo__subject-shooting5.jpg';
import photoSubjectShooting16 from '../../../images/photo/__subject-shooting/photo__subject-shooting16.jpg';
import photoSubjectShooting25 from '../../../images/photo/__subject-shooting/photo__subject-shooting25.jpg';
import photoShowroom2 from '../../../images/photo/__showroom/photo__showroom2.jpg';
import photoShowroom5 from '../../../images/photo/__showroom/photo__showroom5.jpg';
import photoShowroom16 from '../../../images/photo/__showroom/photo__showroom16.jpg';

function Photo() {
  return(
    <section className="photo">
      <h2 className="photo__text">~~~WEDDING~~~</h2>
      <div className="photo__element">
        <img
          className="photo__element_img"
          src={photoWedding9}
          alt="wedding"
        />
        <img
          className="photo__element_img"
          src={photoWedding20}
          alt="wedding"
        />
        <img
          className="photo__element_img"
          src={photoWedding25}
          alt="wedding"
        />
      </div>
      <h2 className="photo__text">~~~STREET~~~</h2>
      <div className="photo__element">
        <img
          className="photo__element_img"
          src={photoStreet4}
          alt="street"
        />
        <img
          className="photo__element_img"
          src={photoStreet12}
          alt="street"
        />
        <img
          className="photo__element_img"
          src={photoStreet17}
          alt="street"
        />
      </div>
      <h2 className="photo__text">~~~STUDIO SHOOTING~~~</h2>
      <div className="photo__element">
        <img
          className="photo__element_img"
          src={photoStudioShooting4}
          alt="studio shooting"
        />
        <img
          className="photo__element_img"
          src={photoStudioShooting9}
          alt="studio shooting"
        />
        <img
          className="photo__element_img"
          src={photoStudioShooting16}
          alt="studio shooting"
        />
      </div>
      <h2 className="photo__text">~~~SUBJECT SHOOTING~~~</h2>
      <div className="photo__element">
        <img
          className="photo__element_img"
          src={photoSubjectShooting5}
          alt="subject shooting"
        />
        <img
          className="photo__element_img"
          src={photoSubjectShooting16}
          alt="subject shooting"
        />
        <img
          className="photo__element_img"
          src={photoSubjectShooting25}
          alt="subject shooting"
        />
      </div>
      <h2 className="photo__text">~~~SHOWROOM~~~</h2>
      <div className="photo__element">
        <img
          className="photo__element_img"
          src={photoShowroom2}
          alt="showroom"
        />
        <img
          className="photo__element_img"
          src={photoShowroom5}
          alt="showroom"
        />
        <img
          className="photo__element_img"
          src={photoShowroom16}
          alt="showroom"
        />
      </div>
    </section>
  )
}

export default Photo;
