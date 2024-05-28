import React from 'react'

function ExpenseForm() {
  const handleSubmit = (e) => {
e.preventDefault()
  }
    return (
    <>
      <form className="expense-form" onSubmit = {handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" />
        </div>
        <div className="input-container">
          <label htmlFor="category" hidden>Category</label>
              <select id = "category">
              <option value="">Select Category</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  )
}

export default ExpenseForm
