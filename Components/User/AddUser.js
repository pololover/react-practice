import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message : 'Please enter a valid name and age (non-empty-values).'
            })
            return;
        }
        if (enteredAge.trim() < 0) {
            setError ({
                title: 'Invalid age',
                message: 'Please enter a valid name and age (non-empty values.)'
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge);
    }

    const changeNameHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const cancelErrorHandler = () => {
        setError(null);
    }
    return(
        //사용자 정의 컴포넌트는 해당 컴포넌트에서 사용하는 props로만 동작할 수 있음.
        //내장 html이 아니기때문에 리액트에서 사전에 정의한 className과 같은게 먹지않음. 그래서 모든 걸 props로 넘겨줘서 처리해야함.
        <div>
            {error && <ErrorModal title={error.title} content={error.message} onDeleteError={cancelErrorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    {/* label을 input과 연결시켜주는 내장prop */}
                    <label htmlFor="username">Username :</label>
                    <input id="username" type="text" onChange={changeNameHandler} />
                    <label htmlFor="age">Age : </label>
                    <input id="age" type="number" onChange={changeAgeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )

}


export default AddUser