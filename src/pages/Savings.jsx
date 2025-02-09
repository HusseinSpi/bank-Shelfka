import { useState } from "react";

// components
import Button from "../components/Form/Button";
import Layout from "../components/Layout/Layout";
import Divider from "../components/Divider/Divider";
import Currency from "../components/Currency/Currency";

const Savings = () => {
  const [selected, setSelected] = useState("");

  const handleOnSelect = (symbol) => {
    setSelected(symbol);
  };

  return (
    <Layout>
      <Divider />

      <h1 className="title no-select">Savings</h1>

      <p className="information text-shadow">
        Annual Equivalent Rate or AER, is used to show what you would earn in
        interest over a year. Please select a currency in the list.
      </p>

      <Divider />

      <div className="history">
        <Currency
          aer="2.29% AER"
          name="British Pound"
          shortName="GBP"
          active={selected === "GBP"}
          onSelect={() => {
            handleOnSelect("GBP");
          }}
        >
          <svg
            fill="#ffffff"
            width="25px"
            height="25px"
            viewBox="0 0 20 20"
            stroke="#ffffff"
          >
            <g>
              <path d="M 9.5019531 3 L 9.1347656 3.015625 L 8.7675781 3.0605469 L 8.4082031 3.1347656 L 8.0546875 3.2382812 L 7.7109375 3.3710938 L 7.3808594 3.53125 L 7.0625 3.71875 L 6.7617188 3.9296875 L 6.4785156 4.1660156 L 6.2167969 4.4238281 L 5.9765625 4.7011719 L 5.7597656 5 L 5.5683594 5.3144531 L 5.4023438 5.6425781 L 5.2636719 5.984375 L 5.1542969 6.3339844 L 5.0722656 6.6933594 L 5.0214844 7.0585938 L 5 7.4257812 L 5.0097656 7.7929688 L 5.0488281 8.1601562 L 5.1171875 8.5214844 L 5.2148438 8.875 L 5.2558594 9.0019531 L 4 9.0019531 L 4 10 L 5.4980469 10 L 5.5742188 10.490234 L 5.6230469 10.982422 L 5.6425781 11.476562 L 5.6386719 11.970703 L 5.6074219 12.464844 L 5.546875 12.957031 L 5.4609375 13.443359 L 5.3457031 13.923828 L 5.2089844 14.398438 L 5.0410156 14.863281 L 4.8515625 15.320312 L 4.6367188 15.765625 L 4.3964844 16.199219 L 5.1933594 16.988281 L 5.5878906 16.773438 L 5.9980469 16.583984 L 6.4179688 16.419922 L 6.8476562 16.283203 L 7.2871094 16.175781 L 7.7304688 16.095703 L 8.1777344 16.044922 L 8.6289062 16.023438 L 9.0800781 16.03125 L 9.53125 16.068359 L 9.9765625 16.132812 L 10.417969 16.226562 L 10.851562 16.347656 L 11.277344 16.5 L 11.693359 16.675781 L 11.996094 16.798828 L 12.308594 16.894531 L 12.630859 16.960938 L 12.957031 16.996094 L 13.285156 17 L 13.611328 16.974609 L 13.933594 16.917969 L 14.25 16.830078 L 14.558594 16.714844 L 14.851562 16.570312 L 15.132812 16.400391 L 15.394531 16.203125 L 15.638672 15.984375 L 14.931641 15.273438 L 14.726562 15.458984 L 14.5 15.619141 L 14.257812 15.751953 L 14.001953 15.859375 L 13.736328 15.9375 L 13.462891 15.984375 L 13.1875 16.001953 L 12.912109 15.988281 L 12.638672 15.945312 L 12.373047 15.871094 L 12.115234 15.769531 L 11.658203 15.572266 L 11.189453 15.40625 L 10.712891 15.269531 L 10.228516 15.162109 L 9.7363281 15.083984 L 9.2421875 15.037109 L 8.7460938 15.021484 L 8.25 15.037109 L 7.7558594 15.083984 L 7.265625 15.160156 L 6.7792969 15.267578 L 6.3027344 15.404297 L 5.8359375 15.568359 L 6.0253906 15.089844 L 6.1914062 14.599609 L 6.3339844 14.103516 L 6.4492188 13.599609 L 6.5371094 13.089844 L 6.5996094 12.576172 L 6.6347656 12.060547 L 6.6445312 11.544922 L 6.6269531 11.027344 L 6.5839844 10.513672 L 6.5117188 10 L 10 10 L 10 9.0019531 L 6.2949219 9.0019531 L 6.1660156 8.5703125 L 6.0820312 8.2539062 L 6.0253906 7.9296875 L 6.0019531 7.6015625 L 6.0078125 7.2753906 L 6.0449219 6.9472656 L 6.1113281 6.625 L 6.2089844 6.3125 L 6.3339844 6.0097656 L 6.4863281 5.71875 L 6.6679688 5.4453125 L 6.8730469 5.1894531 L 7.0996094 4.953125 L 7.3515625 4.7382812 L 7.6191406 4.5488281 L 7.9023438 4.3867188 L 8.2011719 4.25 L 8.5136719 4.1425781 L 8.8320312 4.0664062 L 9.15625 4.0175781 L 9.484375 4 L 9.8125 4.0136719 L 10.138672 4.0585938 L 10.457031 4.1347656 L 10.769531 4.2382812 L 11.068359 4.3710938 L 11.355469 4.5332031 L 11.625 4.71875 L 11.875 4.9316406 L 12.105469 5.1640625 L 12.314453 5.4199219 L 12.498047 5.6914062 L 12.652344 5.9804688 L 12.783203 6.2832031 L 12.882812 6.5957031 L 13.847656 6.3359375 L 13.738281 5.984375 L 13.599609 5.6445312 L 13.433594 5.3144531 L 13.244141 5 L 13.025391 4.703125 L 12.785156 4.4238281 L 12.523438 4.1660156 L 12.240234 3.9296875 L 11.939453 3.71875 L 11.623047 3.53125 L 11.291016 3.3710938 L 10.947266 3.2382812 L 10.595703 3.1347656 L 10.234375 3.0605469 L 9.8691406 3.015625 L 9.5019531 3 z " />
            </g>
          </svg>
        </Currency>
        <Currency
          aer="1.49% AER"
          name="US Dollar"
          shortName="USD"
          active={selected === "USD"}
          onSelect={() => {
            handleOnSelect("USD");
          }}
        >
          <svg
            fill="#ffffff"
            width="20px"
            height="20px"
            viewBox="0 0 85.43 85.43"
            stroke="#ffffff"
          >
            <g>
              <path d="M58.878,42.166c-2.838-2.262-7.025-4.459-12.8-6.717c-6.291-2.446-8.85-3.95-9.891-4.783 c-1.229-0.982-1.801-2.269-1.801-4.047c0-1.271,0-5.14,10.141-5.14c5.443,0,10.383,0.88,14.683,2.615 c0.51,0.206,1.084,0.176,1.569-0.083c0.484-0.258,0.832-0.717,0.947-1.255l1.938-9.064c0.204-0.957-0.367-1.91-1.31-2.179 c-3.549-1.014-8.137-1.629-13.66-1.833V2.01c0.043-0.518-0.135-1.029-0.485-1.411C47.855,0.218,47.359,0,46.843,0h-6.377 c-0.52,0-1.016,0.218-1.369,0.6c-0.353,0.382-0.529,0.896-0.486,1.413l0.053,8.089c-5.588,0.853-9.9,2.938-12.836,6.208 c-3.219,3.588-4.852,7.792-4.852,12.496c0,5.448,2.338,10.081,6.961,13.777c2.707,2.131,6.928,4.325,12.908,6.708 c4.557,1.799,7.702,3.369,9.346,4.668c1.709,1.35,2.541,2.917,2.541,4.79c0,3.493-4.063,5.265-12.078,5.265 c-5.871,0-11.471-1.01-16.648-3.001c-0.508-0.196-1.078-0.159-1.557,0.103c-0.479,0.261-0.82,0.718-0.932,1.25l-1.939,9.189 c-0.209,0.993,0.416,1.971,1.404,2.198c5.516,1.274,11.416,1.976,17.566,2.094l0.033,7.611c-0.029,0.512,0.078,1.014,0.43,1.387 c0.352,0.374,0.842,0.585,1.355,0.585h6.478c0.008,0,0.016,0,0.022,0c1.029,0,1.861-0.833,1.861-1.861 c0-0.143-0.016-0.283-0.047-0.416l0.024-7.928c11.255-1.982,17.188-8.667,17.188-19.412C65.894,50.49,63.533,45.9,58.878,42.166z" />{" "}
            </g>
          </svg>
        </Currency>
        <Currency
          aer="1.19% AER"
          name="Euro"
          shortName="EUR"
          active={selected === "EUR"}
          onSelect={() => {
            handleOnSelect("EUR");
          }}
        >
          <svg
            fill="#ffffff"
            width="20px"
            height="20px"
            viewBox="0 0 310.75 310.75"
            stroke="#ffffff"
          >
            <g>
              <path d="M183.815,265.726c-32.444,0-60.868-21.837-76.306-54.325h102.101v-45.023H95.643c-0.284-3.642-0.437-7.29-0.437-11.016 c0-3.691,0.152-7.384,0.437-10.977h113.969V99.353H107.51c15.438-32.485,43.861-54.315,76.306-54.315 c31.01,0,60.21,20.759,76.2,54.152l40.626-19.418C277.091,30.554,232.329,0,183.815,0c-36.47,0-70.51,16.665-95.851,46.966 C75.219,62.209,65.481,79.995,59.079,99.353H10.108v45.031h40.39c-0.217,3.617-0.329,7.311-0.329,10.977 c0,3.704,0.112,7.351,0.329,11.016h-40.39V211.4h48.971c6.402,19.356,16.14,37.122,28.886,52.351 c25.341,30.303,59.381,46.999,95.851,46.999c48.515,0,93.275-30.55,116.826-79.767l-40.626-19.454 C244.025,244.965,214.825,265.726,183.815,265.726z" />{" "}
            </g>
          </svg>
        </Currency>
      </div>

      <Divider />

      <div className="add-buttons flex flex-space-between">
        <Button
          type="submit"
          text="Continue"
          tabIndex={0}
          disabled={selected === ""}
        />
      </div>

      <Divider />
    </Layout>
  );
};

export default Savings;
