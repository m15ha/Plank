import './App.scss';
import { useEffect, useState } from 'react';
import useAxios from './hooks/useAxios';
import Title from './components/Title';
import Filters from './components/Filters';
import Layout from './components/Layout';
import Catalog from './components/Catalog';
import Loader from './components/Loader';

function App() {
    const [filtered, setFiltered] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const {
        data: filtersData,
        fetchError: filtersFetchError,
        isLoading: filtersIsLoading,
    } = useAxios(
        'https://plankdesign.com/wp-json/plank/v1/fed-test/categories'
    );

    const {
        data: catalogData,
        fetchError: catalogFetchError,
        isLoading: catalogIsLoading,
    } = useAxios(
        'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
    );

    useEffect(() => {
        setFiltered(catalogData?.['case-studies'] || []);
    }, [catalogData]);

    const filterHandler = selectedSlug => {
        if (selectedSlug === 'all') {
            setFiltered(catalogData['case-studies']);
            setSelectedFilter('all');
        } else {
            const filteredCatalog = catalogData['case-studies'].filter(item =>
                item.categories.find(category => category.slug === selectedSlug)
            );
            setFiltered(filteredCatalog);
            setSelectedFilter(selectedSlug);
        }
    };

    return (
        <Layout>
            <Title />           
            <Filters
                filterHandler={filterHandler}
                selectedFilter={selectedFilter}
                data={filtersData}
                fetchError={filtersFetchError}
                isLoading={filtersIsLoading}
            />           
            {catalogIsLoading ? (
                <Loader />
            ) : (
                <Catalog
                    data={filtered}
                    fetchError={catalogFetchError}
                    isLoading={catalogIsLoading}
                />
            )}
        </Layout>
    );
}

export default App;
