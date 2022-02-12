import './App.scss';
import Title from './components/Title';
import Filters from './components/Filters';
import Layout from './components/Layout';

function App() {
    return (
        <Layout>
            <Title />
            <Filters />
        </Layout>
    );
}

export default App;
