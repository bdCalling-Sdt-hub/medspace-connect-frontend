import React from "react";
import { Pagination } from "antd";
import Link from "next/link";
import Subscribe from "@/src/pages/home/Subscribe";
const NewsPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="my-8">
          <h2 className="text-primary text-2xl font-semibold mb-4">
            Latest News
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {[...Array(6)].map((news, index) => {
            return (
              <div
                key={index}
                className="bg-cover overflow-hidden bg-center relative h-[284px] py-5 px-2 group"
                style={{
                  backgroundImage: `url("https://s3-alpha-sig.figma.com/img/f821/9db9/1ef11069ad0c27086bc33d20170ef82e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nw4XVAS-OLaP-hEvtY76p4e3m7FE5yrO3XDO4Sy0VS7eFmpLDQaEi8sqo98~GZvOiNUBpM6OuK28LOs8Ue60f-VblJrP6JLctkvGTbuctETGXtcvGWt8-7sjW-adM5-jbSTT7iRQGbu9Lk5xy8K7i3An46zh28QLnlZk-BQZPy2S7zO-DPMyaf~83YYADP0V2b4~l-hYI-aJnhv-BXKo8QUmveWcObBe5FsPIotzXvh4Oyec~bppNlkU7M1EN8AR2s36aGioYtWz9vNgUvzBz~nXCbocxR~KJWWzJ6oTyOgBxXOVipDfTBFtbXYnNYtwBJ8yCcC4EsMDXfkz374IxA__")`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-35"></div>

                <div className="absolute translate-y-10 space-y-4 overflow-hidden duration-300 group-hover:translate-y-0 w-full left-0 bottom-0  p-4">
                  <h1 className="text-2xl font-semibold my-3 text-[#FAFAFA]">
                    Why doctors have to take our service{" "}
                  </h1>
                  <Link href={`/newsDetails/${index + 1}`}>
                    <div className="text-[#FAFAFA] flex items-center gap-2 underline">
                      <p>Visit Now</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* pagination */}
        <div className="my-4">
          <Pagination align="center" defaultCurrent={1} total={50} />
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default NewsPage;
