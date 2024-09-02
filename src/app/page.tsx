import { MenuItem } from "@/components/layout/menu-item";
import TabExe from "@/components/layout/tab-exe";
import TabStructure from "@/components/layout/tab-structure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_NAME = {
  exe: "실행",
  structure: "스트럭처",
};

export default function Home() {
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
            <Input type="text" placeholder="호출할 RFC 함수명" />
            <Button>호출</Button>
          </div>
        </div>
        {/* 2/2)  Tab - 실행, 스트럭처*/}
        <div className="w-full mt-10">
          <Tabs defaultValue="exe">
            <TabsList>
              <TabsTrigger value="exe">{TAB_NAME.exe}</TabsTrigger>
              <TabsTrigger value="structure">{TAB_NAME.structure}</TabsTrigger>
            </TabsList>
            <TabsContent value="exe">
              <TabExe />
            </TabsContent>
            <TabsContent value="structure">
              <TabStructure />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
