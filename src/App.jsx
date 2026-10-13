import './App.css'
import InternCard from './InternCard'; 

function App() {
  // YOUR UNIQUE DATA HERE
  const interns = [
    { id: 1, name: "Rahul", role: "Frontend Developer", team: "Engineering", location: "Mumbai" },
    { id: 2, name: "Priya", role: "UI/UX Designer", team: "Design", location: "Bangalore" },
    { id: 3, name: "Amit", role: "Backend Developer", team: "Engineering", location: "Delhi" }
  ];

  return (
    <main className="page">
      <h1>Our Startup Team</h1>
      <p className="intro">The brilliant minds behind our product</p>
      
      <section className="card-grid">
        {interns.map((intern) => (
          <InternCard 
            key={intern.id} 
            name={intern.name} 
            role={intern.role} 
            team={intern.team} 
            location={intern.location}
          />
        ))}
      </section>
    </main>
  )
}

export default App