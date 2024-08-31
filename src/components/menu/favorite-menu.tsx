"use client";

import { Card, CardContent } from "../ui/card";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const FavoriteMenu = () => {
  return (
    <SheetHeader>
      <SheetTitle>즐겨찾기</SheetTitle>
      <SheetDescription>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* row 반복 부분 */}
                {/* 1/2) success 클릭 이벤트 = 기존 영역 지우고 input 창 입력 */}
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>RFC_FUNCTIOJN_A</TableCell>
                </TableRow>
                {/* 2/2) fail 클릭 이벤트 없음 */}
                <TableRow>
                  <TableCell>RFC_FUNCTIOJN_B</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>RFC_FUNCTIOJN_C</TableCell>
                </TableRow>
                <TableRow onClick={() => alert("ddd")}>
                  <TableCell>RFC_FUNCTIOJN_D</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </SheetDescription>
    </SheetHeader>
  );
};

export default FavoriteMenu;
