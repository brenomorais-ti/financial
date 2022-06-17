import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Categoty';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
  const [list, setList] = useState(items);/* Lista completa */
  const [filteredList, setFilteredList] = useState<Item[]>([]); /* Lista filtrada */
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);/* Data atual */

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Financial Control </C.HeaderText>
      </C.Header>

      <C.Body>

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        
        {/*Área de inserção*/}
        
        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;