import React, { useState } from "react";
import "./CompatibilityChecker.css";

export default function CompatibilityChecker({ onDownload }) {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState(null); // "ok" یا "error"

  const handleCheck = () => {
    const numeric = parseInt(amount, 10);
    if (!isNaN(numeric) && numeric >= 50000000) {
      setStatus("ok");
    } else {
      setStatus("error");
    }
  };

  const handleDownloadClick = () => {
    if (onDownload) {
      onDownload();
    }
  };

  return (
    <div className="cc-wrapper">
      <div className="cc-card">
        <h2 className="cc-title">TEST MY PC</h2>
        <p className="cc-subtitle">
          Enter your payable amount and check if it matches allowed limits.
        </p>

        <div className="cc-input-row">
          <label className="cc-label">Your payable amount?</label>
          <input
            type="number"
            className="cc-input"
            placeholder="50000000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="cc-check-btn" onClick={handleCheck}>
          CHECK
        </button>

        {status === "ok" && (
          <div className="cc-result cc-result-ok">
            ✅ Amount is acceptable and ready to use.
          </div>
        )}

        {status === "error" && (
          <div className="cc-result cc-result-bad">
            ❌ Amount is less than required minimum.
          </div>
        )}

        {status === "ok" && (
          <button className="cc-download-btn" onClick={handleDownloadClick}>
            DOWNLOAD RESULT
          </button>
        )}
      </div>
    </div>
  );
}
