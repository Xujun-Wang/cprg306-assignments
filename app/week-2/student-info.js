import React from "react";
import Link from "next/link";

function StudentInfo() {
  return (
    <div>
      <h2>Name: Xujun Wang</h2>
      <p>
        GitHub:&nbsp;
        <Link
          href="https://github.com/Xujun-Wang/cprg306-assignments"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          Xujun-Wang/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}

export default StudentInfo;
