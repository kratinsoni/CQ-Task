import Card from "./components/Card";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";

function App() {
  const [text] = useTypewriter({
    words: ["UN Bodies"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 50,
  });

  const bodies = [
    {
      name: "United Nations General Assembly",
      description:
        "The main deliberative, policymaking, and representative organ of the UN, comprising all 193 Member States.",
      imageUrl:
        "https://ca1-eci.edcdn.com/_720xAUTO_crop_center-center_none/UNGA.jpg?v=1712666687",
    },
    {
      name: "United Nations Security Council",
      description:
        "Charged with maintaining international peace and security, it has 15 members, including five permanent members with veto power.",
      imageUrl:
        "https://vajiram-prod.s3.ap-south-1.amazonaws.com/United_Nations_Security_Council_e0b264e79e.jpg",
    },
    {
      name: "United Nations Economic and Social Council (ECOSOC)",
      description:
        "Coordinates the economic, social, and related work of 15 UN specialized agencies, their functional commissions, and five regional commissions.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKx-_VGa-f522wavE-QwrM6Giqulh4TZQCQ&s",
    },
    {
      name: "International Court of Justice (ICJ)",
      description:
        "The principal judicial organ of the United Nations, it settles legal disputes between states and gives advisory opinions on international legal issues.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1_-4OGo2lEHcl2DfiZ2smUIIY1AZ9cjH4w&s",
    },
    {
      name: "United Nations Secretariat",
      description:
        "Carries out the day-to-day work of the UN as mandated by the General Assembly and the Organization’s other principal organs, led by the Secretary-General.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Emblem_of_the_United_Nations.svg/800px-Emblem_of_the_United_Nations.svg.png",
    },
    {
      name: "United Nations Human Rights Council",
      description:
        "An inter-governmental body responsible for strengthening the promotion and protection of human rights around the globe.",
      imageUrl: "https://diplo-media.s3.eu-central-1.amazonaws.com/UNHRC_2.jpg",
    },
    {
      name: "United Nations High Commissioner for Refugees (UNHCR)",
      description:
        "Provides protection, assistance, and durable solutions for refugees and other displaced persons.",
      imageUrl:
        "https://www.shutterstock.com/image-vector/gorontalo-indonesia-23-november-2023-260nw-2391787225.jpg",
    },
    {
      name: "United Nations Children's Fund (UNICEF)",
      description:
        "Works for the rights of every child, focusing on the most disadvantaged children and families.",
      imageUrl:
        "https://diplo-media.s3.eu-central-1.amazonaws.com/UNICEF_3.png",
    },
    {
      name: "United Nations Development Programme (UNDP)",
      description:
        "Works to eradicate poverty and reduce inequalities through sustainable development.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/UNDP_logo.svg/1011px-UNDP_logo.svg.png",
    },
    {
      name: "World Health Organization (WHO)",
      description:
        "Directs and coordinates international health within the UN system.",
      imageUrl:
        "https://cdn.who.int/media/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2",
    },
    {
      name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
      description:
        "Seeks to build peace through international cooperation in education, the sciences, and culture.",
      imageUrl:
        "https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unesco-logo-260px.jpg",
    },
    {
      name: "International Monetary Fund (IMF)",
      description:
        "Works to foster global monetary cooperation, secure financial stability, facilitate international trade, promote high employment and sustainable economic growth, and reduce poverty around the world.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7e/International_Monetary_Fund_logo.svg",
    },
  ];



  return (
    <div className="w-screen px-12 py-4 bg-slate-100">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-poppins text-6xl mx-20 my-12"
      >
        <div>
          {text} <Cursor />
        </div>
        <div className="border-yellow-400 border-8 my-3 md:w-48 lg:w-96"></div>
      </motion.div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center py-8 gap-8 ">
        {bodies.map((body) => (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="my-6"
          >
            <Card name={body.name} imageUrl={body.imageUrl} description={body.description}/>
          </motion.div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
