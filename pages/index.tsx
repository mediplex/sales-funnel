import { DefaultLayout } from "../layouts";

import { Header, How, Reviews } from "containers";
import { CheckoutButton } from "../components";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <CheckoutButton />
        <How />
        <CheckoutButton />
        <Reviews />
        <CheckoutButton />
      </DefaultLayout>
    </>
  );
}
