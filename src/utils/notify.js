import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (type, msg, option = {}) => {
    toast(msg, {
        position: toast.POSITION.TOP_RIGHT,
        ...option,
        type: type,
        theme: "colored",
        toastId: "1a1hw23h23",
    });
};

export {
    notify
}