import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Projects
      </h2>
      <div className="flex flex-wrap ">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-14 ">
            <div className="p-10   shadow-sm rounded-xl ">
              <p className="text-4xl mb-8 text-blue-800">
                {option.title}
              </p>
              <p className="mb-4">
                <span className="text-3xl mt-6 mr-2">{option.price}</span>
        
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.Link}
                target="_blank"
                className="inline-flex justify-center items-center text-center w-full border-0 bg-yellow-400 h-12 p-5 mt-20 tracking-tight text-xl hover:bg-yellow-600  rounded-lg transition duration-200"
              >
                Github Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
