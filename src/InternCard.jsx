import './App.css';

function InternCard({ name, role, team, location }) {
  return (
    <article className="intern-card">
      <div className="avatar">{name[0]}</div>
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <span className="team">{team} Team</span>
      <p className="location">📍 {location}</p>
    </article>
  );
}

export default InternCard;
