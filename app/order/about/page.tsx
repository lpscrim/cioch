import React from "react";
import Image from "next/image";

export default function OrderPage() {
  return (
    <div className="z-200">
      <div className="max-w-4xl mx-auto bg-text rounded-xl shadow-lg p-8 text-text-secondary">
      <h1 className="text-2xl font-bold mb-4">Guide to Ordering</h1>
      <div className="flex flex-col sm:flex-row gap-6 mb-4">
        <Image
          src="/outlinepeople.gif"
          alt="How to take measurements"
          width={312}
          height={218}
          className="rounded-md border border-text self-center"
        />
        <p className="text-base">
          Please complete the order form as fully as possible, ensuring that you give a contact phone number or e-mail address.
          <br />
          <br />
          Call us if you are not sure about the measurements required.
          <br />
          <br />
          Measurements should be taken (by someone else) over light clothing. This only takes a few minutes but please check them carefully. Use a dress-makers tape measure - not a metal one! We allow for extra layers.
          <br />
          <br />
          Extra information such as the cause of any fitting problems with standard sizes is very useful.
          <br />
          <br />
          If we are at all concerned about the measurements, we will contact you to check - we prefer to get a Perfect Fit™ first time!
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">Delivery Time</h2>
      <p className="mb-4">
        Waterproofs will be delivered in 3-4 weeks, other garments in 2-3 weeks, usually less. If you need something urgently, please call; we can usually deliver within a few days unless it is a very busy period.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Confirmation and Payment</h2>
      <p className="mb-4">
        After we receive your order we will contact you either by telephone or e-mail so that we can confirm your order and discuss payment and delivery details.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Measuring Guide</h2>
      <div className="overflow-x-auto">
        <table id="order" className="min-w-full border border-text text-sm mb-4">
          <thead>
            <tr className="bg-foreground">
              <th className="px-3 py-2 border-b border-text text-left">Letter</th>
              <th className="px-3 py-2 border-b border-text text-left">Measurement</th>
              <th className="px-3 py-2 border-b border-text text-left">How to Measure</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["A", "Height", "Measured without shoes"],
              ["B", "Arm length", "Extend arm horizontally. Measure from the angle where your shoulder “meets” your neck to 3rd knuckle of middle finger for waterproofs and windshirt, (2nd knuckle for fleeces)."],
              ["C", "Inside leg", "Remove shoes, stand upright, leg straight, measure from crutch to floor."],
              ["D", "Body rise", "At the centre back, measure vertically from the waist (normal position of your waistband), to a horizontal line from the crutch. A waist to floor measurement should equal C+D."],
              ["E", "Back length of jacket", "From the nape of your neck to the required finished length of the jacket."],
              ["F", "Nape to waist", "From the nape to the waist point in D. The nape to floor measurement should equal C+D+F."],
              ["G", "Chest/ Bust", "Measure around torso under the arms"],
              ["H", "Waist", "Measure around the waist at the height in D"],
              ["I", "Seat/ Hips", "Measure around the hips at the widest point."],
              ["J", "Collar", "Measure around your neck."],
            ].map(([letter, name, desc]) => (
              <tr key={letter}>
                <td className="px-3 py-2 border- border-text font-semibold">{letter}</td>
                <td className="px-3 py-2 border-b border-text">{name}</td>
                <td className="px-3 py-2 border-b border-text">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
