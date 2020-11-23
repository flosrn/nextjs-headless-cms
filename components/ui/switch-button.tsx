import React from "react";
import { Switch } from "@headlessui/react";

interface SwitchButtonProps {
  switchValue: boolean;
  switchHandler: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ switchValue, switchHandler }) => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="w-full max-w-xs mx-auto">
        <Switch.Group as="div" className="flex items-center space-x-4">
          <Switch
            as="button"
            checked={switchValue}
            onChange={switchHandler}
            className={`${
              switchValue ? "bg-indigo-600" : "bg-gray-200"
            } relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
          >
            {({ checked }) => (
              <span
                className={`${
                  checked ? "translate-x-5" : "translate-x-0"
                } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
              />
            )}
          </Switch>
        </Switch.Group>
      </div>
    </div>
  );
};

export default SwitchButton;
