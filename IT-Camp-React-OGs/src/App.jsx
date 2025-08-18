import { useState } from 'react';
import AxiosGet from './AxiosGet';
import AxiosPost from './AxiosPost';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <AxiosGet refresh={refresh} />
      <AxiosPost />
    </>
  );
};

export default App;
