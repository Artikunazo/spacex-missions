import './card.css';

export default function Card ({
  flightNumber,
  missionName,
  missionDate,
  ...props
}) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>
            {missionName} ({missionDate})
          </h3>
        </div>
      </div>
    </>
  )
}