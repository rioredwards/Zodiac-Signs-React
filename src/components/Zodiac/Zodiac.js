import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <img src={`zodiac_images/${props.name}.png`} />
      <h3>{props.name}</h3>
      <p className="symbol">{props.symbol}</p>
      <p className="dates">{props.dates}</p>
    </div>
  );
}
