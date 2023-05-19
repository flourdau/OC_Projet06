import './Host.css';

export default function Host({ name, picture }) {

  return (
    <div className="host">
       <h3>
            <span>{ name.split(' ')[0] }</span>
            <span>{ name.split(' ')[1] }</span>
        </h3>
        <img src={ picture } alt={`Avatar: ${ name }`}/>
    </div>
)}