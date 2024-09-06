"use client";

import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TabResult = () => {
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
          <div className="import-box pb-4">
            <div className="grid grid-cols-2 gap-4 py-1 pl-2">
              <div className="grid gap-2">
                <Label htmlFor="BUNNR">BUNNR</Label>
                <Input id="BUNNR" type="text" value={"BUNNR"} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="BENNR">BENNR</Label>
                <Input id="BENNR" type="text" value={"BENNR"} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="NAKJD">NAKJD</Label>
                <Input id="NAKJD" type="text" value={"NAKJD"} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="KAKDO">KAKDO</Label>
                <Input id="KAKDO" type="text" value={"KAKDO"} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="NAKJD">NAKJD</Label>
                <Input id="NAKJD" type="text" value={"NAKJD"} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="KAKDO">KAKDO</Label>
                <Input id="KAKDO" type="text" value={"KAKDO"} disabled />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* 2/3) Export */}
      <Card className="mb-6">
        <CardContent>
          <div className="flex flex-col mt-4">
            <span className="font-bold text-xl ">Export</span>
            <span className="text-sm">parameter</span>
          </div>
          <div className="import-box pb-4">
            <div className="grid grid-cols-1 gap-4 py-1 pl-2">
              <div className="grid gap-2">
                <Label htmlFor="E_MSG">E_MSG</Label>
                <Input
                  id="E_MSG"
                  type="text"
                  value={"Message AAAAAAAAAAAAAAAA"}
                  disabled
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="E_RETURN">E_RETURN</Label>
                <Input
                  id="E_RETURN"
                  type="text"
                  value={"E_RETURN 내용 BBBBBBB"}
                  disabled
                />
              </div>
            </div>
          </div>
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

export default TabResult;
