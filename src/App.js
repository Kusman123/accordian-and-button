import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "amankhan",
      label: "Is JavaScript is the language of the web",
      content:
        "Yes we can say that , because of 99% of all the websites of the web are built using javascript and also it is vary fast, scaleable so it will provide a very rich experience to the user ",
    },
    {
      id: "usmankhan",
      label: "What is the Main concept Behind event loop",
      content:
        "Yes we can say that , because of 99% of all the websites of the web are built using javascript and also it is vary fast, scaleable so it will provide a very rich experience to the user ",
    },
    {
      id: "ballekhan",
      label: "What are css frameworks avauilable in the market",
      content:
        "Yes we can say that , because of 99% of all the websites of the web are built using javascript and also it is vary fast, scaleable so it will provide a very rich experience to the user ",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
