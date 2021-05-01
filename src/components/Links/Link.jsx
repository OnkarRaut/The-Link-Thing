import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { useState } from "react";

export default function Link(props) {
  const [active, setActive] = useState(false);
  return (
    <div className="w-2/4 mx-auto h-full border-2 p-2 border-left-1 border-color-gray-light m-2">
      <div className="flex flex-row justify-center">
        <div className="flex-grow font-size-1">
          <h2 className="px-2 py-1">Get into the world of material ui</h2>
          <h4 className="px-2 py-1 fira-code">
            https://material-ui.com/components/toggle-button/{" "}
          </h4>
        </div>
        <div>
          <div className="flex flex-col justify-between items-end">
            <Switch
              checked={active}
              onChange={() => setActive(!active)}
              name="check-active"
              size="small"
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end pt-0 mt-0">
        {" "}
        <IconButton aria-label="edit">
          <EditRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteForeverRoundedIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
