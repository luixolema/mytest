import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchUsers } from "../utils/userService";
import Alert from "./Alert";
import Spinner from "./Spinner";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState();
  const [page, setPage] = useState(1);

  function loadMore() {
    setMessage("LOADING");
    fetchUsers(5, page + 1)
      .then((newUsers) => {
        console.log("loaded");
        setUsers([...users, ...newUsers]);
        setPage(page + 1);
      })
      .catch((error) => {
        setMessage({ title: "Error", text: error.message, type: "error" });
      });
  }

  return (
    <div className="uk-container">
      {message && (
        <Alert
          message={message.text}
          title={message.title}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}

      {users.length && (
        <InfiniteScroll
          dataLength={users.length}
          hasMore={page < 10}
          next={loadMore}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="uk-child-width-1-3@m" data-uk-grid></div>
        </InfiniteScroll>
      )}
    </div>
  );
}

//{users.map((user) => (
//  <User key={user.id.vaule} user={user} />
//))}
