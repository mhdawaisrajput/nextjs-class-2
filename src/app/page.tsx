export default function Home() {
  return (
    <>
      <h1>This is My Home Page:</h1>
    </>
  );
}

/* import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/">Home:</Link>
      <Link href="/about">About:</Link>
      <Link href="/contact">Contact:</Link>
      <h1>This is My Home Page:</h1>
    </>
  );
}

function Homepage() {
  return (
    <>
      <a href="/">Home:</a>
      <a href="/about">About:</a>{" "}
      <a href="http://localhost:3000/about">about</a>
      <a href="/contact">Contact:</a>
      <h1>This is My Home Page:</h1>
    </>
  );
} */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.

/*    Panaverse: step01_routes. 

1...step01_routes/app/page.tsx

export default function Home() {
  return <div>Hello World from Zia</div>;   // return k saath direct div laga sakte hain, yaha () k ander div likhna must nahi hai.
};

2...app / name(folder)  / page.tsx

export default function GiveName() {
  return <div>My name is Zia</div>;
};

3...app / name(folder) / address(folder)  / page.tsx.

export default function GiveAddress() {
  return <div>I live in Karachi, Pakistan</div>;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.

Panaverse: step02_linking.

1...step02_linking/app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World from Zia
      <br />
      <Link href="/name">Goto Name Page:</Link>
    </div>
  );
};


2...app / name(folder)  / page.tsx

"use client";

import { useRouter } from "next/navigation";

export default function GiveName() {
  const router = useRouter();
  return (
    <div>
      My name is Zia.
      <br />
      <button type="button" onClick={() => router.push("/name/address")}>
        Get Address
      </button>
    </div>
  );
};


3...app / name(folder) / address(folder)  / page.tsx.

export default function GiveAddress() {
return <div>I live in Karachi, Pakistan</div>;
};

*/