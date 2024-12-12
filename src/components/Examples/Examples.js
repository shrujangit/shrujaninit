import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import { useState } from 'react';
import Tab from "../../common/Tab";


export default function Examples() {
  const [val, setVal] = useState();
  function handleSelect(arg) {
    setVal(arg);
  } 

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tab>
        <TabButton isSelected={val === 'components'} label="Component" onClick={()=> handleSelect('components')}/>
        <TabButton isSelected={val === 'jsx'} label="JSX" onClick={()=> handleSelect('jsx')} />
        <TabButton isSelected={val === 'props'} label="Props" onClick={()=>handleSelect('props')} />
        <TabButton isSelected={val === 'state'} label="State" onClick={()=>handleSelect('state')}  />
      </Tab>
      { val && <div id="tab-content">
        <h3>{EXAMPLES[val].title}</h3>
        <p>{EXAMPLES[val].description}</p>
        <pre>
          <code>{EXAMPLES[val].code}</code>
        </pre>
      </div> }
    </section>
  )
}