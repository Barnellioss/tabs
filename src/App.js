//import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setTab } from './redux/tabsReducer';

function App() {

  const tabs = useSelector((state) => state.tabsState.tabs)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <ul className="listItems">
        {tabs.map(item =>
          item.active === false ?
            <li key={item.id} className="listItem listItemBasic">
              <button onClick={() => dispatch(setTab(item.id))}>{item.name}</button>
            </li>
            :
            item.active === true
              ?
              <li key={item.id} className="listItem listItemActive">
                <button onClick={() => dispatch(setTab(item.id))}>{item.name}</button>
              </li>
              :
              <li key={item.id} className="listItem listItemDisabled">
                <button>{item.name}</button>
              </li>
        )}
      </ul>
    </div>
  );
}

export default App;
