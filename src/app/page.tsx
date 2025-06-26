// Path: /src/app/setup/page.tsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SetupForm from "@/components/setup/SetupForm";
import { SetupFormData } from "@/types/setup";

export default function SetupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSetupSubmit = async (data: SetupFormData) => {
    setIsLoading(true);

    try {
      // Simulate API call
      console.log("Setup data submitted:", data);

      // You can replace this with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Store setup data in localStorage or send to API
      localStorage.setItem("fnSetupData", JSON.stringify(data));

      // Show success message (optional)
      alert(
        `สำเร็จ! ยินดีต้อนรับ ${data.employeeName}\nสาขา: ${data.branchName} (${data.branchCode})`
      );

      // Redirect to main application
      router.push("/");
    } catch (error) {
      console.error("Setup failed:", error);
      alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsLoading(false);
    }
  };

  return <SetupForm onSubmit={handleSetupSubmit} isLoading={isLoading} />;
}
