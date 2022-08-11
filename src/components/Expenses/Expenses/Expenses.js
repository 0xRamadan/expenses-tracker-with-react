import Card from "../Card/Card"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './Expenses.css'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((expense, index) => (
                <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    )
}

export default Expenses