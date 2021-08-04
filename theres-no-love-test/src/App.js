import React, { useState } from 'react';
import logo from './fail.png';
import './App.css';
import { Sections } from './data';

const Selectable = ({ children }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div onClick={() => setSelected(!selected)}>
      { selected ? <b>{ children }</b> : children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} />
      <div>
        그런 짓은 하지 말아야 했는데....
        난 그 사실을 몰랐어...
      </div>

      { Sections.map((section, sectionIndex) => (
        <div style={{ marginBottom: '100px' }}>
          <h1>{ section.title }</h1>
          { section.problems.map((problem) => (
            <div>
              <h3 style={{marginTop: '38px'}}>{ problem.title }</h3>
              { problem.items.map((item, itemIndex) => {
                return (
                  <Selectable>
                    { itemIndex+1 }. 
                    { item.includes('$placeholder$') ? <React.Fragment>
                      { item.split('$placeholder$').reduce((l, i, n) => {
                        if (n === 0) return [i];
                        return [...l, <input />, i];
                      }, [])}
                    </React.Fragment> : item }
                  </Selectable>
                );
              }) }
              { !problem.isWriteType && problem.items.length < 5 && <Selectable>5. 기타: <input /></Selectable> }
              { problem.isWriteType && <textarea style={{ width: '30vw', marginTop: '8px' }} /> }
            </div>
          )) }
        </div>
      )) }
    </div>
  );
}

export default App;
