"use client";

import InputLabel from "../temp/input-label";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const HistoryMeny = () => {
  return (
    <SheetHeader>
      <SheetTitle>접속정보</SheetTitle>
      <SheetDescription>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>status</TableHead>
                  <TableHead>Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* row 반복 부분 */}
                {/* 1/2) success 클릭 이벤트 = 기존 영역 지우고 input 창 입력 */}
                <TableRow
                  onClick={() =>
                    alert("기존 결과 지우고, RFC 호출 input 자동 복사")
                  }
                >
                  <TableCell className="font-medium">
                    <Badge variant="default">Success</Badge>
                  </TableCell>
                  <TableCell>RFC_FUNCTIOJN_A</TableCell>
                </TableRow>
                {/* 2/2) fail 클릭 이벤트 없음 */}
                <TableRow>
                  <TableCell>
                    <Badge variant="outline">Fail</Badge>
                  </TableCell>
                  <TableCell>RFC_FUNCTIOJN_B</TableCell>
                </TableRow>
                <TableRow
                  onClick={() =>
                    alert("기존 결과 지우고, RFC 호출 input 자동 복사")
                  }
                >
                  <TableCell className="font-medium">
                    <Badge variant="default">Success</Badge>
                  </TableCell>
                  <TableCell>RFC_FUNCTIOJN_C</TableCell>
                </TableRow>
                <TableRow
                  onClick={() =>
                    alert("기존 결과 지우고, RFC 호출 input 자동 복사")
                  }
                >
                  <TableCell className="font-medium">
                    <Badge variant="default">Success</Badge>
                  </TableCell>
                  <TableCell>RFC_FUNCTIOJN_D</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          {/* <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
              </CardFooter> */}
        </Card>
      </SheetDescription>
    </SheetHeader>
  );
};

export default HistoryMeny;
