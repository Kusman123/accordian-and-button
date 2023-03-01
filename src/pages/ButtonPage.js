import Button from "../components/Button";
import {
  GoDeviceDesktop,
  GoBeaker,
  GoCircuitBoard,
  GoDatabase,
  GoDeviceCameraVideo,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("btn was clicked");
  };
  return (
    <div>
      <div>
        <Button className="mb-5" danger rounded outline onClick={handleClick}>
          <GoDeviceCameraVideo />
          Buy This
        </Button>
      </div>

      <div>
        <Button className="mb-5" primary outline>
          <GoDeviceDesktop />
          Submit
        </Button>
      </div>

      <div>
        <Button className="mb-5" warning>
          <GoBeaker />
          Hello
        </Button>
      </div>

      <div>
        <Button className="mb-5" secondary outline>
          <GoCircuitBoard /> Cancel
        </Button>
      </div>

      <div>
        <Button className="mb-5" success rounded>
          <GoDatabase /> Delete
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
