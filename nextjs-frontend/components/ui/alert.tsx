import React, { useState, useEffect } from "react";

interface Props {
  type: string;
  title: string | string[];
  content: string | string[];
  closeHandler?: () => void;
}

const Alert: React.FC<Props> = ({ type, title, content, closeHandler }) => {
  const [color, setColor] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (type) {
      case "info":
        setIcon(
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
        );
        return setColor({
          100: "bg-blue-100",
          500: "text-blue-500",
          600: "text-blue-600",
          700: "text-blue-700",
        });
      case "success":
        setIcon(
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
        );
        return setColor({
          100: "bg-green-100",
          500: "text-green-500",
          600: "text-green-600",
          700: "text-green-700",
        });
      case "warning":
        setIcon(
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
        );
        return setColor({
          100: "bg-orange-100",
          500: "text-orange-500",
          600: "text-orange-600",
          700: "text-orange-700",
        });
      case "error":
        setIcon(
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
        );
        return setColor({
          100: "bg-red-100",
          500: "text-red-500",
          600: "text-red-600",
          700: "text-red-700",
        });
      default:
        return null;
    }
  }, [type]);

  return (
    <div className={`${color[100]} p-5 w-full mb-3 rounded-lg`}>
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`flex-none fill-current ${color[500]} h-4 w-4`}
          >
            {icon}
          </svg>
          <div className="leading-tight flex flex-col space-y-2">
            <div className={`text-sm font-medium ${color[700]}`}>{title}</div>
            <div className={`flex-1 leading-snug text-sm ${color[600]}`}>{content}</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`flex-none fill-current ${color[600]} h-3 w-3 cursor-pointer`}
          onClick={closeHandler}
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
      </div>
    </div>
  );
};

export default Alert;
