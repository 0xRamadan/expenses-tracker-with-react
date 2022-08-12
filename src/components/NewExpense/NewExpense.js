import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card/Card'
import './NewExpense.css'
const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const saveExpenseHandler = (enteredExpenseData) => {
        // create expense object with Id
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // a pointer to a function that is called to pass data from child to parent
        props.onAddExpense(expenseData)
    }

    // conditional content -- change content based on state
    const OpenHandler = () => {
        setIsOpen(true)
    }
    const CloseHandler = () => {
        setIsOpen(false)
    }
    return (
        <Card className="new-expense">
            {!isOpen && (
                <div>
                    <h2>Keep Track of your Expenses</h2>
                    <button onClick={OpenHandler}>Add New Expense</button>
                </div>
            )}
            {isOpen && (
                <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={CloseHandler} />
            )}
        </Card>
    )
}

export default NewExpense