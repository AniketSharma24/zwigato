import serverError from '../../assets/images/serverError.svg';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const ServerError = ({ message }) => {
  return (
    <div className='server-error-container'>
      <img className='server-error-img' src={serverError} />
      <p>
        <ExclamationTriangleIcon className='hero-icon text-blue-500' />
        {message}
      </p>
    </div>
  );
};

export default ServerError;
