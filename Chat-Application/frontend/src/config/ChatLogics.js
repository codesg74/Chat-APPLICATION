export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

export const getSender = (loggedUser, users) => {
  if (!users || users.length < 2 || !loggedUser) return "Unknown";

  const [firstUser, secondUser] = users;
  if (!firstUser || !secondUser) return "Unknown";

  return firstUser._id === loggedUser._id ? secondUser.name || "Unknown" : firstUser.name || "Unknown";
};

export const getSenderFull = (loggedUser, users) => {
  if (!users || users.length < 2 || !loggedUser) return null;

  const [firstUser, secondUser] = users;
  if (!firstUser || !secondUser) return null;

  return firstUser._id === loggedUser._id ? secondUser : firstUser;
};
