import React from "react";
import Link from "next/link";

function StudentInfo() {
  return (
    <div>
      <h2>Xujun Wang</h2>
      <p>
        <Link
          href="https://github.com/Xujun-Wang/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </Link>
      </p>
    </div>
  );
}

export default StudentInfo;
