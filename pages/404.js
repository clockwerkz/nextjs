import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {
      console.log("clearing timemout");
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
