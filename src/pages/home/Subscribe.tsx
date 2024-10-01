import { Button } from "antd";
const Subscribe = () => {
  return (
    <div className="">
      <div
        className=" bg-cover
        bg-center relative h-full md:max-h-[144px] py-5 px-2"
        style={{ backgroundImage: `url(/assets/subscribe.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>

        <div className="relative  z-10  mx-auto text-center">
          <div className=" container mx-auto text-start grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <h2 className="text-xl font-semibold text-[#EEEEEE] mb-4">
                Subscribe To Our Email Alerts
              </h2>

              <p className=" text-[#E6E6E6] mb-6">
                Subscribe and stay updated on the latest news & special deals!
              </p>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md py-4 bg-[#E9E9E9] px-8 rounded-full border-none focus:outline-none "
              />

              <Button
                shape="round"
                className="px-6"
                style={{
                  height: "54px",
                  width: "141px",
                  backgroundColor: "#0A8FDC",
                  fontWeight: "500",
                  border: "none",
                  color: "#fff",
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
