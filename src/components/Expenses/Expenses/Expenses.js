import { useState } from "react"
import './Expenses.css'

// import custom component
import Card from "../../UI/Card/Card"
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from "../ExpensesList/ExpensesList"
import ExpensesChart from "../ExpensesChart/ExpensesChart"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses