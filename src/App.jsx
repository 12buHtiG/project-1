// REMINDER - Take it LIVE! Publish it on the INTERWEBZ :)
import './App.css';

const Card = ({ title }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
		</div>
	);
};

const App = () => {
	return (
		<div className="card-container">
			<Card title="Harry Fabricator" rating={8} isCool={true} />
			<Card title="Unhappy Potter" rating={9} />
			<Card title="Simple Jack" rating={4} />
			<Card title="Mission Possible" rating={4} />
			<Card title="Super Easy Mission" rating={4} />
		</div>
	);
};

export default App;
