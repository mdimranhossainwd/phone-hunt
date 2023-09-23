import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Phones from "../Components/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-2xl font-bold text-center py-5">Our Collection</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 container mx-auto">
        {phones.map((phone) => (
          <Phones key={phone.id} phone={phone}></Phones>
        ))}
      </div>
    </div>
  );
};

export default Home;
