import { Link } from "react-router-dom";
import Button from "../../ReUseCom/Button";
import useAuth from "../../../hooks/useAuth";

const Bannre = () => {
    const {user} = useAuth();
    return (
        <div className={`bg-[url('https://i.ibb.co/LCGVdKQ/186441105-1ab701e9-3e64-4973-9ea0-618306b42fe4.jpg')] bg-cover relative h-[800px] w-full`}>
            <h2 className="text-3xl font-semibold">Open Nagad Account</h2>
            
           <div>
           {user ? (
            ""
          ) : (
          <div>
            <Link to='/registration'><Button text={"Register"}></Button></Link>
              <Link
              
              to="/login"
            >
              {" "}
              <Button text={"Login"}></Button>
            </Link>
          </div>
          )}
           </div>
            
        </div>
    );
};

export default Bannre;