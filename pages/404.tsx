import { useRouter } from "next/router";

function Custom404() {
  const router = useRouter();

  return (
    <div>
      <h3>
        No match for <code>{router.asPath}</code>
      </h3>
    </div>
  );
}

export default Custom404;
