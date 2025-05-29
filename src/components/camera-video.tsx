'use client';

import Image from "next/image";
import React from "react";
import { useState } from 'react';

export default function Cam() {
    const [loaded, setLoaded] = useState(false);

    return (
    <div className="w-full h-full">
        <img
          src="/api/stream"
          width={640}
          height={480}
          onLoad={() => setLoaded(true)}
          className="rounded shadow"
          hidden={!loaded}
        />
        {!loaded && (
          <div className="flex flex-col items-center justify-center z-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
            <p className="mt-2 text-sm">Đang kết nối camera…</p>
          </div>
        )}
    </div>  
    );
}
  