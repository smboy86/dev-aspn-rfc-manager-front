"use client";

import { MenuItem } from "@/components/layout/menu-item";
import TabExe from "@/components/layout/tab-exe";
import TabResult from "@/components/layout/tab-result";
import TabStructure from "@/components/layout/tab-structure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCommonStore } from "@/store/commonStore";
import { useState } from "react";

const TAB_NAME = {
  exe: "실행",
  structure: "스트럭처",
  result: "결과",
};

export default function Home() {
  const [value, setValue] = useState(""); // RFC INPUT
  const [isExe, setIsExe] = useState(false); // 최초 호출 여부
  const { curTab, setCurrentTab } = useCommonStore((state) => state);

  const handleCurTab = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    // page container
    <div className="flex flex-col w-full max-w-[1080px] mx-auto pt-4">
      {/* 1) header */}
      <div className="flex w-full justify-between">
        <div className="">
          <div className="">
            <span>접속중인 시스템 : </span>
            <Button variant="outline">ESSD</Button>
          </div>
        </div>
        <div className="">
          <MenuItem />
        </div>
      </div>
      {/* 1) 본문 */}
      {/* wrap */}
      <div className="mt-10">
        {/* 1/2 input box */}
        <div className="w-1/2 mx-auto  text-center">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="호출할 RFC 함수명"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              onClick={() => {
                if (value.length <= 0) {
                  alert("호출할 RFC를 입력하세요. ");
                  return;
                }
                setIsExe(true);
              }}
            >
              호출
            </Button>
          </div>
        </div>
        {/* 2/2)  Tab - 실행, 스트럭처*/}
        {isExe ? (
          <div className="w-full mt-10">
            <Tabs value={curTab} onValueChange={handleCurTab}>
              <TabsList>
                <TabsTrigger value="exe">{TAB_NAME.exe}</TabsTrigger>
                <TabsTrigger value="structure">
                  {TAB_NAME.structure}
                </TabsTrigger>
                <TabsTrigger value="result">{TAB_NAME.result}</TabsTrigger>
              </TabsList>
              <TabsContent value="exe">
                <TabExe />
              </TabsContent>
              <TabsContent value="structure">
                <TabStructure />
              </TabsContent>
              <TabsContent value="result">
                <TabResult />
              </TabsContent>
            </Tabs>
          </div>
        ) : null}
      </div>
    </div>
  );
}
