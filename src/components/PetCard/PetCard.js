import './PetCard.css';
import { Link } from 'react-router-dom';
import { checkIcon, checkLinkImage } from '../../utils';
import deleteIcon from '../../images/delete.png';
import spirals from '../../images/spirals.png';
import PropTypes from 'prop-types'

const PetCard = ({ id, name, owner, type, deletePet }) => {

  return (
    <div className="pet-card">
      <div className='spiral-container'>
        <img className='spirals' src={spirals} alt='spiral styling'/>
      </div>
      <div className='info-container'>
        <div className='info'>
        {checkIcon(type)}
          <h2>{name}</h2>
          <h3>{type}</h3>
          <p className='owner'>Owner: {owner}</p>
        <Link className='details' to={`/${id}`}>{checkLinkImage(type)}</Link>
        </div>
        <div className='icon-container'>
          <img className='delete-icon' src={deleteIcon} alt='delete icon' onClick={() => deletePet(id)}/>
        </div>
      </div>
    </div>
  )
}

export default PetCard;

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}