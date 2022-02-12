import './App.scss';
import Title from './components/Title';
import Filters from './components/Filters';
import Layout from './components/Layout';
import Catalog from './components/Catalog';
import useAxios from './hooks/useAxios';

function App() {
    const { data, fetchError, isLoading } = useAxios(
        'https://plankdesign.com/wp-json/plank/v1/fed-test/categories'
    );
    console.log(
        '🚀 App ~ data, fetchError, isLoading',
        data,
        fetchError,
        isLoading
    );

    const {
        data: categoriesDta,
        fetchError: categoriesFetchError,
        isLoading: categoriesIsLoading,
    } = useAxios(
        'https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies'
    );
    console.log(
        '🚀 App ~ data, fetchError, isLoading',
        data,
        fetchError,
        isLoading
    );

    return (
        <Layout>
            <Title />
            <Filters
                data={data}
                fetchError={fetchError}
                isLoading={isLoading}
            />
            <Catalog
                data={categoriesDta}
                fetchError={categoriesFetchError}
                isLoading={categoriesIsLoading}
            />
        </Layout>
    );
}

export default App;
