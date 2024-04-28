const FAQ = () => {
  return (
    <div>
      <h2 className=" font-bold text-3xl text-amber-500 mb-6">FAQ</h2>
      <div className="join join-vertical w-full  border border-amber-300 p-5">
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do I purchase artwork from your website?
          </div>
          <div className="collapse-content">
            <p>
              Provide information on the purchasing process, including how to
              add items to the cart, payment methods accepted, and shipping
              options available.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item0">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer custom artwork or commissions?
          </div>
          <div className="collapse-content">
            <p>
              Explain whether you offer custom paintings or drawings based on
              customer requests, and detail the process for commissioning
              artwork.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item0">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              Outline your return or exchange policy, including any conditions
              or timeframes for returns, and how refunds or replacements are
              processed.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item0">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What if I have a question that's not addressed here?
          </div>
          <div className="collapse-content">
            <p>
              Encourage visitors to reach out with any additional questions or
              inquiries they may have and provide contact information for
              customer support.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item0">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do I care for and preserve the artwork I purchase?
          </div>
          <div className="collapse-content">
            <p>
              Offer tips and guidelines on how to properly care for and display
              the artwork to ensure its longevity and preservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
