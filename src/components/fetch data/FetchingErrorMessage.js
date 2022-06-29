import errorMessageIcon from "../../assets/loading icon/fetchError.gif"
import classes from "../../styles/FetchingErrorMessage.module.css"
export default function FetchingErrorMessage() {
  return (
    <div className={classes.errorMessagePosition}>

    <h3>Sorry, there was an error in showing data at this moment!!!</h3>

        <img src={errorMessageIcon} alt="errorMessage" />

    </div>
  )
}
