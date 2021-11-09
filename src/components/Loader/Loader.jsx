import Loader from "react-loader-spinner";
import s from './Loader.module.css';

const Loading = () => {
  return (
    <Loader className={s.loader}
      type="Audio"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={5000}
      
      />
  )
}

export default Loading;
