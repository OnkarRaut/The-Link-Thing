import Switch from "@material-ui/core/Switch";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";

export default function LinkEdit(props) {
  const [active, setActive] = useState(true);
  const [label, setLabel] = useState("The Awesome Link");
  const [link, setLink] = useState(
    "http://localhost:8923/this-is-something-awesome"
  );
  return (
    <div className="w-2/4 mx-auto h-full border-2 p-2 border-left-link-accent border-gray-500 m-5">
      <div className="flex flex-row justify-center">
        <div className="flex-grow font-size-1">
          <input
            type="text"
            className="w-11/12 m-1 p-2 border border-gray-400"
            placeholder="Enter Link Label"
            value={label}
          ></input>
          <input
            type="text"
            className="w-11/12 m-1 p-2 fira-code border border-gray-400"
            placeholder="Enter Link"
            value={link}
          ></input>
        </div>
        <div className="flex flex-col place-items-end space-between justify-end justify-between">
          <Switch
            className="ml-auto"
            checked={active}
            onChange={() => setActive(!active)}
            name="check-active"
            size="small"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <div>
            {" "}
            <IconButton aria-label="close">
              <CloseSharpIcon className="text-red-500" fontSize="medium" />
            </IconButton>
            <IconButton aria-label="save">
              <CheckSharpIcon className="text-green-500" fontSize="medium" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
