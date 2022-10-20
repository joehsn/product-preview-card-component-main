import desktop from "./images/image-product-desktop.jpg";
import mobile from "./images/image-product-mobile.jpg";
import cart from "./images/icon-cart.svg";
export default function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="w-full md:w-1/2">
          <picture>
            <source media="(min-width:768px)" srcSet={desktop} />
            <img
              src={mobile}
              alt="perfume-desktop"
              className="w-full md:w-auto md:h-full"
            />
          </picture>
        </div>
        <div className="content">
          <div className="perfume">perfume</div>
          <h2 className="title">Gabrielle Essence Eau De Parfum</h2>
          <div className="brief">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="price">
            <span className="font-fraunces pr-4">$149.99</span>
            <span className="line-through text-dark-grayish-blue text-sm">
              $169.99
            </span>
          </div>
          <button className="btn">
            <img src={cart} alt="cart icon" className="mr-3 font-montserrat" />{" "}
            Add to Cart
          </button>
        </div>
      </div>
      <div className="attribution">
        Coded by{" "}
        <a
          href="https://linktr.ee/joe_hsn"
          rel="noreferrer"
          target="_blank"
          className="underline text-blue-700"
        >
          Joe Hsn
        </a>
        .
      </div>
    </div>
  );
}
