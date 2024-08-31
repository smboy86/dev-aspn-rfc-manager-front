"use client";

import { LinkNone2Icon, Pencil1Icon, StarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import React from "react";
import ConnectMenu from "../menu/connect-menu";

export function MenuItem() {
  const [openConnection, setOpenConnection] = React.useState(false); // 접속정보 시트
  const [openHistory, setOpenHistory] = React.useState(false); // 히스토리 시트
  const [openFavorite, setOpenFavorite] = React.useState(false); // 즐겨찾기 시트

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>메뉴</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          {/* 기본정보 뿌려볼 영역 */}
          {/* <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel> 
        <DropdownMenuSeparator /> */}
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setOpenConnection(true)}>
              <LinkNone2Icon /> <span className="ml-1">접속정보</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setOpenHistory(true)}>
              <Pencil1Icon /> <span className="ml-1">히스토리</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setOpenFavorite(true)}>
              <StarIcon /> <span className="ml-1">즐겨찾기</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>
          종료하기
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
      <Sheet open={openConnection} onOpenChange={setOpenConnection}>
        <SheetContent>
          <ConnectMenu />
        </SheetContent>
      </Sheet>
      <Sheet open={openHistory} onOpenChange={setOpenHistory}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>히스토리</SheetTitle>
            <SheetDescription>2222</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Sheet open={openFavorite} onOpenChange={setOpenFavorite}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>즐겨찾기</SheetTitle>
            <SheetDescription>2222</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
