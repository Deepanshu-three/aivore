import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "Design Upload",
    description: "Submit your 3D model through our easy-to-use platform.",
  },
  {
    title: "File Analysis",
    description: "Our experts review your design for printability and optimization.",
  },
  {
    title: "Printing",
    description: "Your model is brought to life using advanced 3D printing technology.",
  },
  {
    title: "Post-Processing",
    description: "We refine and finish your printed item for the best results.",
  },
  {
    title: "Quality Check",
    description: "Rigorous inspection ensures your item meets our high standards.",
  },
  {
    title: "Delivery",
    description: "Your finished product is carefully packaged and shipped to you.",
  },
];

const PrintingProcess = () => {
  return (
    <section className="py-16 bg-background w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Our 3D Printing Process
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left - Image */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <Image
              src="/printing.jpg"
              alt="3D Printing Process"
              width={500}
              height={600}
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right - Steps */}
          <div className="w-full space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group transition-all duration-300"
              >
                <div className="min-w-10 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingProcess;
