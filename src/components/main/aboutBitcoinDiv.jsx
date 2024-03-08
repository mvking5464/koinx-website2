//

import CardComponent from "../cardComponet.jsx";
import ColorfulCard from "./colorfulCard.jsx";

export default function AboutBitcoinDiv() {
  //

  return (
    <div>
      <CardComponent>
        <div className=" font-bold text-2xl font-sans mb-4">About Bitcoin</div>
        <div className=" font-semibold text-lg font-sans">What is Bitcoin?</div>
        <p
          className="font-sans pb-5 text-[#3E424A]  leading-6"
          style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
        >
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <div className=" font-bold text-2xl font-sans">
          Lorem ipsum dolor sit amet
        </div>
        <div className="font-sans text-[#3E424A] my-4 leading-6">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </div>
        <div className="font-sans text-[#3E424A] my-4  leading-6">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </div>
        <div
          className="font-sans pb-4 text-[#3E424A]  my-4  leading-6"
          style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
        >
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </div>
        <h3 className=" font-bold text-2xl font-sans divide-green-300 divide-y-2 text-[#3E424A] leading-6">
          Already holding Bitcoin?
        </h3>
        <div className=" grid md:grid-cols-2 grid-cols-1">
          <ColorfulCard
            img={"/mobileOnly.svg"}
            text={"Calculate Your Profits"}
            color={"bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]"}
          />
          <ColorfulCard
            img={"/compMobile.svg"}
            text={"Calculate Your tax liability"}
            color={"bg-gradient-to-br from-[#FF9865] to-[#EF3031]"}
          />
        </div>
        <p className="font-sans text-sm text-[#3E424A]  my-4  leading-6">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </CardComponent>
    </div>
  );
}
