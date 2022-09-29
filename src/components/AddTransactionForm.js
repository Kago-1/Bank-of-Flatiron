import React ,{useState} from "react";

function AddTransactionForm(addTransact) {
  const [formData,setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:0
  })
  // const [date,setDate] = useState("")
  // const [description,setDescription] = useState("")
  // const [category,setCategory] = useState("")
  // const [amount,setAmount] = useState("")
  // const [add, setAdd] = useState([])

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }


  function addTransaction (event){
    //event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:8001/transactions`,{
      method: "POST",
      headers: {"Content-Type": "application/json", 
  },
  body: JSON.stringify(formData
    // {date: formData.date,
    // description: formData.description,
    // category: formData.category,
    // amount: formData.amount}
    )
  })
  // .then((response)=>response.json())
  //   .then((data)=>addTransact =(data))
  //   console.log(formData);
  //   const data =[date, description, category, amount]
  //   if(date&&description&&category&&amount){
  //     setAdd((formData)=>[...formData,data])
  //     setDate("")
  //     setDescription("")
  //     setCategory("")
  //     setAmount("")
  //   }
  setFormData({
    date:"",
    description:"",
    category:"",
    amount:0

  })
  }
   
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={addTransaction}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          <input type="text"  name="description" value={formData.description} placeholder="Description"  onChange={handleChange} />
          <input type="text"  name="category" value={formData.category} placeholder="Category"  onChange={handleChange}/>
          <input type="number"  name="amount" value={formData.amount} placeholder="Amount" step="0.01"  onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
      {/* {
        add.map((formData)=>
        <table>
          <tbody>
            <tr>
            <th>{formData.date}</th>
            <th>{formData.description}</th>
            <th>{formData.category}</th>
            <th>{formData.amount}</th>
            </tr>
          </tbody>
        </table>)
      } */}
    </div>
  ); 
}

export default AddTransactionForm;
