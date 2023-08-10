const Subscription = () => {
  return (
    <div className="input__container">
      <h1 className="text-4xl font-medium text-start">
        Discover the latest tools and <br />
        trends in AI
      </h1>
      <p className="input__description text-start">
        What do you want to call yourself?
      </p>
      <input
        placeholder="Enter your username"
        className="input"
        name="text"
        type="text"
      />
    </div>
  );
};

export default Subscription;
