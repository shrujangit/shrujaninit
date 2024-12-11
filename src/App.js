

import { CORE_CONCEPTS, EXAMPLES } from "./data"
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from 'react';

function App() {
  const [val, setVal] = useState();
  function handleSelect(arg) {
    setVal(arg);
    console.log(val);
  } 
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((x, i) => (
          <CoreConcepts key={i} {...x}/>
        ))}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={val === 'components'} label="Component" onSelect={()=> handleSelect('components')} />
            <TabButton isSelected={val === 'jsx'} label="JSX" onSelect={()=> handleSelect('jsx')} />
            <TabButton isSelected={val === 'props'} label="Props" onSelect={()=>handleSelect('props')} />
            <TabButton isSelected={val === 'state'} label="State" onSelect={()=>handleSelect('state')}  />
          </menu>
          { val && <div id="tab-content">
            <h3>{EXAMPLES[val].title}</h3>
            <p>{EXAMPLES[val].description}</p>
            <pre>
              <code>{EXAMPLES[val].code}</code>
            </pre>
          </div> }
        </section>
      </main>
    </div>
  );
}

export default App;
