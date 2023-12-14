"use client";

import { Card } from "@/components/card";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    const fetcher = async () => {
      const request = await fetch("/api/1");
      const json = await request.json();
      console.log(json);
    }
    
    fetcher();
  });

  return (
    <main>
      <Card title="Detail page" contents="Detail page contents" />
    </main>
  )
}
