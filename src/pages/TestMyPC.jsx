import React from "react";
import CompatibilityChecker from "../components/CompatibilityChecker";
import "../index.css";

export default function TestMyPC() {
  return (
    <div className="test-page-wrapper">
      <CompatibilityChecker />
    </div>
  );
}
