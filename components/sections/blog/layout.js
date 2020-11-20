import Alert from "components/sections/blog/alert";
import Footer from "components/sections/blog/footer";
import Meta from "components/sections/blog/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
