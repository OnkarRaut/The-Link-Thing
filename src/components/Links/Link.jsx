import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import React, { useState } from "react";

import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
export default function Link(props) {
  const [active, setActive] = useState(false);
  const [edit, isEdit] = useState(false);
  return (
    <div className="w-2/4 mx-auto h-full border-2 p-2 border-left-link-accent border-gray-200 m-4">
      <div className="flex flex-row justify-center">
        <div className="flex-grow font-size-1">
          {edit ? (
            <React.Fragment>
              <input
                type="text"
                className="w-11/12 m-1 p-2 border border-gray-400"
                placeholder="Enter Link Label"
              ></input>
              <input
                type="text"
                className="w-11/12 m-1 p-2 fira-code border border-gray-400"
                placeholder="Enter Link"
              ></input>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h2 className="px-2 py-1">Get into the world of material ui</h2>
              <h4 className="px-2 py-1 fira-code">
                https://material-ui.com/components/toggle-button/{" "}
              </h4>
            </React.Fragment>
          )}
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
            {edit ? (
              <React.Fragment>
                <IconButton aria-label="close" onClick={() => isEdit(false)}>
                  <CloseSharpIcon className="text-red-500" fontSize="medium" />
                </IconButton>
                <IconButton aria-label="save">
                  <CheckSharpIcon
                    className="text-green-500"
                    fontSize="medium"
                  />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteSharpIcon fontSize="medium" />
                </IconButton>
              </React.Fragment>
            ) : (
              <IconButton aria-label="edit" onClick={() => isEdit(!edit)}>
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
