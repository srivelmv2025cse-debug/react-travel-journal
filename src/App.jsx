import './App.css'

const trips = [
  { place: 'Kyoto, Japan', dates: 'APRIL 12 — 18, 2025', note: 'Slow mornings, tiny tea houses, and a city that rewards getting lost.', image: 'kyoto', icon: '⛩', number: '01' },
  { place: 'Lisbon, Portugal', dates: 'JUNE 03 — 09, 2024', note: 'Sun-warmed tiles, long lunches, and the best hilltop sunsets.', image: 'lisbon', icon: '🚋', number: '02' },
  { place: 'Big Sur, California', dates: 'SEPTEMBER 21 — 24, 2023', note: 'A quiet cabin, coastal trails, and nowhere else we needed to be.', image: 'bigsur', icon: '🌊', number: '03' },
]

function JournalHeader() {
  return <header className="journal-header"><a href="#top" className="journal-logo">elsewhere<span>.</span></a><nav aria-label="Main navigation"><a href="#journeys">Journeys</a><a href="#about">The journal</a><a className="journal-about-link" href="#about">About me</a></nav></header>
}

function TripCard({ trip }) {
  return <article className="trip-card"><div className={`trip-image ${trip.image}`} aria-label={`Illustration of ${trip.place}`}><span className="trip-icon">{trip.icon}</span><span className="trip-number">{trip.number}</span></div><div className="trip-details"><p className="trip-date">{trip.dates}</p><h3>{trip.place}</h3><p className="trip-note">{trip.note}</p><a href="#about" className="trip-link">Read the story <span aria-hidden="true">↗</span></a></div></article>
}

function App() {
  return <main className="journal" id="top"><JournalHeader /><section className="journal-hero"><div className="hero-copy"><p className="journal-kicker">NOTES FROM THE ROAD</p><h1>Collecting places,<br />not <em>things.</em></h1><p className="journal-intro">A little journal of faraway corners, unexpected detours, and the feeling of being somewhere new.</p><a className="journeys-button" href="#journeys">Wander through <span aria-hidden="true">↓</span></a></div><div className="hero-landscape" role="img" aria-label="Illustrated mountain sunset"><div className="sun" /><div className="mountain mountain-back" /><div className="mountain mountain-front" /><span className="landscape-caption">somewhere, slowly</span></div></section><section className="journeys-section" id="journeys"><div className="journeys-title"><div><p className="journal-kicker">POSTCARDS &amp; PASSAGES</p><h2>Recent journeys</h2></div><span className="journey-count">03 / AROUND THE WORLD</span></div><div className="trip-grid">{trips.map((trip) => <TripCard key={trip.number} trip={trip} />)}</div></section><footer id="about" className="journal-footer"><a href="#top" className="journal-logo">elsewhere<span>.</span></a><span>Stay curious. Take the long way.</span><a href="mailto:hello@example.com">Say hello ↗</a></footer></main>
}

export default App
