
import './App.css';
import {useState} from 'react';
function App() {
  const [form, setForm] = useState({
    amount:0,
    description:"",
    date:""
  })
  async function handleSubmit(e){
    e.preventDefault();
    const res=await fetch("http://localhost:4000/transaction",{
      method:"POST",
      body:form,
    });
    console.log(res)
  }

  function handleInput(e){
    setForm({...form,[e.target.name]:e.target.value});

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name='amount' value={form.amount} onChange={handleInput} placeholder="Enter Transaction amount"/>
        <input type="description" name='description' value={form.description} onChange={handleInput} placeholde="enter the trasaction details"/>
        <input type="date" name='date' onChange={handleInput} value={form.date}/>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
