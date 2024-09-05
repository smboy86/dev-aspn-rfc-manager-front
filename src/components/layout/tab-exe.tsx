"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { TableParam } from "../dataTable/table-param";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { TableCellEdit } from "@/app/data-table/TableCell";

export type TableParamData = {
  paramA: string;
  paramB: string;
  paramC: string;
  paramD: string;
};

const defaultData: TableParamData[] = [
  {
    paramA: "ColumnA",
    paramB: "ColumnB",
    paramC: "ColumnC",
    paramD: "ColumnD",
  },
];

export const columns: ColumnDef<TableParamData>[] = [
  {
    id: "paramA",
    accessorKey: "paramA",
    header: "ParamA",
    cell: TableCellEdit,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "paramB",
    accessorKey: "paramB",
    header: "ParamB",
    cell: TableCellEdit,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "paramC",
    accessorKey: "paramC",
    header: "ParamC",
    cell: TableCellEdit,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "paramD",
    accessorKey: "paramD",
    header: "ParamD",
    cell: TableCellEdit,
    enableSorting: false,
    enableHiding: false,
  },
];

const TabExe = () => {
  const [activeImportParam, setActiveImportParam] = useState(true);
  const [activeTableParam, setActiveTableParam] = useState(true);

  // data Table
  const [data, setData] = useState(() => [...defaultData]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
      addRow: () => {
        // TODO - 동적 데이터 생성
        const newRow: any = {
          paramA: "",
          paramB: "",
          paramC: "",
          paramD: "",
        };
        const setFunc = (old: any[]) => [...old, newRow];
        setData(setFunc);
        // setOriginalData(setFunc);
      },
    },
  });

  const handleExe = () => {
    // data fetch
    alert("RFC 실행");
    alert("dev ing...  input params :::");
    alert(`table params...  ::${JSON.stringify(data, null, 2)}`);
  };

  return (
    <>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <h1>1. 실행 준비 옵션</h1>
          <h2>호출방법</h2>
          <div className="flex gap-2">
            <Badge
              variant={activeImportParam ? "destructive" : "default"}
              onClick={() => setActiveImportParam(!activeImportParam)}
            >
              import
            </Badge>
            <Badge
              variant={activeTableParam ? "destructive" : "default"}
              onClick={() => setActiveTableParam(!activeTableParam)}
            >
              Table
            </Badge>
          </div>
          <Separator className="my-10" />
          <h1>2. 실행</h1>
          {activeImportParam ? (
            <>
              <h2>1) import Param</h2>
              <div className="import-box pb-4">
                <div className="grid grid-cols-2 gap-4 py-1 pl-2">
                  <div className="grid gap-2">
                    <Label htmlFor="BUNNR">BUNNR</Label>
                    <Input id="BUNNR" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="BENNR">BENNR</Label>
                    <Input id="BENNR" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="NAKJD">NAKJD</Label>
                    <Input id="NAKJD" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="KAKDO">KAKDO</Label>
                    <Input id="KAKDO" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="NAKJD">NAKJD</Label>
                    <Input id="NAKJD" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="KAKDO">KAKDO</Label>
                    <Input id="KAKDO" type="text" />
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {activeTableParam ? (
            <>
              <h2>2) Table Param</h2>
              <h3>A Table</h3>
              {/* Data Tables list */}
              <div className="">
                <TableParam table={table} columns={columns} />
              </div>
              <h3>B Table</h3>
            </>
          ) : null}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleExe}>실행</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TabExe;
