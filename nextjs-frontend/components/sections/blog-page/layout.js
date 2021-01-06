import Alert from "components/sections/blog-page/alert";
import Footer from "components/sections/blog-page/footer";
import Meta from "components/sections/blog-page/meta";

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
