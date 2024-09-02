"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TabExe = () => {
  const [] = useState("");

  const handleExe = () => {
    // data fetch
    alert("RFC 실행");
  };

  return (
    <>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <h1>1. 실행 준비 옵션</h1>
          <h2>호출방법</h2>
          <div className="flex gap-2">
            <Badge variant={"default"}>import</Badge>
            <Badge variant={"destructive"}>Table</Badge>
          </div>
          <Separator className="my-10" />
          <h1>1. 실행</h1>
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
          <h2>2) Table Param</h2>
          <h3>A Table</h3>
          <div className=""></div>
          <h3>B Table</h3>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleExe}>실행</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TabExe;
