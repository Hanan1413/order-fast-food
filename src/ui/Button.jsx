import {Link} from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const className = "mt-3 bg-yellow-500 p-2 uppercase  tracking-wide rounded-full ml-3 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
  const  base = "mt-3 bg-yellow-500 p-2 uppercase  tracking-wide rounded-full ml-3 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
  
  const styles = {
   primary: base + " px-4  py-3 md:px-6 md:py-4",
   small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
   secondary:"inline-block rounded-full boder-2-stone-300 mt-3 bg-yellow-500 p-2 uppercase  tracking-wide rounded-full ml-3 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  px-4  py-3 md:px-6 md:py-4",
  }   

  if(to)
    return <Link to={to} className={className} style={styles[type]}>
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
