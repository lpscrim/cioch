const mensHeaders = ["", "", "S", "M", "L", "XL", "XXL"];
const mensRows = [
  { label: "B", desc: "Arm length", values: ["75", "77.5", "80", "82.5", "85"] },
  { label: "C", desc: "Inside leg", values: ["75", "<", "", ">", "82"] },
  { label: "D", desc: "Body rise", values: ["23", "<", "", ">", "29"] },
  { label: "F", desc: "Nape to waist", values: ["47.5", "49", "51", "55", "55"] },
  { label: "G", desc: "Chest", values: ["86-91", "92-97", "98-103", "104-109", "110-115"] },
  { label: "H", desc: "Waist", values: ["71-76", "79-84", "86-91", "94-99", "102-107"] },
  { label: "I", desc: "Seat", values: ["91", "97", "103", "108", "113"] },
  { label: "J", desc: "Collar", values: ["38.5", "39.5", "40.5", "41.5", "43"] },
];

const ladiesHeaders = ["", "", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26"];
const ladiesRows = [
  { label: "B", desc: "Arm length", values: ["74", "75", "76", "77", "<", "", "", "", ">", "78"] },
  { label: "C", desc: "Inside leg", values: ["75.5", "<", "", "", "", "", "", "", ">", "77.5"] },
  { label: "D", desc: "Body rise", values: ["26.5", "<", "", "", "", "", "", "", ">", "33.5"] },
  { label: "F", desc: "Nape to waist", values: ["39", "<", "", "", "", "", "", "", ">", "43"] },
  { label: "G", desc: "Chest", values: ["81", "85", "89", "94", "99", "194", "109", "114", "119", "124"] },
  { label: "H", desc: "Waist", values: ["61", "65", "69", "75", "79", "84", "89", "94", "99", "104"] },
  { label: "I", desc: "Hips", values: ["86", "90", "95", "100", "105", "110", "115", "120", "125", "130"] },
  { label: "J", desc: "Collar", values: ["35", "36", "37", "38", "39.2", "40.4", "41.6", "42.8", "44", "45.2"] },
];

const childrenHeaders = ["", "", "3 mths", "6 mths", "12 mths", "18 mths", "", "3-4 yrs", "5-6 yrs", "7-8 yrs", "9-10 yrs", "10-12 yrs"];
const childrenRows = [
  { desc: "Height (cm)", values: ["43 - 61", "61 - 67", "67- 79", "79 - 87", "", "104", "116", "128", "140", "152"] },
  { desc: "Weight (kg)", values: ["3 - 6", "6 - 8", "8 - 10", "10 - 11", "", "-", "-", "-", "-", "-"] },
  { desc: "Chest (cm)", values: ["-", "-", "-", "-", "", "57", "61", "66", "72", "79"] },
];

export default function Sizes() {
  return (
    <div className="text-text-secondary px-6 py-8 max-w-full">
      <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center my-10">
         Off the Peg Sizes</h2>
      <p className="mb-6 text-2xl">Our ‘off the peg’ garments are made to fit the following sizes:</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">For men of medium height 170 - 178cm (5’5” - 5’’10”)</h2>
      <div className="block w-full overflow-x-auto rounded-lg border border-foreground bg-text mb-10">
        <div className="flex font-bold bg-text-secondary text-text border-b border-foreground min-w-[500px]">
          {mensHeaders.map((h, i) => (
            <span key={i} className="flex-1 min-w-[60px] py-2 px-3 text-center">{h}</span>
          ))}
        </div>
        {mensRows.map((row) => (
          <div className="flex border-b border-foreground min-w-[500px]" key={row.label}>
            <span className="flex-1 min-w-[30px] py-2 px-3 font-medium text-text-secondary text-left">{row.label}</span>
            <span className="flex-1 min-w-[60px] py-2 px-3 font-medium text-text-secondary text-left">{row.desc}</span>
            {row.values.map((v, j) => (
              <span className="flex-1 min-w-[60px] py-2 px-3 text-center" key={j}>{v}</span>
            ))}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-2">For Ladies of medium height 160 - 170cm (5’3” - 5’7”)</h2>
      <div className="block w-full overflow-x-auto rounded-lg border border-foreground bg-text mb-10">
        <div className="flex font-bold bg-text-secondary border-b border-foreground  text-text min-w-[700px]">
          {ladiesHeaders.map((h, i) => (
            <span key={i} className="flex-1 min-w-[50px] py-2 px-3 text-center">{h}</span>
          ))}
        </div>
        {ladiesRows.map((row) => (
          <div className="flex border-b border-foreground min-w-[700px]" key={row.label}>
            <span className="flex-1 min-w-[30px] py-2 px-3 font-medium text-text-secondary text-left">{row.label}</span>
            <span className="flex-1 min-w-[50px] py-2 px-3 font-medium text-text-secondary text-left">{row.desc}</span>
            {row.values.map((v, j) => (
              <span className="flex-1 min-w-[50px] py-2 px-3 text-center" key={j}>{v}</span>
            ))}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Children</h2>
      <div className="block w-full overflow-x-auto rounded-lg border border-foreground bg-text">
        <div className="flex font-bold bg-text-secondary border-b border-foreground min-w-[700px]">
          {childrenHeaders.map((h, i) => (
            <span key={i} className="flex-1 min-w-[50px] py-2 px-3 text-center  text-text">{h}</span>
          ))}
        </div>
        {childrenRows.map((row) => (
          <div className="flex border-b border-foreground min-w-[700px]" key={row.desc}>
            <span className="flex-1 min-w-[50px] py-2 px-3 font-medium text-text-secondary text-left">{row.desc}</span>
            {row.values.map((v, j) => (
              <span className="flex-1 min-w-[50px] py-2 px-3 text-center" key={j}>{v}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}