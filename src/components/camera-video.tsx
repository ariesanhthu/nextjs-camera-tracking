'use client';

import Image from "next/image";
import React from "react";
import { useState } from 'react';

export default function Cam() {
    const [loaded, setLoaded] = useState(false);

    return (
    <div className="relative w-fit">
        <img
          src="/api/stream"
          width={640}
          height={480}
          onLoad={() => setLoaded(true)}
          className="rounded shadow"
          alt="ESP32-CAM"
        />
        {!loaded && <p>Đang kết nối camera…</p>}
    </div>  
    );
}
  