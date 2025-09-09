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
		<>
			<h1>This is the way!</h1>
			<div className="card-container">
				<Card title="Harry Fabricator 123" rating={8} isCool={true} />
				<Card title="Unhappy Potter 345" rating={9} />
				<Card title="Simple Jack" rating={4} />
				<Card title="Mission Possible" rating={4} />
				<Card title="Super Easy Mission" rating={4} />
			</div>
			<p class="light">This is light text.</p>
			<p class="regular">This is regular text.</p>
			<p class="medium">This is medium text.</p>
			<p class="bold">This is bold text.</p>
			<p class="extra-bold">This is extra bold text.</p>
		</>
	);
};

export default App;
