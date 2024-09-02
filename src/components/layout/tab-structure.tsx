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

const TabStructure = () => {
  return (
    <>
      {/* table card list 부분 */}
      {/* 1/3) Import */}
      <Card className="mb-6">
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
      {/* 2/3) Export */}
      <Card className="mb-6">
        <CardContent>
          <div className="flex flex-col mt-4">
            <span className="font-bold text-xl ">Export</span>
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
      {/* 3/3) 테이블 */}
      <Card className="mb-6">
        <CardContent>
          <div className="flex flex-col mt-4">
            <span className="font-bold text-xl ">Tables</span>
          </div>
          <div className="table-box">
            <div className="table-top-description">
              <span className="text-sm">A Table parameter</span>
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
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>BUNNR</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
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
          </div>
          <div className="">
            <div className="">
              <span className="text-sm">B Table parameter</span>
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
                  <TableCell>KSOTJ</TableCell>
                  <TableCell>ColumnA</TableCell>
                  <TableCell>ColumnB</TableCell>
                  <TableCell>ColumnC</TableCell>
                  <TableCell>ColumnD</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              </TableBody>
              <TableCaption>column {"10"}개, row 125개 </TableCaption>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TabStructure;
