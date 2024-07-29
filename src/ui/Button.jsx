import {Link} from 'react-router-dom';

function Button({ children, disabled, to  }) {
  const className = "mt-3 bg-yellow-500 p-2 uppercase  tracking-wide rounded-full ml-3 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

  if(to)
    return <Link to={to} className={className}>
     {children}
    </Link>
  return (
    <button 
      disabled={disabled}
      className={className}>
      {children}
    </button>
  );
}

export default Button;