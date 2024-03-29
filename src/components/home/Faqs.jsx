import React from 'react';

const Faqs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl m-5">Frequently Asked Questions</h1>
      
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
          How do I create a travel itinerary?
        </div>
        <div className="collapse-content"> 
          <p>To create a travel itinerary, navigate to the <a style={{ textDecoration: "underline" }} href="/generator">Generator</a> and enter your destination, budget, and other details. Then click on the "Generate" button to get a day-wise itinerary for your trip.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Can I customize the generated itinerary?
        </div>
        <div className="collapse-content"> 
          <p>Yes, you can customize by adjusting the budget allocation, type of trip and duration of trip according to your preferences.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Is there a way to save my itinerary?
        </div>
        <div className="collapse-content"> 
          <p>Yes, we do save your itinerary automatically if you have an account and are logged-in and it can be viewed and deleted whenever you wish.</p>
        </div>
      </div>
      
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          How far in advance should I create my travel itinerary?
        </div>
        <div className="collapse-content"> 
          <p>It is recommended to create your travel itinerary at least a few weeks in advance to ensure that you have enough time to make necessary arrangements and bookings. However, you can also create a last-minute itinerary if needed.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
            How accurate are the travel itineraries generated by the app?
        </div>
        <div className="collapse-content"> 
        <p>This website uses the Gemini AI made by Google DeepMind. While we strive to extract accurate and reliable itineraries from Gemini, users should also use their discretion and verify information before making travel plans.</p>
        </div>
      </div>
      
      <div className="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Are there any hidden fees associated with using the app?
        </div>
        <div className="collapse-content"> 
          <p>No, there are no hidden fees associated with using our app. It is free to use, and we do not charge any additional fees for generating or customizing travel itineraries. However, we do provide information about flights and hotels if a user is logged-in. </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
