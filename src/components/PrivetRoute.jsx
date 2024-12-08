import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const PrivetRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    if(user && user?.email){
      return children;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;