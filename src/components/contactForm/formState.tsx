import { atom } from "recoil";

const formState = atom({
    key: "formState",
    default: {
        name: "",
        email: "",
        message: "",
    },
});

export default formState;

