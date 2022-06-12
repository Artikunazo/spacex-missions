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
            <small>Flight # {flightNumbe} </small>
          </h3>
        </div>
      </div>
    </>
  )
}