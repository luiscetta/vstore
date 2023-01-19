import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SuccessToast(content) {
    return toast.success(content);
}