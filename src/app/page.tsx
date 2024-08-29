import { MenuItem } from "@/components/layout/menu-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

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
      <div className="mt-10 text-center">
        {/* input box */}
        <div className="w-1/2 mx-auto">
          <div className="flex gap-2">
            <Input type="text" placeholder="호출할 RFC 함수명" />
            <Button>호출</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
