import "./index.css";

const SeachInfo = ({searchText, searchCount}) => {
	return (
		searchText && <section className="search-title">
			<p>По запросу <span>{searchText}</span> найдено {searchCount} товаров</p>
		</section>
	);
};

export default SeachInfo;
