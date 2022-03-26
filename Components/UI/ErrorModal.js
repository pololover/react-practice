import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button'
const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onDeleteError}/>
            <Card className={classes.modal}>
                <header className={classes.header}>{props.title}</header>
                <div className={classes.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onDeleteError}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}


export default ErrorModal