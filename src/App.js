import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global'
import Header from './components/Header';
import content from './contents';
import { Container } from './components/styles/Container.styled';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
