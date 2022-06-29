import loadingIcon from "../../assets/loading icon/earth.gif"
import classes from "../../styles/LoadingIconStyle.module.css"
export default function LoadingImage() {
  return (
   <div className={classes.imagePosition}>

<img src={loadingIcon} style={{width:"400px"}} alt="loadingIcon" />
   
   </div>
  )
}
