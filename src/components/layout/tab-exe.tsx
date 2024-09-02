"use client";

import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TAB_NAME = {
  exe: "실행",
  structure: "스트럭처",
};

const TabExe = () => {
  return (
    <>
      <Card>
        <CardContent>
          <div className="flex flex-col mt-4">
            <span className="font-bold text-xl ">Import</span>
            <span className="text-sm">parameter</span>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ParamId</TableHead>
                <TableHead>ColumnA</TableHead>
                <TableHead>ColumnB</TableHead>
                <TableHead>ColumnC</TableHead>
                <TableHead>ColumnD</TableHead>
                <TableHead>...</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* row 반복 부분 */}
              <TableRow onClick={() => alert("ddd")}>
                <TableCell>BUNNR</TableCell>
                <TableCell>ColumnA</TableCell>
                <TableCell>ColumnB</TableCell>
                <TableCell>ColumnC</TableCell>
                <TableCell>ColumnD</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>column {"10"}개, row 125개 </TableCaption>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default TabExe;
