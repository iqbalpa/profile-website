import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import { queryDatabase } from "../src/api/queryDb";
import { parseProperties, Post } from "../src/utils/parseProperties";

export default function App() {
	return (
		<>
			<Header />
			<Hero />
			<Experience />
			<Project />
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const database = await queryDatabase();
	const properties = parseProperties(database);
	return {
		props: {
			properties,
		},
	};
}