import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export const TableCellEdit = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const columnMeta = column.columnDef.meta;
  const tableMeta = table.options.meta;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      type="text"
      placeholder=""
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        tableMeta?.updateData(row.index, column.id, e.target.value);
      }}
    />
  );
};
