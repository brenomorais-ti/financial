import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Categoty';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Financial Control </C.HeaderText>
      </C.Header>

      <C.Body>

        {/*Área de informações*/}
        
        {/*Área de inserção*/}
        
        {/*Tabela de itens*/}

      </C.Body>
    </C.Container>
  );
}

export default App;