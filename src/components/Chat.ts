// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  require("dotenv").config()  ;

  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyBvSswhwR0HD6LfgHLsjGHxtjw7Rgq5wro";
  
async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "i have made a project on the problem statement Develop a decentralized platform that connects \nhouseholds and businesses with local waste-to-energy conversion facilities. \nUsing blockchain technology, the platform should facilitate the exchange of \norganic waste for energy credits, incentivizing sustainable waste disposal \nand energy production\nprovide an explanation to it "}],
        },
        {
          role: "model",
          parts: [{ text: "*Problem Statement:\n\nDevelop a decentralized platform that connects households and businesses with local waste-to-energy conversion facilities. Using blockchain technology, the platform should facilitate the exchange of organic waste for energy credits, incentivizing sustainable waste disposal and energy production.\n\nProject Description:\n\nDecentralized Platform:\n\n Create a peer-to-peer network where households and businesses can interact directly with waste-to-energy facilities.\n* Eliminate intermediaries and transaction fees associated with traditional waste disposal methods.\n\n*Blockchain Technology:\n\n Implement blockchain to provide transparency and immutability in waste tracking and energy credit exchange.\n* Record waste disposal transactions and energy credit ownership on a secure, distributed ledger.\n\n*Waste-to-Energy Conversion:\n\n Connect households and businesses to local waste-to-energy facilities that convert organic waste into renewable energy sources such as biogas or electricity.\n* Facilitate the collection and transportation of organic waste from source to conversion facility.\n\n*Energy Credit Exchange:\n\n Establish a tokenized system where households and businesses earn energy credits for contributing organic waste.\n* Enable the exchange of energy credits for electricity, gas, or discounts on waste disposal services.\n\n*Incentivization:\n\n Reward households and businesses for responsible waste disposal and participation in the decentralized platform.\n* Offer financial incentives, such as energy credit bonuses or tax breaks, for reducing waste and contributing to renewable energy production.\n\n*Benefits:\n\n *Reduced Waste Disposal Costs:* Eliminates expensive landfill and waste collection fees for households and businesses.\n* *Renewable Energy Production:* Creates a sustainable and local source of renewable energy, reducing dependence on fossil fuels.\n* *Environmental Sustainability:* Diverts organic waste from landfills, reducing methane emissions and promoting circular economy practices.\n* *Decentralization:* Empowers households and businesses to take control of their waste disposal and energy consumption.\n* *Transparency and Accountability:* Blockchain technology ensures transparent tracking of waste disposal and energy credit distribution, fostering trust and accountability among participants."}],
        },
        {
          role: "user",
          parts: [{ text: "i have added an iot based smart dustbin to it which automatically segregates the dry and wet waste after we put into it "}],
        },
        {
          role: "model",
          parts: [{ text: "*Integration of IoT-Based Smart Dustbin:\n\nOverview:\n\nIncorporate an IoT-based smart dustbin into the decentralized waste-to-energy platform to enhance waste segregation and optimize waste management.\n\nFunctionality:\n\n *Automatic Waste Segregation:* The smart dustbin utilizes sensors and machine learning algorithms to automatically segregate dry and wet waste as it is deposited.\n* *Real-Time Monitoring:* Sensors within the dustbin monitor waste levels, temperature, and other parameters, providing real-time data on waste accumulation.\n* *Remote Access and Control:* The dustbin can be remotely accessed and controlled via a mobile application or web interface, allowing users to monitor waste levels and schedule waste collection.\n\n*Benefits:\n\n *Improved Waste Segregation:* Automating waste segregation at the source reduces contamination and improves the quality of waste delivered to waste-to-energy facilities.\n* *Optimized Waste Collection:* Real-time monitoring of waste levels enables efficient waste collection schedules, reducing unnecessary trips and fuel consumption.\n* *Reduced Landfill Waste:* By effectively segregating dry and wet waste, the amount of organic waste diverted from landfills is increased, promoting circular economy practices.\n* *Enhanced User Experience:* The convenience of automatic waste segregation and remote access to waste data improves the user experience for households and businesses.\n\n*Integration with Platform:\n\n The smart dustbin data is integrated with the decentralized platform, providing a comprehensive view of waste disposal and energy credit distribution.\n* Users can earn energy credits based on the amount and type of waste they segregate and deposit in the smart dustbin.\n* Real-time waste monitoring data can be used to optimize waste collection routes and improve the efficiency of the waste-to-energy conversion process.\n\n*Overall Impact:*\n\nThe integration of an IoT-based smart dustbin enhances the sustainability, efficiency, and user-friendliness of the decentralized waste-to-energy platform. It promotes responsible waste disposal, reduces landfill waste, and supports the production of renewable energy from organic waste."}],
        },
        {
          role: "user",
          parts: [{ text: "I have also made an indigenous formula for dynamic pricing which will create a demand and supply pull in the society to submit there waste correctly"}],
        },
        {
          role: "model",
          parts: [{ text: "*Indigenous Formula for Dynamic Pricing:\n\nOverview:\n\nDevelop a dynamic pricing formula that adjusts the price of waste disposal and energy credits based on supply and demand. This formula aims to incentivize responsible waste disposal and optimize the efficiency of the waste-to-energy conversion process.\n\nFormula:\n\nThe dynamic pricing formula considers the following factors:\n\n *Waste Type:* Dry waste and wet waste are priced differently based on their calorific value and ease of conversion into energy.\n* *Waste Volume:* The price per unit of waste increases as the total volume of waste deposited in the system increases. This encourages users to reduce waste generation and promote recycling.\n* *Energy Demand:* The price of energy credits increases during peak demand periods, incentivizing users to shift their waste disposal to off-peak hours.\n* *Waste-to-Energy Conversion Efficiency:* The formula takes into account the efficiency of the waste-to-energy conversion process, ensuring that users are fairly compensated for the energy potential of their waste.\n\n*Impact on Demand and Supply:\n\n *Demand for Responsible Waste Disposal:* By pricing wet waste higher than dry waste, the formula encourages users to segregate their waste correctly.\n* *Supply of Organic Waste:* The dynamic pricing mechanism incentivizes households and businesses to contribute their organic waste to the waste-to-energy system, increasing the supply of renewable energy feedstock.\n* *Optimization of Energy Production:* Adjusting the price of energy credits based on demand ensures that the waste-to-energy facilities operate at optimal capacity, maximizing energy production and reducing waste.\n\n*Benefits:\n\n *Reduced Landfill Waste:* The dynamic pricing formula discourages the disposal of organic waste in landfills, promoting sustainable waste management practices.\n* *Increased Renewable Energy Production:* By incentivizing the supply of organic waste, the formula supports the production of renewable energy from local sources.\n* *Fair Compensation for Waste Contributors:* The formula ensures that users are fairly compensated for the energy potential of their waste, fostering a sense of ownership and responsibility.\n* *Improved System Efficiency:* Dynamic pricing optimizes the waste-to-energy conversion process, reducing operating costs and maximizing energy output.\n\n*Integration with Platform:\n\n The dynamic pricing formula is integrated into the decentralized waste-to-energy platform, automatically adjusting the price of waste disposal and energy credits based on real-time data.\n* Users can access the pricing information through the platform's mobile application or web interface.\n\n*Overall Impact:*\n\nThe indigenous formula for dynamic pricing creates a demand and supply pull that encourages responsible waste disposal and optimizes the efficiency of the waste-to-energy conversion process. It promotes sustainability, supports renewable energy production, and fosters a fair and transparent waste management system."}],
        },
      ],
    });
  
    const result = await chat.sendMessage("YOUR_USER_INPUT");
    const response = result.response;
    console.log(response.text());
  }
  
runChat();