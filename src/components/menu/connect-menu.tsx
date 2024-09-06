"use client";

import InputLabel from "../temp/input-label";
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

const ConnectMenu = () => {
  return (
    <SheetHeader>
      <SheetTitle>접속정보</SheetTitle>
      <SheetDescription>
        <Tabs defaultValue="list">
          <TabsList>
            <TabsTrigger value="list">접속 목록</TabsTrigger>
            <TabsTrigger value="new">신규</TabsTrigger>
          </TabsList>
          {/* 1) 접속 목록 */}
          <TabsContent value="list">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>기존 접속 목록</CardTitle>
                <CardDescription>
                  선택하여 접속정보를 변경할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>ashost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* row 반복 부분 */}
                    <TableRow onClick={() => alert("1 ESSD 시스템 접속")}>
                      <TableCell className="font-medium">
                        1 ESSD 시스템
                      </TableCell>
                      <TableCell>000.000.000.000</TableCell>
                    </TableRow>
                    <TableRow onClick={() => alert("2 ESSD 시스템 접속")}>
                      <TableCell className="font-medium">
                        2 ESSD 시스템
                      </TableCell>
                      <TableCell>111.111.111.111</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        3 ESSD 시스템
                      </TableCell>
                      <TableCell>222.222.222.222</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        4 ESSD 시스템
                      </TableCell>
                      <TableCell>333.333.333.333</TableCell>
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
          </TabsContent>
          {/* 2) 신규 */}
          <TabsContent value="new">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardDescription>신규 접속정보 입력</CardDescription>
              </CardHeader>
              <CardContent>
                <InputLabel
                  id="input1"
                  label="Name"
                  placeholder="커넥션 이름"
                />
                <InputLabel
                  id="input2"
                  label="ashost"
                  placeholder="000.000.000.000"
                />
                <InputLabel
                  id="input3"
                  label="client"
                  placeholder="000.000.000.000"
                />
                <InputLabel id="input4" label="langu" placeholder="xx" />
                <InputLabel id="input5" label="sysnr" placeholder="00" />
                <InputLabel id="input6" label="user" placeholder="user id" />
                <InputLabel
                  id="input7"
                  type="password"
                  label="passwd"
                  placeholder="******"
                />
                <div className="pt-4">
                  <Button
                    variant={"default"}
                    onClick={() => {
                      alert("접속 시도 및 접속 시스템 변경");
                    }}
                  >
                    Test Connection & Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SheetDescription>
    </SheetHeader>
  );
};

export default ConnectMenu;
