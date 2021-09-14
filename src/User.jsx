import { useState } from "react";

export default function User({ user }) {
  const [showMore, setShowMore] = useState(false);
  const name = `${user.name.title}. ${user.name.first} ${user.name.last}`;

  return (
    <div className="uk-card uk-card-default uk-box-shadow-hover-large">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              alt={user.name.title + " " + user.name.last}
              src={user.picture.medium}
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time dateTime="2016-04-01T19:00">{user.email}</time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <div></div>
        <div className="uk-animation-slide-top-small" hidden={showMore}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
      <div className="uk-card-footer">
        <a
          onClick={() => setShowMore(!showMore)}
          className="uk-button uk-button-text"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
