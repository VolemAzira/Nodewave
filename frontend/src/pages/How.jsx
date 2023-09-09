import React from "react";
import chat from "../assets/chat.svg";

const How = () => {
  return (
    <div
      className="my-32 px-5 flex min-h-screen items-center justify-center bg-cover bg-center md:px-[93px]"
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0454/0ba0/30903fef43ef6d9ce4d14298fe07cb7e?Expires=1694995200&Signature=ef9uW4XOE3OdoEUkdSj68TVoQNxf~eF0ofma0Y7jSW3BngfXOipjILn-a1eimHBGLcDVz9l2c0n9vAtECn3OyTJFY2apWHh3sEmxgr7Er1hbeRWApEdxy9IKQYwja-LIyB6SW6pYKhawP3pCohYP7R~4HSDGVGNz9PyjAiEDaRU4si7cByB0NpvW7UVFM3YpshoeV5TbYjYUATUR3mWSP7TSoQ8Iem~2ebQi9RGrU4d1sTTR-Pw1Jy1bNNat2Gl3JDiS4-K-TtWcl-FCk1qV~cqhENrcSzXN9gkubyzD32vJSXexvjkEDniW2bZUA~UJHStYVIuiabRfQ8ATE-mG6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
      }}
    >
      <main className="my-20">
        <h1 className="mb-10 text-center text-3xl font-semibold">
          How We Work
        </h1>
        <section
          className="flex flex-col gap-8 rounded-xl bg-cover bg-center p-8 md:flex-row"
          style={{
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/ccd5/4a4d/3b122720da1ca88799df7ea1d5f7839e?Expires=1694995200&Signature=KCDw1fJt3CUxzxV0fj51SzVJGToFUP7yYpl6SbKxwZVDh19O97G4ikSqewCKP0fwVtU108FetCOmY2wKcb0bbebvf49LMnZjao3Ht~v4H~ccvUjQR0791neM4U6SMIjVbDprK70NNJ70N07fEKjQxvtwHAlPQDQauOKYT4rtvAD3wPCHqTes5SZWghbGgFmvYL2ltHjUCho1CZ73ebKu92HpTSXYb1XNzcud~YX~tKebe7ljQ8gGLSLGwpB710ovTsphMV1PvGZRivsaKcb8wbwQL6Xumr6Fe9DwEVG-xA3dy623iSbGrSJowyqKlqm94SXWcsbpMxt6acY3SRQeLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
          }}
        >
          <img src={chat} alt="" />
          <div className="max-w-[360px]">
            <h2 className="my-3 text-xl font-semibold">Estimate</h2>
            <p className="text-xl font-normal">
              Estimate the cost of creating your application with us. Pricing is
              transparent at the start with a gradual payment method.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default How;
