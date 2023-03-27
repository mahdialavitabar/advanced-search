import React, { useEffect, useState } from "react";

import Input from "./Input";

type Option = {
  label: string;
  value: string;
};

type Props = {
  data: Option[];
  inputClassName?: string;
  ulClassName?: string;
  liClassName?: string;
};

const ReactRealTimeSearch: React.FC<Props> = ({
  data,
  inputClassName,
  ulClassName,
  liClassName,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Option[]>(data);

  useEffect(() => {
    let newData = data;

    if (searchTerm) {
      newData = newData.filter((option) => option.label.includes(searchTerm));
    }

    setFilteredData(newData);
  }, [filteredData, searchTerm]);

  return (
    <>
      <Input
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className={inputClassName}
      />

      <ul className={ulClassName}>
        {filteredData.map((option) => (
          <li key={option.value} className={liClassName}>
            {option.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReactRealTimeSearch;
