import React from "react";
import { Link } from "react-router";

const NewsLetterComponent = () => {
  return (
    <div className="mb-10 flex flex-col md:flex-row border rounded-lg border-slate-200 shadow-lg p-6 gap-4 items-center justify-center">
      <div className="w-full space-y-2">
        <h3 className="mb-4">📬Subscribe to Our Newsletter</h3>
        <p>
          Be the first to experience the best of our subscription
          boxes—delivered straight to your inbox!
        </p>

        <p>
          ✔️Get exclusive previews of our carefully curated monthly selections
        </p>
        <p>✔️Discover the local traditions and stories behind each box.</p>
        <p>✔️Opportunities to directly support local businesses and makers.</p>
        <p>✔️Stay updated on new themes and exciting local collaborations.</p>
      </div>

      {/* SubsCribe Form */}
      <form className=" w-full space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First-name"
            className="border w-full border-slate-300 py-3 rounded-sm pl-2"
          />

          <input
            type="text"
            placeholder="Last-name"
            className="border border-slate-300 w-full py-3 rounded-sm pl-2"
          />
        </div>
        <input
          type="email"
          placeholder="Your work email...."
          className="border border-slate-300 py-3 w-full rounded-sm pl-2"
        />
        <br />
        <input
          type="Company"
          placeholder="Your Company"
          className="border w-full border-slate-300 py-3 rounded-sm pl-2"
        />
        <br />
        <input
          type="button"
          value="Subscribe"
          className="py-3 bg-primary text-white w-full px-3 rounded-sm cursor-pointer"
        />
      </form>
    </div>
  );
};

export default NewsLetterComponent;
