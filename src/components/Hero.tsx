import { Button } from "@/components/ui/button";

// AI fluff text. 
const Hero = () => {
  return (
    <>
      <section className="m-4 flex items-center justify-center space-y-6 pb-8 pt-6 text-secondary-100 md:pt-10 lg:pt-32">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Build Your Own{" "}
            <span className="text-primary-400">Shopping Cart</span> in React
          </h1>
          <p className="max-w-2xl leading-normal text-secondary-400 sm:text-xl sm:leading-8">
            Learn step-by-step how to create a fully functional shopping cart 
            for your e-commerce website. From managing product state to 
            calculating totals, this tutorial has got you covered!
          </p>
          <div className="flex gap-4 pt-12">
            <Button variant="default" type="button">
              Start the Tutorial
            </Button>
            <Button variant="outline" type="button">
              View Demo
            </Button>
          </div>
        </div>
      </section>


      
    </>
  );
};

export default Hero;
