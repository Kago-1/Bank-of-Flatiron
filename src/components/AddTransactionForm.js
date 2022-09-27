import React ,{useState} from "react";
function AddTransactionForm() {
  const [formData,setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  });
  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.name})
  }


  function addTransaction (event){
    event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:8001/transactions`,{
      method: "POST",
      headers: {"Content-Type": "application/json",
  },
  body: JSON.stringify(
    {date: formData.date,
    description: formData.description,
    category: formData.category,
    amount: formData.amount}
    )
  })
  }
   
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={addTransaction}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          <input type="text" value={formData.description} name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" value={formData.category} name="category" placeholder="Category" onChange={handleChange}/>
          <input type="number" value={formData.amount} name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  ); 
}

export default AddTransactionForm;
