import styled from 'styled-components';
import { useContext, useState } from "react";
import { List } from "./List";
import { Form } from "./From";
// import { getLanguages } from "./const/languages";
// import { withLoading } from './hoc/withLoding';
import { Header } from "./Header.js";
import { ThemeContext } from "./contexts/ThemeContext";
// import { Modal } from './components/modal';

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App({ data }) {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  };

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </Container>

  );
}

export default App;
