import React,{ useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  //const [searchItem, setSearchItem] = useState([])
  const [transactions, setTransactions] = useState([]);
  const [make,setMake] = useState([])
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then((res) => res.json())
    .then((data) => {
      setTransactions(data)
      setMake(data)
    })
  },[]);
function addTransact(newTransaction){
  const updatedTransactions = [...transactions,newTransaction]
  setTransactions(updatedTransactions)
}
function handleSearch(event){
  let search = event.target.value.toLowerCase()
  setTransactions(make.filter(val=>val.description.toLowerCase().includes(search)))
  console.log(handleSearch)
}
  // const searchFilteredItems = (e) => {
  //   setSearchItem(e.target.value)
  //   console.log(searchItem)
  // }
  return (
    <div>
      {/* <Search searchValue={searchItem} onSearchChange={searchFilteredItems} /> */}
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm  addTransact={addTransact}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
