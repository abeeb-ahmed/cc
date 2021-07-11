import React from "react";
import "./PageNotFound.css";
import Button from "../components/Button";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img
        src="https://lh3.googleusercontent.com/zGDT3wcWPAwaBQZBPGRigib0sdWi1zDrsDLj1oSKWTQBcfZ44O_IN5gzd2XxgCt1K9CyQyuuuhnYszXELa7VacsPb40c6fa4PBpYs6UiERPSzbGWdzgc8t6w4ZfIcnAPbbq86_9bZnH6A9vtwyHQzcp_WkZian5EUBRqwE3lZbhWXssHC4681BFEcsO4ygdjggnyMwrhObWiTtHreUrqTPGs46LOYepk3U0O8YQwJZ5TlmUCp7cdUY3xPB9mmQdL7XNr0a8c6WnQfUNJx3_onWLXlCpWDZpQrtEwdiWg-byIV_WUkIRv8afViug1r7nQLWkgjHtWfZEryL7PFwBAfVykxLEVIQpfs-42twlPO1bcHkYJ5F0qtAxz_RNgd9Zbh65RWlgVnYnDW2LHQ_M3ZWuxndv43LsuXLLq0Hzf1zY9vbYScvp1xj-Fkvo3allPNOyUJh7pZABxfFznpKvC0kTRAhR91q9_s2qSHJMQmGqCDs1hQXyaYs-TzgIZBm1xcX67k286t7GMRh_GBZO4xtoHUWgxuCE-12YWpipMqOroK20onCt9nQsNULQi_UgnqH542EQl6Uq3QrkafwVPyGZ6rx6BfvzwSJN2c4JTdPKXgK0U0unyLeUt3OAP_gGZoW4R4vvDrAUh5hNfjguOSp7bBjF5z6W4i7TqHRRyf3FiPZVO2DuQGPXkj0QkJ09DuKFfhn-WlhbmEScDsXN9Jinf=w752-h501-no?authuser=0"
        alt="app developer in lagos"
      />
      <div className="layer"></div>
      <div className="pnf-text">
        <h2>Sorry, Page Not Found</h2>
        <Button
          whiteFont={true}
          className="pnf-btn"
          title="Go Home"
          url="/"
        ></Button>
      </div>
    </div>
  );
};

export default PageNotFound;
