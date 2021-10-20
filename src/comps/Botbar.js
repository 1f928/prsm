import IconLinks from './IconLinks';
import Info from './Info';

// import './Botbar.css';

export default function Botbar (props) {

  return (
    <div className="botbar">
      <IconLinks />
      <div className="info-container">
        <Info />
      </div>
    </div>
  );
};
